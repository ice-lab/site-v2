import React from 'react';
import styles from './support.module.css';

function Support({ list }) {
  const availablePlatforms = ['webpack', 'vite'];
  return (
    <div className={styles.container}>
      <span className={styles.label}>支持构建模式：</span>
      {list.map((supportPlatform) => {
        if (availablePlatforms.includes(supportPlatform)) {
          return (
            <img
              title={supportPlatform}
              className={styles[supportPlatform]}
              key={supportPlatform}
              src={`/img/svg/${supportPlatform}.svg`}
            />
          );
        }
      })}
    </div>
  );
}

export default Support;
