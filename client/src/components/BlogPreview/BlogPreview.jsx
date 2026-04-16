import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./BlogPreview.module.css";

const BlogPreview = ({ limit = 3 }) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const res = await fetch(
          `/.netlify/functions/getInstagramData?limit=${limit}`,
        );

        if (!res.ok) {
          throw new Error("Error de servidor");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstagram();
  }, [limit]);
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
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
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
              src={post.image}
              alt="Instagram Post"
              className={styles.image}
            />
            <p className={styles.caption}>{post.text}</p>
            <a
              key={post.id}
              href={post.link}
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
