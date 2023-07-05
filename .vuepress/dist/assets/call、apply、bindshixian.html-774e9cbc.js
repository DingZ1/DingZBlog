import{_ as n,o as s,c as a,e as t}from"./app-3a979dd6.js";const e={},p=t(`<h2 id="_1-call" tabindex="-1"><a class="header-anchor" href="#_1-call" aria-hidden="true">#</a> 1. call</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将函数设为对象的属性 -&gt; 执行该函数 -&gt; 删除该函数 --&gt; 返回函数执行返回值</span>
obj<span class="token punctuation">.</span>f <span class="token operator">=</span> fn
<span class="token keyword">let</span> ret <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
delele obj<span class="token punctuation">.</span>f
<span class="token keyword">return</span> ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span> <span class="token comment">// 默认为window</span>
    context<span class="token punctuation">.</span>f <span class="token operator">=</span> fn<span class="token punctuation">;</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>f<span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-apply" tabindex="-1"><a class="header-anchor" href="#_2-apply" aria-hidden="true">#</a> 2. apply</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>和call差不多，只是第三个参数是数组时忽略其后的参数，遍历传入即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>
    context<span class="token punctuation">.</span>f <span class="token operator">=</span> fn<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> args <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 多出这一行</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>f<span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-bind-实现" tabindex="-1"><a class="header-anchor" href="#_3-bind-实现" aria-hidden="true">#</a> 3. bind 实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过闭包的方式，存储context和args，返回的函数命名为fBind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">fBind</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fBind</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","call、apply、bindshixian.html.vue"]]);export{r as default};
