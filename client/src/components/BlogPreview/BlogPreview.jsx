import React from "react";
import styles from "./BlogPreview.module.css";

const BlogPreview = () => {
  const posts = [
    {
      title: "5 Tips para la Calma",
      image: "https://placehold.co/200x200",
      excerpt: "Pequeñas acciones diarias que transforman tu bienestar.",
    },
    {
      title: "Entendiendo tus Emociones",
      image: "https://placehold.co/200x200",
      excerpt: "Validar lo que sientes es el primer paso.",
    },
    {
      title: "El Poder de la Rutina",
      image: "https://placehold.co/200x200",
      excerpt: "Cómo los hábitos construyen salud mental.",
    },
  ];

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
            <img src={post.image} alt={post.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <button className={styles.readMore}>Leer más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
