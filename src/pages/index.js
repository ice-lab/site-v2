/**
 * 首页
 */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Splash from './home/Splash';
import Feature from './home/Feature';
import Ecology from './home/Ecology';
import Users from './home/Users';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Splash />
      <main>
        <Feature/>
        <Ecology />
        <Users/>
      </main>
    </Layout>
  );
}
