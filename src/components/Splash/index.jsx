import React from 'react';
import Button from '../Button';
import styles from './splash.module.css';
import splash from '../../../static/img/splash.png';

function Splash() {
  return (
    <header>
      <div className={styles.splash}>
        <div className={styles['title-container']}>
          <h1 className={styles.title}>基于 React 的研发解决方案</h1>
          <p className={styles.subtitle}>
            基于 React 的应用研发框架 icejs，支持 Vite & Webpack 模式，同时提供了微前端、Hooks、一体化等解决开发，让前端开发更加简单规范。
          </p>
          <div className={styles.githubStars}>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=alibaba&repo=ice&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
          <div className={styles.buttons}>
            <Button url={'/docs/guide/start'}>快速开始</Button>
            <div style={{ minWidth: 20, minHeight: 20 }}></div>
            <Button primary={false} url={'vscode:extension/iceworks-team.iceworks'}>
              下载 VS Code 插件
            </Button>
          </div>
        </div>
        <div className={styles['img-container']}>
          <img className={styles['splash-img']} src={splash} />
        </div>
      </div>
    </header>
  );
}

export default Splash;
