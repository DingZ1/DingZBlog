import{_ as t,r as e,o as p,c as o,a as n,b as c,d as i,e as s}from"./app-3a979dd6.js";const l={},u=s(`<h2 id="_1-用法" tabindex="-1"><a class="header-anchor" href="#_1-用法" aria-hidden="true">#</a> 1. 用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token operator">:</span> val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),r={href:"https://v2.cn.vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"},d=s(`<blockquote><p>向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如  <code>this.myObject.newProperty = &#39;hi&#39;</code>)</p></blockquote><p>这里有两个关键点：</p><ol><li>添加一个<code>新key</code>，即之前对象里边没有这个 key</li><li>让这个 key 也是<code>响应式</code>，这样才能在这个 key 值更新时视图也跟着更新</li></ol><p>用法示例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>name: {{ obj.name }} id: {{ obj.id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NO x ONE&#39;</span><span class="token punctuation">,</span>
				<span class="token comment">// 开始并没有id</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 这里虽然是给data里的obj添加了新key，但是并非响应式，视图不会跟着更新</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 新key作响应式处理，视图更新</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现" aria-hidden="true">#</a> 2. 实现</h2><p><strong>Talk is cheap, show me the code</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 对于array需调用splice方法特殊处理</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
		<span class="token keyword">return</span> val
	<span class="token punctuation">}</span>

	<span class="token comment">// 若target本身就有这个key，说明之前已对该key调用defineReactive作响应式处理</span>
	<span class="token comment">// 或者target非响应式数据时，执行普通的赋值操作即可</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target <span class="token operator">||</span> <span class="token operator">!</span>target<span class="token punctuation">.</span>__ob__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
		<span class="token keyword">return</span> val
	<span class="token punctuation">}</span>

	<span class="token comment">// key为后来新添加的且target是响应式数据，这时候需要对新key作响应式处理</span>
	<span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token keyword">return</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(v,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[c("引用官方说法"),i(a)])]),d])}const y=t(l,[["render",k],["__file","Vue.setyongfaheshixian.html.vue"]]);export{y as default};