import React from 'react';
import styles from './ecology.module.css'
import AreaWrapper from '../../../components/AreaWrapper'

const data = [
  {
    title: '微前端 icestark',
    decs: '面向大型 Web 应用的解决方案，将巨石单体应用进行拆解，保证大型应用的可持续扩展、技术栈按需升级以及更好的跨团队协作',
    image: require.resolve('../../../../static/img/solution_01.png')
  },
  {
    title: 'ahooks',
    decs: 'React Hooks 最佳实践，结合业务沉淀大量的 Hooks API，减少业务中重复的样板代码',
    image: require.resolve('../../../../static/img/solution_02.png')
  },
  {
    title: 'Serverless 一体化',
    decs: '结合 Midway Faas 支持一体化项目开发，减少联调以及应用部署成本',
    image: require.resolve('../../../../static/img/solution_03.png')
  },
  {
    title: 'Formily',
    decs: '面向复杂表单的解决方案，支持数据驱动、复杂场景的高性能、复杂联动等能力',
    image: require.resolve('../../../../static/img/solution_04.png')
  },
]

function Ecology() {
  return (
    <AreaWrapper
      title={'领域解决方案'}
      decs={'面向不同业务领域沉淀了多种解决方案'}
      contentStyle={styles.container}
    >
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.image}></img>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <div>
              <span>{item.decs}</span>
            </div>
          </div>
        </div>
      ))}
    </AreaWrapper>
  );
}

export default Ecology;
