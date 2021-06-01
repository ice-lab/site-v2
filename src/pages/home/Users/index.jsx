import React from 'react';
import styles from './users.module.css'
import AreaWrapper from '../../../components/AreaWrapper'

const data = [
  {
    name: '淘宝',
    image: '/logo/taobao.png'
  },
  {
    name: '天猫',
    image: '/logo/tianmao.png'
  },
  {
    name: '支付宝',
    image: '/logo/zhifu.png'
  },
  {
    name: '牵牛',
    image: '/logo/qianniu.png'
  },
  {
    name: '头条',
    image: '/logo/toutiao.png'
  },
  {
    name: '1688',
    image: '/logo/1688.png'
  },
  {
    name: '闲鱼',
    image: '/logo/xianyu.png'
  },
  {
    name: '门店',
    image: '/logo/mendian.png'
  },
  {
    name: '钉钉',
    image: '/logo/dingding.png'
  },
  {
    name: 'Laz',
    image: '/logo/laz.png'
  },
  {
    name: '优酷',
    image: '/logo/youku.png'
  },
  {
    name: 'UC',
    image: '/logo/uc.png'
  },
  {
    name: '阿里云',
    image: '/logo/cloud.png'
  },
  {
    name: '阿里',
    image: '/logo/ali.png'
  },
  {
    name: '饿了么',
    image: '/logo/ele.png'
  },
]

function Users() {
  return (
    <AreaWrapper
      title={'谁在使用'}
      decs={'我们在人工智能的领域也在持续探索，不断降低开发门槛与成本'}
      contentStyle={styles.container}
      isBlock
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
