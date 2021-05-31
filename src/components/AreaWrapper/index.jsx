import React from 'react';
import styles from './area.module.css'

function AreaWrapper({ title, decs, contentStyle, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{decs}</p>
      </div>
      <div className={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default AreaWrapper;
