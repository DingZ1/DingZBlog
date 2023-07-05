import{_ as n,o as s,c as a,e as p}from"./app-3a979dd6.js";const t={},e=p(`<p><strong>“ Talk is cheap, show me the code”</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ast语法树</span>
<span class="token keyword">let</span> ast <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;商品Banner&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;bannerItem&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;101&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;图片1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;img&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;bannerCover&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com/imgs/1.png&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;bannerItem&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;102&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;图片2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;img&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;bannerCover&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com/imgs/1.png&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> ast</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> attr<span class="token punctuation">,</span> text<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> ast<span class="token punctuation">;</span>
    <span class="token keyword">let</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> attr<span class="token punctuation">)</span> ele<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> attr<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ele<span class="token punctuation">.</span>innerText <span class="token operator">=</span> text<span class="token punctuation">;</span>
    children <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">render</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">render</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> ast<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","Renderhanshujiandanshixian.html.vue"]]);export{u as default};
