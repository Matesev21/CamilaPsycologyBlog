import instagramService from "../services/instagramService.js";

export const handler = async (event, context) => {
  try {
    // Si viene req.query (express local) o event.queryStringParameters (netlify production)
    const limit =
      (event.queryStringParameters && event.queryStringParameters.limit) || 10;
    const posts = await instagramService.getPosts(limit);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Content_Type: "application/json", // Para evitar errores de CORS con tu frontend
      },
      body: JSON.stringify(posts),
    };
  } catch (error) {
    console.error("Error en getInstagramData:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
