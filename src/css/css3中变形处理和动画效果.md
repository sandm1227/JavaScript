## css3中的变形处理
### transform
>1. 使用transform功能实现文字或图片的旋转，移动，倾斜，缩放这4种类型的变形处理。
##### 2D
>2. 旋转：rotate(45deg)
>3. 缩放：scale(x,y) x:水平方向  y:垂直方向
>        scale(0.5): 表示整体缩放0.5倍
>4. 倾斜：skew(x, y) x:水平方向  y:垂直方向
>        skew(30deg):表示只水平方向上顺时针倾斜30deg
>5. 移动：translate(x, y) x:水平方向  y:垂直方向
>        translate(50px)：表示只在水平方向移动50px
````html
<div class="box1">示例文字</div>
````
````css
.box1{
    width: 300px;
    background-color: yellow;
    text-align: center;
    margin: 150px auto;
    /* transform: rotate(45deg); */
    /* transform: scale(0.5, 2); */
    /* transform: skew(50deg, 30deg); */
    transform: translate(100px, 20px);
}
````
#### transform-origin
>1. transform在进行变形处理时，默认是以元素的<code>中心点</code>为<code>基准点</code>进行变形的
>2. 使用transform 改变变形的基准点
````css
div#box2{
    width: 200px;
    height: 200px;
    background: green;
    transform: rotate(45deg);
    transform-origin: left bottom;
}
````

##### 3D
>1. 旋转：rotateX，rotateY，rotateZ，rotate3d(x,y,z,angle)
> rotate(0,1,0, 120deg)
>2. 缩放：scaleX，scaleY，scaleZ，scale3d(x,y,z)
>3. 倾斜：skewX，skewY，skew(x,y)
>4. 移动：translateX，translateY，translateZ，translate3d(x,y,z)

## css3中的动画效果
>1. transitions 和 animations 都可以通过改变css的属性值来产生动画效果。
### transitions
>1. 支持从一个属性值平滑过渡到另一个属性值。
>2. 概念：在css3中，transitions功能通过将元素的某个属性从一个属性值在指定的时间内平滑过度到另一个属性值来实现动画功能。
>3. 用法：<code>transition: property duration timing-function delay</code>
>4. property: 属性
>5. duration: 平滑过度需要的时间
>6. timing-function: 通过什么方法进行平滑过渡
>7. 三个属性分开写：
>8. transition-property: background-color
>9. transition-duration: 1s
>10. transition-timing-function: linear

#### demo
````html
<template>
  <div>
      <div id="box1" @click="clickFunc"></div>
      <div class="box2" :class="{'active': isActive}"></div>
  </div>
</template>
````
````js
export default {
  name: 'tes3',
  data () {
    return {
        isActive: false
    };
  },
  methods: {
      clickFunc() {
          this.isActive = !this.isActive
      }
  }
}
````
````css
.box2{
    width: 200px;
    height: 200px;
    background-color: green;
    /* transform-origin: left bottom; */
    /* transition: height 0.3s linear, background-color 0.3s linear, transform 0.3s linear; */
    transition: all 0.3s linear;
}
.active{
    height: 100px;
    background-color: orange;
    transform: rotate(45deg);
}
````

### animations
>1. 通过关键帧的指定来在页面上产生更复杂的动画效果
>2. animation-name
>3. animation-duration
>4. animation-timing-function
>5. animation-delay: 延迟多少毫秒或多少秒后开始执行动画
>6. animation-iteration-count: 用于指定动画的执行次数，可指定infinite（无限次）
>7. animation-direction: 指定动画的执行方向，可指定的属性值包括：
* normal: 初始值（动画执行完之后返回初始状态）
* alternate：交替更改动画的执行方向
* reverse： 反方向执行动画
* alternate-reverse：从方向开始，交替更改动画的执行方向
>8. animation: keyframes的名称 duration timing-function delay animation-iteration-count animation-direction

#### demo
````html
<div class="box"></div>
````
````css
@keyframes mycolor {
    0% {
        background-color: red;
        transform: rotate(0deg);
    }
    40% {
        background-color:green;
        transform: rotate(30deg);
    }
    70% {
        background-color: pink;
        transform: rotate(-30deg);
    }
    100% {
        background-color: red; 
        transform: rotate(0deg);
    }
}
.box{
    width: 200px;
    height: 40px;
    background-color:orange;
    &:hover{
        animation: mycolor 5s linear;
    }
}
````

### 实现动画的方法
* linear 
>1. 在动画开始时与结束时以同样的速度进行改变
* ease-in
>1. 在动画开始时速度很慢，然后速度沿曲线值进行加快
* ease-out
>1. 在动画开始时速度很快，然后速度沿曲线值进行放慢
* ease
>1. 在动画开始时速度很慢，然后速度沿曲线值进行加快，然后速度再沿曲线值进行放慢
* ease-in-out
>1. 在动画开始时速度很慢，然后速度沿曲线值进行加快，然后速度再沿曲线值进行放慢