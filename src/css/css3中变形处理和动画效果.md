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
    // transform: rotate(45deg);
    // transform: scale(0.5, 2);
    // transform: skew(50deg, 30deg);
    transform: translate(100px, 20px);
}
````
##### 3D

## css3中的动画效果