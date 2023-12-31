---
title: 5. @media css变量
author: 定子
date: '2022-07-28'
categories:
    - css
tags:
    - css
---

## 1. 媒体查询

CSS2 中引入了 `@media` 规则，根据不同媒体类型应用不同样式

### 查询包括：

-   视口 viewport 的宽度和高度
-   设备 device 的宽度和高度
-   方向（平板电脑/手机处于横向还是纵向模式）
-   分辨率

### 媒体类型包括：

-   all: 所有媒体类型设备
-   print: 打印机
-   screen: 计算机、平板、手机等设备屏幕

### 语法：

```css
@media not|only mediaType and (expressions) {
  CSS-Code;
}
```

### 举个栗子：

```css
// 视口宽度 >= 480px时，应用skyblue色背景
@media screen and (min-width: 480px) {
    body {
        background-color: skyblue;
    }
}
```

### 再举多个详细的栗子

响应式导航菜单

```css
.topnav {
    overflow: hidden;
    background-color: #333;
}

.topnav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* 在宽度为 600 像素或更小的屏幕上，使菜单链接彼此堆叠，而不是并排 */
@media screen and (max-width: 600px) {
    .topnav a {
        float: none;
        width: 100%;
    }
}
```

大屏四列、中屏两列、小屏一列(float 响应布局)

```css
.column {
    float: left;
    width: 25%;
}

@media screen and (max-width: 992px) {
    .column {
        width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
    }
}
```

大屏四列、中屏两列、小屏一列(flex 响应布局)

```css
.row{
  display: flex;
  flex-wrap: wrap;
}
.column{
  flex: 25%;
  padding: 20px;
}
@media screen and (max-width: 992px){
  .column{flex: 50%}
}
@media screen and (max-width: 600px){
  .column{flex: 100%}

  /* 或者设置flew容器row主轴方向为从上到下
  .row{flex-direction: column}
}
```

屏幕尺寸更改字体大小

```css
div.example {
  background-color: lightgrey;
  padding: 20px;
}

@media screen and (min-width: 600px) {
  div.example {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
```

浏览器的宽度在某像素区间，更改 \<div> 元素的外观

```css
// 600 ~ 900px
@media screen and (max-width: 900px) and (min-width: 600px) {
    div {
        background: yellow;
    }
}

// 600 ~ 900px 或者大于1100px
@media screen and (max-width: 900px) and (min-width: 600px),
    (min-width: 1100px) {
    div {
        background: yellow;
    }
}
```

## 2.CSS 变量

`var()`函数用于插入 css 变量值，意味可以定义局部或全局变量，使用 JS 来修改变量以及基于媒体查询来修改变量

### 2.1 定义复用的 color

```css
// 1.定义
:root {
    --gray: #777;
    --white: #154384;
}
// 2.var()插入
body {
    backgroun-color: var(--white);
}
.container {
    color: var(--gray);
    border: 1px solide var(--gray);
}
```

### 2.2 局部 css 变量

在:root 定义的是全局 css 变量，在元素里定义的则为`局部`，只有子元素都可以访问到，且变量遵循`临近原则`

```css
:root{
  --gray: #666;
}
body{
  color: var(--gray); // #666
}
.container{
  --gray: #777;
  color: var(--gray): // #777; 临近原型
}
.container .content{
    color: var(--gray); // #777
}
```

### 2.3 ☆JS 修改 css 变量

```css
var r = document.querySelector(':root') // 获取根元素
var rs = getComputedStyle(r) // 获取根元素计算style
rs.getPropertyValue('--gray') // #666 访问style属性
rs.setProperty('--gray','#777') // 设置style属性
```

### 2.4 在媒体查询中使用 css 变量

```css
:root {
    --blue: #1e90ff;
    --white: #ffffff;
}
.container {
    --fontsize: 25px;
}

h2 {
    border-bottom: 2px solid var(--blue);
}

.container {
    color: var(--blue);
    background-color: var(--white);
    font-size: var(--fontsize);
    padding: 15px;
}

@media screen and (min-width: 450px) {
    .container {
        --fontsize: 50px; //屏幕大于450px时，字体大小为50px
    }
}
```
