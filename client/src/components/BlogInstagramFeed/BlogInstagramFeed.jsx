import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./BlogInstagramFeed.module.css";

const BlogInstagramFeed = ({ limit = 10 }) => {
  const [posts, setPosts] = useState([]);
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
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstagram();
  }, [limit]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Nuestro Espacio en Instagram | @camilanovas.psice
      </h2>

      <div className={styles.grid}>
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt={`Instagram feed ${post.id}`}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <a
          href="https://instagram.com/camilanovas.psice"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Ver más en Instagram
        </a>
      </div>
    </div>
  );
};

export default BlogInstagramFeed;
