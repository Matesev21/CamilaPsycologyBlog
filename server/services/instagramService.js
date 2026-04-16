const getPosts = async (limit = 10) => {
  const token = process.env.INSTAGRAM_TOKEN;
  const id = process.env.INSTAGRAM_ID;

  if (!token || !id) {
    throw new Error(
      "Credenciales de Instagram inválidas o faltantes (Token o ID)",
    );
  }

  const url = `https://graph.facebook.com/v19.0/${id}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    // fetch no lanza error automáticamente en status 400/500, hay que revisarlo manual
    if (!res.ok) {
      throw new Error(
        data.error?.message || "Error al solicitar datos a Instagram",
      );
    }

    const cleanData = (data.data || [])
      .filter(
        // CAROUSEL_ALBUM es el formato para posts con múltiples imagenes de instagram
        (post) =>
          post.media_type === "IMAGE" ||
          post.media_type === "VIDEO" ||
          post.media_type === "CAROUSEL_ALBUM",
      )
      .map((post) => {
        // En caso de VIDEO a veces es mejor pasar el thumbnail_url si se usa para preview de imagen
        const imageUrl =
          post.media_type === "VIDEO"
            ? post.thumbnail_url || post.media_url
            : post.media_url;

        return {
          id: post.id,
          image: imageUrl,
          link: post.permalink,
          text: post.caption
            ? post.caption.length > 110
              ? post.caption.slice(0, 110) + "..."
              : post.caption
            : "",
        };
      });

    return cleanData;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    throw error;
  }
};
export default { getPosts };
