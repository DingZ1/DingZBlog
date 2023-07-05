import{_ as e,r as p,o,c,a as n,b as a,d as t,e as l}from"./app-3a979dd6.js";const i={},u=l(`<p><strong>Talk is cheap, show me the code</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> class2Type <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> types <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Object&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Function&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Array&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Date&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;RegExp&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> type <span class="token keyword">of</span> types<span class="token punctuation">)</span> class2Type<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// undefine、null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> class2Type<span class="token punctuation">[</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,3),r={href:"https://github.com/mqyqingfeng/Blog/issues/28",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/mqyqingfeng/Blog/issues/30",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[a("1.JS 类型判断上"),t(s)])]),n("p",null,[n("a",k,[a("2.JS 类型判断下"),t(s)])])])}const g=e(i,[["render",d],["__file","JSleixingpanduan.html.vue"]]);export{g as default};
