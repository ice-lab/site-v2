const path = require('path');
const fse = require('fs-extra');
const axios = require('axios');

const baseDir = path.join(__dirname, '../docs/');

const materials = [{
  docDir: path.join(baseDir, 'fusion'),
  url: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/assets/materials/react-materials.json',
}, {
  docDir: path.join(baseDir, 'antd'),
  url: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/assets/materials/antd-materials.json',
}];

(async () => {
  for (const material of materials) {
    // try {
    await fetchAndWrite(material);
    // } catch (err) {
    //   console.error('fetchAndWrite failed', material.url);
    //   console.error(err);
    // }
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});

async function fetchAndWrite(material) {
  const { docDir, url } = material;
  const { data } = await axios.get(url);
  const { scaffolds = [], blocks = [], } = data;

  // scaffolds
  const scaffoldsDir = path.join(docDir, 'scaffolds');
  fse.removeSync(scaffoldsDir);
  fse.mkdirSync(scaffoldsDir);
  for (const [index, item] of scaffolds.entries()) {
    await generateScaffold(item, index, scaffoldsDir);
  }

  // biz components

  // blocks
  // const blocksDir = path.join(docDir, 'blocks');
  // fse.removeSync(blocksDir);
  // fse.mkdirSync(blocksDir);
  // for (const [index, item] of blocks.entries()) {
  //   await generateBlock(item, index, blocksDir);
  // }

}

async function generateScaffold(scaffoldData, index, docsDir) {
  const { name, description, source, repository } = scaffoldData;
  const filename = source.npm.replace(/@\w+\//, '') + '.md';
  const filepath = path.join(docsDir, filename);
  const homepage = `https://unpkg.com/${source.npm}/build/index.html`;
  const content = `---
title: ${name}
order: ${index}
desc: 执行 npm run generate-materials-docs 自动生成，请勿手动修改该文件
---

${description}

使用命令行初始化：

\`\`\`bash
$ npm init ice ice-app ${source.npm}
\`\`\`

查看代码：

[GitHub](${repository})

效果预览：

[新标签页打开](${homepage})

<Iframe src="${homepage}" />
  `;

  fse.writeFileSync(filepath, content, 'utf-8');
}

async function generateBlock(blockData, index, docsDir) {
  const { name, description, source, repository } = blockData;
  const filename = source.npm.replace(/@[\w\-]+\//, '') + '.md';
  const filepath = path.join(docsDir, filename);
  const homepage = `https://unpkg.com/${source.npm}/build/index.html`;
  const content = `---
title: ${name}
order: ${index}
desc: 执行 npm run generate-materials-docs 自动生成，请勿手动修改该文件
---

${description}

查看代码：

[GitHub](${repository})

效果预览：

[新标签页打开](${homepage})

<Iframe src="${homepage}" />
  `;

  fse.writeFileSync(filepath, content, 'utf-8');
}