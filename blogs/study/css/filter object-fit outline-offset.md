---
title: 4. filter object-fit outline-offset
author: 定子
date: '2022-07-27'
categories:
    - css
tags:
    - css
---

## 1. filter

设置图片的`视觉效果`（模糊度、饱和度等）

```css
img {
    filter: blur(4px) //模糊度
;
}

img {
    filter: grayscale(100%) //灰度
;
}
```

## 2.object-fit

用于调整 `<img>` 或 `<video>` 里资源的宽高以适应其容器

```css
object-fit: fill; // 默认值，填充元素的内容框
object-fit: contain; // 缩放以保持纵横比，将其“放入”元素的内容框（以图片为基准）
object-fit: cover; // 调整内容大小，以在“填充”元素的整个内容框时保持其长宽比（以框为基准）
```

## outline-offset

在 outline 与 boder 之间添加空间

注意：轮廓 outline 与边框 border 不同！轮廓线是在元素边框之外绘制的，可以与其他内容重叠。同时，轮廓也不是元素尺寸的一部分：即`盒模型的总宽高不受轮廓线宽度的影响`

```css
div {
    margin: 20px;
    border: 1px solid black;
    outline: 4px solid red;
    outline-offset: 15px; // boder与outline空隙为15px
}
```
