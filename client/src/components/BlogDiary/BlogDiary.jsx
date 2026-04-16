import React from "react";
import styles from "./BlogDiary.module.css";

const BlogDiary = () => {
  const featuredPost = {
    id: 1,
    title: "El arte de escuchar",
    date: "10 de Marzo, 2026",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicisdasdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd sa dsa d asd asdas dsa dasdg elit.dasdsahaskj hdkajs hdkjash dkjahskjdhaskjhdaskjhdkjashdkjas hkjdhaskjdhaskj dhsakjhdkajs ssadfasd asd hajsk hdjaks hdjkah kjas hkjda hdhk hd asd a as dkash djkas hdkjas dkja sdk j ashkjd haks hdkjash djkhqQuisquam, qu kjhsdkjash dkjash kdjas hkdhask dhaskj hdaskj hdjkas hdjkas hkjdas doddasdsadsadahsnjkdashkdjh askjdashkdjhas jksdhkjashkjdahskj dhasjk dhasjk hdjaks hjkdash kjdhaskjdhaskj dhaskj hdkjas hskahdakjshdksajh dkjashkjdhas kjsahdkjash kjdhsakjdhaskjhdkaj hd. A veces lo más importante en una conversación no es lo que decimos, sino cómo escuchamos. La escucha activa puede transformar nuestras relaciones y nuestra forma de entender el mundo.",
    image: "https://placehold.co/600x400",
  };

  const pastPosts = [
    {
      id: 2,
      title: "Gestión de la ansiedad",
      date: "5 de Marzo, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 3,
      title: "Autocuidado diario",
      date: "28 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 4,
      title: "Límites saludables",
      date: "20 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 5,
      title: "Entender tus emociones",
      date: "15 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 6,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 7,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 8,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 9,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 10,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 11,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
    {
      id: 12,
      title: "Comunicación asertiva",
      date: "10 de Febrero, 2026",
      image: "https://placehold.co/80x80",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Decorative Leaves inside the wrapper */}
      {(() => {
        let numberLeafs = [];
        for (let i = 0; i < 8; i++) {
          numberLeafs.push(
            <svg
              key={i}
              className={`${styles.leafBottomMiddle} ${styles[`leaf${i}`]}`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 90 Q10 40 50 10 Q90 40 50 90 Z"
                fill="rgba(60, 113, 31, 0.7)"
              />
              <path
                d="M50 85 L50 12"
                stroke="rgba(60, 113, 31, 0.7)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>,
          );
        }
        return numberLeafs;
      })()}

      {/* Left Column: Diario del Día */}
      <div className={styles.leftColumn}>
        <h2 className={styles.sectionTitle}>
          Diario del Día | Última Reflexión
        </h2>
        <div className={styles.mainCard}>
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className={styles.topImage}
          />
          <div className={styles.cardContent}>
            <span className={styles.cardDate}>{featuredPost.date}</span>
            <h3 className={styles.cardTitle}>{featuredPost.title}</h3>
            <p className={styles.cardText}>{featuredPost.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Right Column: Bitácora Completa */}
      <div className={styles.rightColumn}>
        <h2 className={styles.sectionTitle}>
          Bitácora Completa | Archivo de Ideas
        </h2>
        <div className={styles.cardContainer}>
          <div className={styles.scrollArea}>
            {pastPosts.map((post) => (
              <div key={post.id} className={styles.postItem}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.postItemImage}
                />
                <div className={styles.postItemInfo}>
                  <h4 className={styles.postItemTitle}>{post.title}</h4>
                  <span className={styles.postItemDate}>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDiary;
