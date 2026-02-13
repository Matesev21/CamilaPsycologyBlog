import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./BlogPreview.module.css";

const BlogPreview = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = import.meta.env.VITE_INSTAGRAM_TOKEN;
  const id = import.meta.env.VITE_INSTAGRAM_ID;
  console.log(id);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const url = `https://graph.facebook.com/v19.0/${id}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=3&access_token=${token}`; /*url de la api*/
        const res = await fetch(url);
        const result = await res.json();

        if (result.data) {
          setPost(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstagram();
  }, [id, token]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.section} id="blog">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Explora cómo puedo acompañarte en cada proceso ➡
        </h2>
      </div>
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <div key={index} className={styles.card}>
            <svg
              className={styles.paperclip}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* El Clip Metálico */}
              <path
                className={styles.clipPath}
                d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                stroke="url(#metalGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Definición del color metálico */}
              <defs>
                <linearGradient
                  id="metalGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f0f0f0" />
                  <stop offset="50%" stopColor="#999" />
                  <stop offset="100%" stopColor="#777" />
                </linearGradient>
              </defs>
            </svg>
            <img
              src={
                post.media_type === "VIDEO"
                  ? post.thumbnail_url
                  : post.media_url
              }
              alt="Instagram Post"
              className={styles.image}
            />
            <p className={styles.caption}>
              {post.caption ? post.caption.slice(0, 110) + "...." : ""}
            </p>
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Leer más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
