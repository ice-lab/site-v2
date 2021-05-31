import React from 'react';
import styles from './users.module.css'
import AreaWrapper from '../../../components/AreaWrapper'

const data = [
  {
    name: '淘宝',
    image: require.resolve('../../../../static/logo/taobao.png')
  },
  {
    name: '天猫',
    image: require.resolve('../../../../static/logo/tianmao.png')
  },
  {
    name: '支付宝',
    image: require.resolve('../../../../static/logo/zhifu.png')
  },
  {
    name: '牵牛',
    image: require.resolve('../../../../static/logo/qianniu.png')
  },
  {
    name: '头条',
    image: require.resolve('../../../../static/logo/toutiao.png')
  },
  {
    name: '1688',
    image: require.resolve('../../../../static/logo/1688.png')
  },
  {
    name: '闲鱼',
    image: require.resolve('../../../../static/logo/xianyu.png')
  },
  {
    name: '门店',
    image: require.resolve('../../../../static/logo/mendian.png')
  },
  {
    name: '钉钉',
    image: require.resolve('../../../../static/logo/dingding.png')
  },
  {
    name: 'Laz',
    image: require.resolve('../../../../static/logo/laz.png')
  },
  {
    name: '优酷',
    image: require.resolve('../../../../static/logo/youku.png')
  },
  {
    name: 'UC',
    image: require.resolve('../../../../static/logo/uc.png')
  },
  {
    name: '阿里云',
    image: require.resolve('../../../../static/logo/cloud.png')
  },
  {
    name: '阿里',
    image: require.resolve('../../../../static/logo/ali.png')
  },
  {
    name: '饿了么',
    image: require.resolve('../../../../static/logo/ele.png')
  },
]

function Users() {
  return (
    <AreaWrapper
      title={'谁在使用'}
      decs={'我们在人工智能的领域也在持续探索，不断降低开发门槛与成本'}
      contentStyle={styles.container}
    >
      {data.map((item, index) => (
        <div key={index} className={styles.logo}>
          <img src={item.image}></img>
          <span>{item.name}</span>
        </div>
      ))}
    </AreaWrapper>
  );
}

export default Users;
