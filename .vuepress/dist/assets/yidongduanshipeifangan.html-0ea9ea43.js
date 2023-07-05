import{_ as n,o as s,c as a,e}from"./app-3a979dd6.js";const t={},p=e(`<h2 id="_1-使用-rem" tabindex="-1"><a class="header-anchor" href="#_1-使用-rem" aria-hidden="true">#</a> 1.使用 rem</h2><p><strong>思想：用 rem 代替 px</strong></p><p>引入以下代码，根据不同的<code>屏幕宽度</code>动态设置根标签的<code>fontSize</code>的值，UI 以频宽为<code>750px</code>为标准进行设计即可适配不同的机型。注意的是全局的<code>px</code>要用<code>rem</code>替代，这时<code>1rem = 1px</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span>
        resizeEvt <span class="token operator">=</span>
            <span class="token string">&#39;orientationchange&#39;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> clientWidth <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            <span class="token comment">// 核心：以750px为频宽即iphone SE频宽的两倍</span>
            docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span>
                clientWidth <span class="token operator">&gt;=</span> <span class="token number">750</span> <span class="token operator">?</span> <span class="token string">&#39;100px&#39;</span> <span class="token operator">:</span> clientWidth <span class="token operator">/</span> <span class="token number">750</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>resizeEvt<span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移动设备旋转或PC端页面视口改变事件</span>
    doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// DOM Tree加载完毕</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为都是以 750px 为频宽进行 ui 界面设计，所以 750rem 即为频宽，故以下为验证此方案可适配不同频宽：</p><ul><li>频宽为<code>375px</code>时：1rem = 0.5px，750rem = 375px</li><li>频宽为<code>450px</code>时：1rem = 0.6px，750rem = 450px</li></ul><h2 id="_2-使用-postcss-px-to-viewport-插件" tabindex="-1"><a class="header-anchor" href="#_2-使用-postcss-px-to-viewport-插件" aria-hidden="true">#</a> 2.使用 postcss-px-to-viewport 插件</h2><p><strong>思想：用 viewport 代替 px</strong></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i postcss-px-to-viewport --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">import</span> PostcssPxToViewport <span class="token keyword">from</span> <span class="token string">&#39;postcss-px-to-viewport&#39;</span><span class="token punctuation">;</span>

config<span class="token punctuation">.</span>postcss<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token function">PostcssPxToViewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">unitToConvert</span><span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要转化的单位</span>
        <span class="token literal-property property">viewportUnit</span><span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 转化成的viewport单位，默认vw</span>
        <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span> <span class="token comment">// 视口宽度（以UI设计稿宽度为准）</span>
        <span class="token literal-property property">unitPrecision</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 转化精度，精确到小数点后几位</span>
        <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 小于或等于1时不作转化，默认1</span>
        <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;postcss-ignore&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 不转化为viewport单位的类名</span>
        <span class="token literal-property property">mediaQuery</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 媒体查询后是否也作转化，默认false</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 排除的目录或文件</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：此方案仅对内联和外联 css 生效，对于行内 css 和 js 动态改变的 css 不会生效</p><h3 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h3><p><code>meta</code>标签的<code>name</code>属性指定为<code>viewport</code>时，可以通过<code>content</code>属性进行设备页面视口信息的配置</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--</span> <span class="token attr-name">视口宽度为设备宽度，初始缩放值为1.0，最大缩放值1.0，不允许用户进行缩放</span> <span class="token attr-name">!--</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>width</code>：页面视口宽度</li><li><code>height</code>：页面视口高度</li><li><code>user-scalable</code>：是否允许用户进行缩放,值为 0 或 1</li><li><code>initial-scale</code>：页面初始缩放值</li><li><code>minimum-scale</code>：最小缩放值</li><li><code>maximum-scale</code>：最大缩放值</li></ul>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","yidongduanshipeifangan.html.vue"]]);export{u as default};