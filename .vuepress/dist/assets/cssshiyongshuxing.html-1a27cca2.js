import{_ as n,o as s,c as a,e as i}from"./app-3a979dd6.js";const e={},t=i(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.div</span><span class="token punctuation">{</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> // 禁止点击，DOM不会触发点击事件
  <span class="token property">animation</span><span class="token punctuation">:</span> ani 3s <span class="token function">steps</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span> //  <span class="token function">steps</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>控制动画帧到帧之间的步进，动画更平滑
  <span class="token property">content-visibility</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> // 非可视区的子元素不渲染（用于优化长列表渲染）
  <span class="token property">contain-intrinsic-size</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> // 指定当前元素的预宽高，解决设置content-visibility之后滚动抽搐的问题
<span class="token punctuation">}</span>
<span class="token selector">// 后续持续更新

// 精灵图转gif
.box</span><span class="token punctuation">{</span>
  width 200px
  height 150px
  background <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>xxx.png<span class="token punctuation">)</span></span> no-repeat
  background-size 3000% 100% // 假设精灵图由30张图片构成
  animation ani 3s <span class="token function">steps</span><span class="token punctuation">(</span>29<span class="token punctuation">)</span> infinite // 29 = 30 - 1
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> ani</span><span class="token punctuation">{</span>
  0%
    background-position 0 0
  100%
    background-position 100% 0
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function p(o,l){return s(),a("div",null,c)}const d=n(e,[["render",p],["__file","cssshiyongshuxing.html.vue"]]);export{d as default};
