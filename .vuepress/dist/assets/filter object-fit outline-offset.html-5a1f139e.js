import{_ as n,o as s,c as a,e}from"./app-3a979dd6.js";const t={},i=e(`<h2 id="_1-filter" tabindex="-1"><a class="header-anchor" href="#_1-filter" aria-hidden="true">#</a> 1. filter</h2><p>设置图片的<code>视觉效果</code>（模糊度、饱和度等）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span> //模糊度
<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span> //灰度
<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-object-fit" tabindex="-1"><a class="header-anchor" href="#_2-object-fit" aria-hidden="true">#</a> 2.object-fit</h2><p>用于调整 <code>&lt;img&gt;</code> 或 <code>&lt;video&gt;</code> 里资源的宽高以适应其容器</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">object-fit</span><span class="token punctuation">:</span> fill<span class="token punctuation">;</span> // 默认值，填充元素的内容框
<span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span> // 缩放以保持纵横比，将其“放入”元素的内容框（以图片为基准）
<span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span> // 调整内容大小，以在“填充”元素的整个内容框时保持其长宽比（以框为基准）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outline-offset" tabindex="-1"><a class="header-anchor" href="#outline-offset" aria-hidden="true">#</a> outline-offset</h2><p>在 outline 与 boder 之间添加空间</p><p>注意：轮廓 outline 与边框 border 不同！轮廓线是在元素边框之外绘制的，可以与其他内容重叠。同时，轮廓也不是元素尺寸的一部分：即<code>盒模型的总宽高不受轮廓线宽度的影响</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> 4px solid red<span class="token punctuation">;</span>
    <span class="token property">outline-offset</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span> // boder与outline空隙为15px
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[i];function p(o,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","filter object-fit outline-offset.html.vue"]]);export{d as default};
