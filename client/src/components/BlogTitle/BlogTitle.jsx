import React from 'react';
import styles from './BlogTitle.module.css';

const BlogTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        Blog
      </h1>
      <p className={styles.subtitle}>
        Un espacio para reflexionar, aprender y crecer
      </p>
    </div>
  );
};

export default BlogTitle;
