---
title: 6. Flex布局
author: 定子
date: '2022-07-28'
categories:
    - css
tags:
    - css
---

# 1.Flex 布局

**flex 容器属性**

-   `flex-direction`： 主轴方向（默认 row 水平）
-   flex-wrap： 子项是否可换行
-   flex-flow：flex-direction 与 flex-wrap 的合写
-   `justify-content`： 主轴对齐方式
-   `align-items`： 侧轴（默认 column 垂直）对齐方式
-   align-content： 弹性线对齐方式（当子项目足够多，一个主轴放不下，由于 wrap 产生了多条主轴，弹性线即为每个主轴）

例子：在 flexbox 容器中，开启 flex 布局

```html
<div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

```css
.flex-container {
    display: flex;
}

.flex-container div {
    margin: 10px;
}
// 这时候效果类似'float: left'
```

## 1.1 flex-direction

主轴方向，可选值:

-   row：从左到右（默认）
-   column：从上到下
-   column-reverse：从下到上
-   row-reverse：从右到左

## 1.2 flex-wrap

换行方式，可选值：

-   wrap 默认
-   nowrap
-   wrap-reverse： 反方向换行

## 1.3 flex-flow

`flex-direction`与`flex-wrap`的合写

```css
flex-flow: flex-direction flex-wrap;
```

## 1.4 ☆justify-content

`主轴`对齐方式，可选值:

-   center： 居中对齐
-   flex-start： 开头对齐（默认）
-   flex-end： 末端对齐
-   space-around： 子项之间，以及主轴两端都均分空隙
-   space-between：仅子项之间均分空隙

## 1.5 ☆align-items

`侧轴`对齐方式，可选值：

-   center
-   flex-start
-   flex-end
-   strech： 拉伸子项在侧轴方向的长度以填充容器（默认）
-   baseline： 基线对齐

## 1.6 align-content

弹性线对齐方式，可选值:

-   strech：默认值
-   space-between
-   space-around
-   flex-start
-   flex-end

# 2. flexItem

**flexItem 子项属性**：

-   flex-grow：通过值大小指定当前子项相对其他子项将增长多少
-   flex-shrink：通过值大小指定当前子项相对其他子项将收缩多少
-   flex-basis：规定子项的初始长度
-   `flex`：即 grow、shrink、basis 的合写
-   order：通过值大小指定子项的排列顺序
-   `align-self`：子项侧轴对齐方式，将覆盖容器的`align-items`属性

## 2.1 order

规定 item 的排列顺序

```html
<div class="flex-container">
    <div style="order: 3">1</div>
    <div style="order: 2">2</div>
    <div style="order: 4">3</div>
    <div style="order: 1">4</div>
</div>
// 顺序:4 2 1 3
```

## 2.2 flex-grow

规定 item 的`空间占比`

```html
<div class="flex-container">
    <div style="flex-grow: 1">1</div>
    <div style="flex-grow: 1">2</div>
    <div style="flex-grow: 4">3</div>
</div>
// 按flex-container可分配的宽度分配 // 1占 1/6 width 2占 1/6 width 3占 4/6 width
```

## 2.3 flex-shrink

规定 item 的`缩小占比`

```html
<div class="flex-container">
    <div>1</div>
    <div style="flex-shrink: 0">2</div>
    <div>3</div>
</div>
// flex-container宽度变小时，2的宽度不变
```

## 2.4 flex-basis

规则 item 的`初始宽度`

```html
<div class="flex-container">
    <div>1</div>
    <div style="flex-basis: 50px">2</div>
    <div>3</div>
</div>
// 2的初始宽度为50px
```

## 2.5 flex

```css
flex: flex-grow flex-shrink flex-basis;
```

```css
.flex-item {
    flex: 1; // 每一个子项都均分盒子剩余的宽度
    // 相当于
    flex-grow: 1;
    flex-shrink: 1;
}
```

## 2.6 align-self

规定 item 自身在侧轴方向的对齐方式，默认是继承过来的`align-items`

```html
<div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div style="align-self: center">3</div>
    <div>4</div>
