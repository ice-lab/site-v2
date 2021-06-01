import React from 'react';
import Button from '../../../components/Button';
import styles from './splash.module.css';
import splash from '../../../../static/img/splash.png';
import { style } from '../../../../config/footer';

function Splash() {
  return (
    <header>
      <div className={styles.splash}>
        <div className={styles['title-container']}>
          <h1 className={styles.title}>基于 React 的渐进式研发框架</h1>
          <p className={styles.subtitle}>
            开箱即用的工程能力和最佳实践，面向领域的微前端、Hooks、表单等解决开发，让前端开发更加简单规范。
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
