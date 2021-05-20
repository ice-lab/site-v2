(self.webpackChunksite=self.webpackChunksite||[]).push([[4705],{1402:(s,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>a});const a={key:"v-5d054949",path:"/material/reference/private.html",title:"私有化物料",lang:"zh-CN",frontmatter:{title:"私有化物料",order:1},excerpt:"",headers:[{level:2,title:"依赖字段",slug:"依赖字段",children:[]},{level:2,title:"配置字段",slug:"配置字段",children:[{level:3,title:"全局配置",slug:"全局配置",children:[]},{level:3,title:"项目级配置",slug:"项目级配置",children:[]}]},{level:2,title:"物料数据托管",slug:"物料数据托管",children:[]}],filePathRelative:"material/reference/private.md",git:{updatedTime:1621514473e3,contributors:[]}}},4997:(s,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});const a=(0,e(6252).uE)('<p>很多公司会搭建私有的 npm，因此如果需要建设私有化的物料，可以参考这篇文档。</p><h2 id="依赖字段"><a class="header-anchor" href="#依赖字段">#</a> 依赖字段</h2><p>针对私有化物料，在物料开发过程中核心会依赖两个字段：npm 源以及 unpkg 服务。</p><p>依赖 npm 源的场景：</p><ul><li><code>iceworks generate</code>：需要访问 npm registry 查询每个物料对应的版本是否发布，同时生成对应 <code>source.registry</code> 字段</li><li><code>iceworks add</code>：下载模板或者区块需要访问 npm registry</li><li><code>iceworks init</code>：下载模板需要访问 npm registry</li></ul><p>依赖 unpkg 服务的场景：</p><ul><li><code>iceworks generate</code>：每个物料的 screenshot 和 homepage 默认通过 unpkg 托管，对应地址： <ul><li>截图：<code>https://unpkg.com/@icedesign/user-landing-block/screenshot.png</code></li><li>预览：<code>https://unpkg.com/@icedesign/user-landing-block@3.0.0/build/index.html</code></li></ul></li></ul><p>因此我们推荐在部署私有 npm 的基础上，能部署对应的私有 unpkg 服务，否则会导致物料的截图和预览功能不可用。</p><h2 id="配置字段"><a class="header-anchor" href="#配置字段">#</a> 配置字段</h2><h3 id="全局配置"><a class="header-anchor" href="#全局配置">#</a> 全局配置</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iceworks config <span class="token builtin class-name">set</span> registry https://registry.xxx.com\n$ iceworks config <span class="token builtin class-name">set</span> unpkgHost https://unpkg.xxx.com\n<span class="token comment"># 确认是否生效</span>\n$ iceworks config list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如此配置之后，在当前电脑执行 iceworks 相关命令都会使用该配置。</p><h3 id="项目级配置"><a class="header-anchor" href="#项目级配置">#</a> 项目级配置</h3><p>开发物料集合的场景，也可以在项目级配置该字段，只需要配置根目录 package.json 的 materialConfig 字段即可：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;materialConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;registry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.xxx.com&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;unpkgHost&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.xxx.com&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如此配置之后，在当前物料源项目执行 iceworks 相关命令会使用该字段。</p><h2 id="物料数据托管"><a class="header-anchor" href="#物料数据托管">#</a> 物料数据托管</h2><p>对于私有的物料数据托管，前文提到的 fusion 物料中心是无法支持的，因此需要自己托管，最简单的方式就是将生成的 <code>build/materials.json</code> 发布到私有 npm，然后通过私有的 unpkg 服务拿到对应 url 即可。</p>',18),t={render:function(s,n){return a}}}}]);