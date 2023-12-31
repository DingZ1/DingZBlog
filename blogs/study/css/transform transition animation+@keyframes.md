---
title: 3. transform transition animation+@keyframes
author: 定子
date: '2022-07-27'
categories:
    - css
tags:
    - css
---

## 1. transform (2D)

transform 提供了多种 2D 转换的方法

-   `translate`： 移动
-   `rotate`： 旋转
-   `scale`：缩放
-   skew：倾斜
-   matrix：矩阵

### 1.1 translate

沿 x、y 轴移动

```css
translate(x, y) == translateX(x) + translateY(y)

translate(5px) // x和y轴移动5px

translate(5px, 10px) == translateX(5px) translateY(10px) // x移动5px，y移动10px
```

### 1.2 rotate

沿 X、Y、Z 轴旋转，Z 轴指向屏幕外（默认 Z 轴）

左手螺旋定律：大拇指指向轴的正向，四指指向即为旋转正向

```css
rotate(45deg)  // 沿Z轴,顺时针旋转45°（大拇指指向屏幕外时，四肢指向为顺时针）
rotate(-45deg)  // 沿Z轴,逆时针旋转45°
rotateY(45deg)  // 沿Y轴
rotateX(45deg)  // 沿X轴
```

### 1.3 scale

缩放元素的 width 和 height

```css
scale(2); // 宽高放大2倍
scale(2,3); // 宽放大2倍，高放大3倍
scaleX(0.5); // 宽缩小2倍
scaleY(0.5);  // 高缩小2倍
```

### 1.4 skew

使元素沿 X 和 Y 轴倾斜一定角度

```css
skew(x, y)

skew(20deg)
skew(20deg, 45deg)
skewX(30deg)
skewY(30deg)
```

### 1.5 matrix

scale、translate、skew 的作用合

```css
matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
```

## 2. transition (过渡)

用于设置元素从一个样式到另一个样式的过度

```css
transition: property duration timing-function delay times direction;
transition: 属性 过渡时间 运动函数 延迟时间 运动次数 方向;
```

```css
transition: display 2s ease-in 1s infinit alternate;
```

## 3. 动画 animation + @keyframes

css 动画使元素逐渐从一种样式变为另一种样式，为这个过程定义一些关键帧，来实现动画效果

### 3.1 @keyframes

-   使用关键字"from"、"to"来代表 0 和 100%
-   或者使用 0、 25%、 50%、 75% 100%等来定义关键帧的元素样式,从而实现过渡动画效果

```css
@keyframes myAnimation {
    from {
        background-color: red;
    }
    to {
        background-color: yellow;
    }
}

@keyframes myAnimation {
    0% {
        background-color: red;
    }
    25% {
        background-color: yellow;
    }
    50% {
        background-color: blue;
    }
    100% {
        background-color: green;
    }
}
```

### 3.2 animation

属性:

-   `animation-name`： 动画名（由@keyframes 定义）
-   `animation-duration`： 动画时间
-   `animation-timing-function`： 动画时间函数
-   `animation-delay`： 动画延迟
-   animation-iteration-count： 循环次数
-   animation-direction： 是否轮流反向
-   animation-fill-mode： 动画暂停时的样式

```css
animation: name duration timing-function(可选，默认平滑) delay(可选，默认0)
    iteration-count(可选，默认0) direction(可选);
```

```css
div {
    animation: myAnimation 5s linear 2s infinite alternate;
}
div {
    animation-name: myAnimation;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: -2s; // 动画提前进行2s
    animation-count: infinite; // 无限循环
    animation-direction: alternate; // 前—后—前—后... ...
}
```
