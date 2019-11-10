## css3中的变形处理
#### transform
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
##### transform-origin
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

### animations
>1. 通过关键帧的指定来在页面上产生更复杂的动画效果