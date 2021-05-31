import React from 'react';
import styles from './feature.module.css'
import AreaWrapper from '../../../components/AreaWrapper'

const data = [
  {
    title: '规范',
    decs: '从目录组织规范到代码风格，集成了结合阿里大量项目实践的研发规范',
    url: ''
  },
  {
    title: '开箱即用',
    decs: '开箱即用的工程能力，无需关心 webpack 配置',
    url: ''
  },
  {
    title: '最佳实践',
    decs: '内置数据请求、状态管理、SSR、前端配置、日志输出等最佳实践',
    url: ''
  },
  {
    title: '应用模式',
    decs: '支持 SPA、MPA、微前端、Serverless 一体化等不同研发模式',
    url: ''
  },
  {
    title: 'TypeScript',
    decs: '内置 TypeScript 支持，框架内置 API 具备良好的类型提示能力',
    url: ''
  },
  {
    title: '插件化',
    decs: '通过插件将框架能力进行解耦，同时开发者也可以基于插件扩展框架能力',
    url: ''
  }
]

function Feature() {
  return (
    <AreaWrapper
      title={'渐进式 React 研发框架 icejs'}
      decs={'开箱即用的研发框架，内置工程配置、状态管理、数据请求、权限管理等最佳实践，让开发者可以更加专注于业务逻辑'}
      contentStyle={styles.container}
    >
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <span>{item.decs}</span>
            <div style={{ flex: 1 }}></div>
            <p>{'Documentation >'}</p>
          </div>
        </div>
      ))}
    </AreaWrapper>
  );
}

export default Feature;