import{_ as n,o as s,c as a,e as p}from"./app-3a979dd6.js";const e={},t=p(`<h2 id="_1-媒体查询" tabindex="-1"><a class="header-anchor" href="#_1-媒体查询" aria-hidden="true">#</a> 1. 媒体查询</h2><p>CSS2 中引入了 <code>@media</code> 规则，根据不同媒体类型应用不同样式</p><h3 id="查询包括" tabindex="-1"><a class="header-anchor" href="#查询包括" aria-hidden="true">#</a> 查询包括：</h3><ul><li>视口 viewport 的宽度和高度</li><li>设备 device 的宽度和高度</li><li>方向（平板电脑/手机处于横向还是纵向模式）</li><li>分辨率</li></ul><h3 id="媒体类型包括" tabindex="-1"><a class="header-anchor" href="#媒体类型包括" aria-hidden="true">#</a> 媒体类型包括：</h3><ul><li>all: 所有媒体类型设备</li><li>print: 打印机</li><li>screen: 计算机、平板、手机等设备屏幕</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">not</span>|<span class="token keyword">only</span> mediaType <span class="token keyword">and</span> <span class="token punctuation">(</span>expressions<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  CSS-Code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="举个栗子" tabindex="-1"><a class="header-anchor" href="#举个栗子" aria-hidden="true">#</a> 举个栗子：</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// 视口宽度 &gt;= 480px时，应用skyblue色背景
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="再举多个详细的栗子" tabindex="-1"><a class="header-anchor" href="#再举多个详细的栗子" aria-hidden="true">#</a> 再举多个详细的栗子</h3><p>响应式导航菜单</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.topnav</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.topnav a</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 14px 16px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 在宽度为 600 像素或更小的屏幕上，使菜单链接彼此堆叠，而不是并排 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.topnav a</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大屏四列、中屏两列、小屏一列(float 响应布局)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.column</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.column</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.column</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大屏四列、中屏两列、小屏一列(flex 响应布局)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.row</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column</span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">.column</span><span class="token punctuation">{</span><span class="token property">flex</span><span class="token punctuation">:</span> 50%<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">.column</span><span class="token punctuation">{</span><span class="token property">flex</span><span class="token punctuation">:</span> 100%<span class="token punctuation">}</span>

  <span class="token selector">/* 或者设置flew容器row主轴方向为从上到下
  .row</span><span class="token punctuation">{</span><span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>屏幕尺寸更改字体大小</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div.example</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> lightgrey<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">div.example</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">div.example</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器的宽度在某像素区间，更改 &lt;div&gt; 元素的外观</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// 600 ~ 900px
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// 600 ~ 900px 或者大于1100px
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-css-变量" tabindex="-1"><a class="header-anchor" href="#_2-css-变量" aria-hidden="true">#</a> 2.CSS 变量</h2><p><code>var()</code>函数用于插入 css 变量值，意味可以定义局部或全局变量，使用 JS 来修改变量以及基于媒体查询来修改变量</p><h3 id="_2-1-定义复用的-color" tabindex="-1"><a class="header-anchor" href="#_2-1-定义复用的-color" aria-hidden="true">#</a> 2.1 定义复用的 color</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 1.定义
:root</span> <span class="token punctuation">{</span>
    <span class="token property">--gray</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
    <span class="token property">--white</span><span class="token punctuation">:</span> #154384<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">// 2.var()插入
body</span> <span class="token punctuation">{</span>
    <span class="token property">backgroun-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solide <span class="token function">var</span><span class="token punctuation">(</span>--gray<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-局部-css-变量" tabindex="-1"><a class="header-anchor" href="#_2-2-局部-css-变量" aria-hidden="true">#</a> 2.2 局部 css 变量</h3><p>在:root 定义的是全局 css 变量，在元素里定义的则为<code>局部</code>，只有子元素都可以访问到，且变量遵循<code>临近原则</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span><span class="token punctuation">{</span>
  <span class="token property">--gray</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--gray<span class="token punctuation">)</span><span class="token punctuation">;</span> // #666
<span class="token punctuation">}</span>
<span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token property">--gray</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--gray<span class="token punctuation">)</span><span class="token punctuation">:</span> // #777<span class="token punctuation">;</span> 临近原型
<span class="token punctuation">}</span>
<span class="token selector">.container .content</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--gray<span class="token punctuation">)</span><span class="token punctuation">;</span> // #777
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-☆js-修改-css-变量" tabindex="-1"><a class="header-anchor" href="#_2-3-☆js-修改-css-变量" aria-hidden="true">#</a> 2.3 ☆JS 修改 css 变量</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>var r = document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;:root&#39;</span><span class="token punctuation">)</span> // 获取根元素
var rs = <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> // 获取根元素计算style
rs.<span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--gray&#39;</span><span class="token punctuation">)</span> // #666 访问style属性
rs.<span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--gray&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#777&#39;</span><span class="token punctuation">)</span> // 设置style属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-在媒体查询中使用-css-变量" tabindex="-1"><a class="header-anchor" href="#_2-4-在媒体查询中使用-css-变量" aria-hidden="true">#</a> 2.4 在媒体查询中使用 css 变量</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--blue</span><span class="token punctuation">:</span> #1e90ff<span class="token punctuation">;</span>
    <span class="token property">--white</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">--fontsize</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid <span class="token function">var</span><span class="token punctuation">(</span>--blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fontsize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 450px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">--fontsize</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> //屏幕大于450px时，字体大小为50px
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","@media cssbianliang.html.vue"]]);export{d as default};
