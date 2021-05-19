(self.webpackChunksite=self.webpackChunksite||[]).push([[2249],{4456:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-60b7ff24",path:"/guide/basic/start.html",title:"快速开始",lang:"zh-CN",frontmatter:{title:"快速开始",description:"Description of this page"},excerpt:"",headers:[{level:2,title:"使用 DEF 创建",slug:"使用-def-创建",children:[]},{level:2,title:"CLI 初始化项目",slug:"cli-初始化项目",children:[{level:3,title:"选择模板",slug:"选择模板",children:[]},{level:3,title:"启动项目",slug:"启动项目",children:[]}]},{level:2,title:"GUI 初始化项目",slug:"gui-初始化项目",children:[{level:3,title:"安装 Iceworks",slug:"安装-iceworks",children:[]},{level:3,title:"初始化项目",slug:"初始化项目",children:[]},{level:3,title:"启动项目",slug:"启动项目-1",children:[]}]}],filePathRelative:"guide/basic/start.md",git:{updatedTime:1621417054e3,contributors:[]}}},5342:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>f});var e=a(6252);const l=(0,e.Wm)("hr",null,null,-1),p=(0,e.Wm)("p",null,"title: 使用 CLI 创建应用 order: 3",-1),t=(0,e.Wm)("hr",null,null,-1),c=(0,e.Wm)("h2",{id:"使用-def-创建"},[(0,e.Wm)("a",{class:"header-anchor",href:"#使用-def-创建"},"#"),(0,e.Uk)(" 使用 DEF 创建")],-1),r=(0,e.Uk)("如果是阿里内部开发者，请参考"),i={href:"https://yuque.alibaba-inc.com/ice/rdy99p/gsfp6h",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("文档"),m=(0,e.Uk)("，可直接打通内部发布流程。"),u=(0,e.uE)('<h2 id="cli-初始化项目"><a class="header-anchor" href="#cli-初始化项目">#</a> CLI 初始化项目</h2><p>可以选择使用 npm 或者 yarn 工具进行项目初始化，如下输入项目名即可：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> init ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n<span class="token comment"># or</span>\n$ <span class="token function">yarn</span> create ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>同时支持以下几种方式初始项目，以 npm 为例</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 当前目录初始项目</span>\n$ <span class="token function">mkdir</span> ice-example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ice-example/\n$ <span class="token function">npm</span> init ice <span class="token comment"># 根据提示选择模板</span>\n$ <span class="token function">npm</span> init ice --template <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span> <span class="token comment"># 指定模板</span>\n$ <span class="token function">npm</span> init ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span> --template @alifd/fusion-design-pro-js <span class="token comment"># 基于 fusion 组件的模板</span>\n$ <span class="token function">npm</span> init ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span> --template @icedesign/ice-antd-scaffold <span class="token comment"># 基于 antd 组件的模板</span>\n\n<span class="token comment"># 指定目录初始项目</span>\n$ <span class="token function">npm</span> init ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span> <span class="token comment"># 根据提示选择模板</span>\n$ <span class="token function">npm</span> init ice <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span> --template <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span> <span class="token comment"># 指定模板</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>可从 <a href="/scaffold">官方模板</a> 选择模板 <code>&lt;template&gt;</code></p></blockquote><h3 id="选择模板"><a class="header-anchor" href="#选择模板">#</a> 选择模板</h3><p>可以根据实际情况选择 TypeScript 和 JavaScript 模板，其中各包含一个轻量的 Lite 和功能完善的 Pro 模板：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>? Please <span class="token keyword">select</span> a template <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n❯ A lightweight TypeScript template.\n  A lightweight JavaScript template.\n  Pro TypeScript template，Integrated rich features such as charts, lists, forms, etc.\n  Pro JavaScript template，Integrated rich features such as charts, lists, forms, etc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>选择模板会自动创建项目，看到如下信息说明项目创建成功：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>✔ download <span class="token function">npm</span> tarball successfully.\ninfo clean package.json<span class="token punctuation">..</span>.\nInitialize project successfully.\nStarts the development server.\n\n    <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n    <span class="token function">npm</span> <span class="token function">install</span>\n    <span class="token function">npm</span> start\n\n✨  Done\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="启动项目"><a class="header-anchor" href="#启动项目">#</a> 启动项目</h3><p>按照上面的提示，进入新建的项目安装依赖即可：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n<span class="token comment"># 安装依赖</span>\n$ <span class="token function">npm</span> <span class="token function">install</span>\n<span class="token comment"># 启动项目</span>\n$ <span class="token function">npm</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',14),b=(0,e.Uk)("执行上述命令后，会自动打开浏览器窗口访问 "),d={href:"http://localhost:3333%EF%BC%8C",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("http://localhost:3333"),k=(0,e.Uk)("，这时应该看到默认的页面。"),g=(0,e.uE)('<h2 id="gui-初始化项目"><a class="header-anchor" href="#gui-初始化项目">#</a> GUI 初始化项目</h2><p>Iceworks 是一款可视化智能研发助手，帮助开发者快速使用可视化和智能化的能力进行应用开发。</p><h3 id="安装-iceworks"><a class="header-anchor" href="#安装-iceworks">#</a> 安装 Iceworks</h3><p><img src="https://img.alicdn.com/tfs/TB1FWaiKKT2gK0jSZFvXXXnFXXa-960-600.gif" alt="安装"></p><ul><li>点击 VS Code 活动栏上的「插件市场图标」</li><li>在侧边栏的搜索框上输入「Iceworks」</li><li>点击侧边栏上出现的搜索结果中的「Iceworks 插件栏」</li><li>在主窗口出现的页面上点击「安装」按钮</li></ul><h3 id="初始化项目"><a class="header-anchor" href="#初始化项目">#</a> 初始化项目</h3><p><img src="https://img.alicdn.com/tfs/TB1tyMVLFP7gK0jSZFjXXc5aXXa-960-600.gif" alt="创建"></p><ul><li>点击 VS Code 活动栏上的「Iceworks 图标」</li><li>点击侧边栏上的「创建新应用」按钮</li><li>在主窗口出现的页面上根据引导创建项目</li></ul><h3 id="启动项目-1"><a class="header-anchor" href="#启动项目-1">#</a> 启动项目</h3><p><img src="https://img.alicdn.com/tfs/TB1jDa9L7T2gK0jSZFkXXcIQFXa-960-600.gif" alt="启动"></p><ul><li>点击 VS Code 活动栏上的「Iceworks 图标」</li><li>鼠标移动到 「NPM 脚本」下的「start 项」</li><li>点击 start 项右边的「启动图标」</li></ul>',11),f={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,p,t,c,(0,e.Wm)("p",null,[r,(0,e.Wm)("a",i,[o,(0,e.Wm)(a)]),m]),u,(0,e.Wm)("p",null,[b,(0,e.Wm)("a",d,[h,(0,e.Wm)(a)]),k]),g],64)}}}}]);