</div>

//
3的侧轴对齐方式为居中，而其他的均为默认的从flex-container继承过来的align-items:
strech
```

# 3. 例子

## 3.1 flex 响应式图库

结合媒体查询，根据屏幕的宽度大小动态地改变 flex 布局

```html
<div class="row">
    <div class="column">
        <img
            src="/i/photo/tulip-red.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-3.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-1.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-4.jpg"
            style="width:100%"
        />
    </div>
    <div class="column">
        <img
            src="/i/photo/tulip-red.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-3.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-1.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-4.jpg"
            style="width:100%"
        />
    </div>
    <div class="column">
        <img
            src="/i/photo/tulip-red.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-3.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-1.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-4.jpg"
            style="width:100%"
        />
    </div>

    <div class="column">
        <img
            src="/i/photo/tulip-yellow-2.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-3.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-1.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-4.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-red.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/tulip-yellow.jpg"
            style="width:100%"
        />
        <img
            src="/i/photo/flower-2.jpg"
            style="width:100%"
        />
    </div>
</div>
```

```css
.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}
.column {
    flex: 25%; // 四列column，每个column有八张图片
    max-width: 25%;
    padding: 0 4px;
}
.column img {
    margin-top: 8px;
    vertical-align: middle;
}

/* 媒体查询 */
@media (max-width: 800px) {
    .column {
        flex: 50%; // 当宽度小于800px时改两列
        max-width: 50%;
    }
}
@media (max-width: 600px) {
    .column {
        flex: 100%; // 当宽度小于600px时改一列
        max-width: 100%;
    }
}
```

## 3.2 flex 响应式网站布局

```html
<div class="header">
    <h1>奇哥的网站</h1>
</div>

<div class="navbar">
    <a href="#">链接1</a>
    <a href="#">链接2</a>
    <a href="#">链接3</a>
    <a href="#">链接4</a>
</div>

<div class="row">
    <div class="side">
        <h2>关于我</h2>
        <h5>我的照片：</h5>
        <div
            class="fakeimg"
            style="height:200px;"
        >
            图像
        </div>
        <p>个人的一些简介...</p>
        <h3>更多信息</h3>
        <p>XXXXXXXXX</p>
        <div
            class="fakeimg"
            style="height:60px;"
        >
            图像
        </div>
        <br />
        <div
            class="fakeimg"
            style="height:60px;"
        >
            图像
        </div>
        <br />
        <div
            class="fakeimg"
            style="height:60px;"
        >
            图像
        </div>
    </div>
    <div class="main">
        <h2>标题</h2>
        <h5>标题描述，2021 年 1 月 1 日</h5>
        <div
            class="fakeimg"
            style="height:200px;"
        >
            图像
        </div>
        <p>一些文本.....</p>

        <br />
        <h2>标题</h2>
        <h5>标题描述，2021 年 1 月 2 日</h5>
        <div
            class="fakeimg"
            style="height:200px;"
        >
            图像
        </div>
        <p>一些文本.......</p>
    </div>
</div>

<div class="footer">
    <h2>页脚</h2>
</div>
```

```css
* {
    box-sizing: border-box;
}
body {
    font-family: Arial;
    margin: 0;
}
.header {
    padding: 60px;
    text-align: center;
    background: skyblue;
    color: white;
}
.navbar {
    display: flex;
    background-color: #666;
}
.navbar a {
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
}
.navbar a:hover {
    background-color: #ddd;
    color: black;
}
/* flex容器 */
.row {
    display: flex;
    flex-wrap: wrap;
}
/* 侧边栏 */
.side {
    flex: 30%;
    background-color: #f1f1f1;
    padding: 20px;
}

/* 主列 */
.main {
    flex: 70%;
    background-color: white;
    padding: 20px;
}

.fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
}

.footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
}

/* 响应式布局 - 当屏幕小于 700 像素宽时，改变flex主轴方向实现从上到下排列 */
@media screen and (max-width: 700px) {
    .row,
    .navbar {
        flex-direction: column;
    }
}
```
