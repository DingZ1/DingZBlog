---
title: 2. border-radius、阴影、文本效果、字体
author: 定子
date: '2022-07-26'
categories:
    - css
tags:
    - css
---

## 1. 圆角

### 1.1 border-radius

```css
从左上角顺时针转一圈
border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius

border-radius: 5px 10px 5px 10px;
border-radius: 5px
```

## 2.阴影

### 2.1 box-shadow

盒子阴影

```css
            水平偏移   垂直偏移  [屏距][扩大半径] 颜色
box-shadow: leftOffset topOffset blur spread color inset;

box-shadow: 水平偏移
            垂直偏移
            blur(模糊距离即模拟出阴影到屏幕远近距离，可选)
            spread(阴影扩大尺寸，可选)
            color
            inset(默认为outer，可选);


```

### 2.2 text-shadow

字体阴影

```css
text-shadow: 水平偏移，垂直偏移，模糊半径(可选) ，颜色;

text-shadow: 2px 5px 1px #666;
text-shadow: -1px 0 black, 1px 0 black, 0 1px black, 0 -1px black; // 实现文字边框效果
```

## 3.文本效果

### 3.1 text-overflow

规定应如何呈现隐藏的溢出内容，前提是`overflow: hidden`

```css
text-overflow: clip(裁剪) | ellipsis(省略号);
```

**一行显示文字，超出部分用...代替**

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

// 三行
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```

### 3.2 word-wrap

使长文字能够被折断并换到下一行

```css
word-wrap: break-word;
```

### 3.3 word-break

指定换行规则

```css
word-break: keep-all(连字符处打断) | break-all(任何字符串打断);
```

### 3.4 writing-mode

规定文本行是水平放置还是垂直放置

```css
writing-mode: vertical-rl(垂直) |horizontal-tb(水平，默认);
```

## 4.网络字体

使用`@font-face`指定引入的网络字体为某一`font-family`

```css
1.引入，并命名为myFirstFont @font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
2.使用 div {
    font-family: myFirstFont;
}
```
