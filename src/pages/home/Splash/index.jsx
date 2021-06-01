import React from 'react';
import Button from '../../../components/Button';
import styles from './splash.module.css';
import splash from '../../../../static/img/splash.png'

function Splash() {
  return (
    <header>
      <div className={styles.splash}>
        <div className={styles['title-container']}>
          <h1 className={styles.title}>简单而友好的研发体系</h1>
          <p className={styles.subtitle}>轻量，高效，易上手的前端解决方案，一次开发，多端运行，更加节省您的使用效率。</p>
          <div style={{ minHeight: 40 }}></div>
          <div className={styles.buttons}>
            <Button url={'/docs/guide/about'}>快速开始</Button>
            <div style={{ minWidth: 20, minHeight: 20 }}></div>
            <Button primary={false} url={'vscode:extension/iceworks-team.iceworks'}>下载 VS Code 插件</Button>
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
