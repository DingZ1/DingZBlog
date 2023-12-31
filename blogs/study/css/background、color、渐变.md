---
title: 1. background、color、渐变
author: 定子
date: '2022-07-26'
categories:
    - css
tags:
    - css
---

## 1. background

### 1.1 多重背景

```css
background-image: url(flower.gif), url(paper.gif); // 分别引入两个背景图
background-position: right bottom, left top; // 分别定义两张图片位置
background-repeat: no-repeat, repeat; //  分别定义重复方式
/*简写*/
background: url(flower.gif) right bottom no-repeat, url(paper.gif) left top
        repeat;
```

### 1.2 background-size

```css
background-size: 100px 80px; // w:100px h:80px
background-size: contain; // 将背景图像缩放为尽可能大的尺寸（但其宽度和高度不能超出content区域）
background-size: cover; // 缩放背景图像，以使content区域完全被背景图像覆盖（其宽度和高度均等于或超过内容区域）
```

**全尺寸背景图像**

```css
html {
    background: url(img_man.jpg) 100%/100% no-repeat center fixed;
}
```

### 1.3 background-origin

指定背景图像的位置

```css
background-origin: border-box; // 从边框的左上角开始
background-origin: padding-box; // 从内边距边缘的左上角开始（默认）
background-origin: content-box; // 从内容的左上角
```

### 1.4 background-clip

```css
background-clip: border-box; // 背景绘制到边框边缘  （默认）
background-clip: padding-box; // 背景绘制到内边距边缘
background-clip: content-box; // 背景绘制到内容区边缘
```

## 2.Color (交给 UI 小姐姐就行了)

### 2.1 RGBA 颜色

```css
rgba(red, green, blue, alpha)
```

### 2.2 HSL 颜色

```css
hsl(hue, saturation, lightness)

hue(色相): 0 ~ 120 red  120 ~ 240 green  240 ~ 360  blue
saturation(饱和度): 0 ~ 100%
lightness(亮度): 0 ~ 100%
```

### 2.3 HSLA 颜色

```css
hsla(hue, saturation, lightness, alpha)
```

### 2.4 不透明度 opacity

```css
opacity: 0 ~1 // 注意：会改变整个元素的不透明度，影响到字体;;
```

## 3.渐变色 （嗯... 这个其实也可以交给设计组的小姐姐）

### 3.1 linear-gradient

线性渐变

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

1.从上到下渐变(默认)
linear-gradient(red, yellow);

2.从左到右渐变
linear-gradient(to right, red , yellow);

3.对角线渐变
linear-gradient(to bottom right, red, yellow); // 从左上到右下

4.角度渐变
linear-gradient(90deg, red, yellow); // 顺时针旋转，默认角度为180deg

5.多个颜色渐变
linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);

6.透明度渐变
linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

7.重复渐变
repeating-linear-gradient(red, yellow 10%, green 20%); // 重复五次，且每一次三种颜色平分渐变
```

### 3.2 radial-gradient

弧度渐变

```css
radial-gradient(shape size at position, start-color, ..., last-color);
```
