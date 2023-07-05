import{_ as a,r as e,o as t,c as p,a as n,b as o,d as c,e as i}from"./app-3a979dd6.js";const l={},u=i(`<h2 id="_0-模块化" tabindex="-1"><a class="header-anchor" href="#_0-模块化" aria-hidden="true">#</a> 0. 模块化</h2><p>模块化规范有<code>AMD</code>、<code>CMD</code>、<code>CommonJS</code>、<code>ESModule</code>，前面两者逐渐被抛弃了，现在主流的服务器端 node 使用<code>CommonJS</code>，客户端使用<code>ESModule</code>。且<code>ESModule</code>是 ES6 提出的新模块化规范，是<code>编译时加载</code>，性能较好，其他的都是<code>运行时加载</code></p><h2 id="_1-amd" tabindex="-1"><a class="header-anchor" href="#_1-amd" aria-hidden="true">#</a> 1. AMD</h2><p>AMD 即 Async Module Define,异步模块定义，采用的是异步加载模块的方式，它的具体实现是<code>require.js</code>这个库</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// api.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> apiDelete <span class="token operator">=</span> <span class="token string">&#39;https://github.com/delete&#39;</span>
  <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> apiDelete<span class="token punctuation">,</span>fn <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">let</span> fn<span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./api.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">module</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>apiDelete<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fn <span class="token operator">=</span> module<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
    <span class="token attr-name">data-main</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./main<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./require.js<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--
  这里会加载require.js文件,并传入data-main=&#39;./main&#39;指明main.js为入口解析，
  这时会require异步加载api.js文件，拿到define里的函数返回的模块，然后传递给require回调函数
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-cmd" tabindex="-1"><a class="header-anchor" href="#_2-cmd" aria-hidden="true">#</a> 2. CMD</h2><p>CMD 即 Common Module Define，<code>sea.js</code>是实现 CMD 规范的一个库</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// api.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-commonjs" tabindex="-1"><a class="header-anchor" href="#_3-commonjs" aria-hidden="true">#</a> 3. CommonJS</h2><p>CommonJS 主要用于 nodejs 服务器端，原生实现，无需引入其他库，是同步加载，而非异步，若要用于浏览器端需要先编译才行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// api.js</span>
<span class="token keyword">let</span> apiGet <span class="token operator">=</span> <span class="token string">&#39;https://github.com/get&#39;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> apiGet<span class="token punctuation">,</span>fn <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;api.js导出完毕!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 在被引入时，会默认执行api.js文件，故也会打印这行字</span>

<span class="token comment">// 扩展: exports === module.export，但是 exports={...}时会改变指针，导出无效，正确方式为 exports.a = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> apiGet<span class="token punctuation">,</span> fn <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./api.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-esmodule" tabindex="-1"><a class="header-anchor" href="#_4-esmodule" aria-hidden="true">#</a> 4. ESModule</h2><p>是 ES6 推荐的新模块化规范，但是无论浏览器还是 nodejs 都还没有原生支持该规范，需要 babel 转译,是编译时加载， 导出</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span><span class="token punctuation">{</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c <span class="token punctuation">}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;xxx&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> a <span class="token keyword">as</span> myA<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;xxx&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">&#39;...&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj <span class="token keyword">from</span> <span class="token string">&#39;xxx&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">import</span> fn<span class="token punctuation">,</span><span class="token punctuation">{</span>a<span class="token punctuation">,</span>b<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;xxx&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> fn<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,18),r={href:"https://segmentfault.com/a/1190000023711059",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[o("1.【深度全面】前端 JavaScript 模块化规范进化论"),c(s)])])])}const b=a(l,[["render",d],["__file","JSmokuaihua.html.vue"]]);export{b as default};
