## canvas
>1. canvas是HTML5中新增加的画布元素, 使用js语言在网页上绘制图像

#### 基本用法
*  <canvas>元素
>1. canvas有width，height属性，默认是width=300px；height=150px
>2. canvas拥有html元素默认的id，class等属性。
>3. canvas拥有图像一样的margin，border，background等属性
````html
<canvas width="300" height="150" id="tutorial"></canvas>
````
* 替换内容
>1. <canvas>标签中提供了替换内容。不支持<canvas>的浏览器会忽略容器并在其中渲染后备内容。而支持<canvas>的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas。
>2. </canvas> **标签不可省略**
````html
<canvas with="300" height="150" id="stockGraph">
    current stock price: $3.15 +0.15
</canvas>
````
* 方法: getContext('2d')
````js
var canvas = document.getElementById('tutorial');
if(canvas.getContext) { // 检查浏览器的支持性
    // drawing code here
    var ctx = canvas.getContext('2d')
} else {
    // canvas-unsupported code here
}
````
* 一个模板骨架
````html
<html>
    <head>
        <title>Canvas tutorial</title>
        <script type="text/javascript">
            function draw() {
                var canvas = document.getElementById('tutorial');
                if(canvas.getContext) {
                    var ctx = canvas.getContext('2d')
                }
            }
        </script>
        <style type="text/css">
            canvas {
                border: 1px solid black;
            }
        </style>
    </head>
    <body onload="draw();">
        <canvas width="200" height="200" id="tutorial"></canvas>
    </body>
</html>
````

#### 绘制不同图形的方法API
>1. canvas的原点为左上角(0,0)
>2. 使用效果见 [canvas-example-one](https://github.com/sandm1227/JavaScript/blob/master/src/html5/canvas/canvas-example-one.md)
##### 绘制矩形
* fillRect(x, y, width, height)
> 绘制一个填充矩形
* strokeRect(x, y, width, height)
> 绘制一个矩形的边框
* clearRect(x, y, width, height)
> 清除指定矩形的区域，让清除部分完全透明

#### 绘制路径
>1. 首先，你需要创建路径起始点
>2. 然后，你使用画图命令去画出路径
>3. 之后把路径封闭
>4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形
>5. 使用效果见 [canvas-example-one](https://github.com/sandm1227/JavaScript/blob/master/src/html5/
* beginPath()
> 表示开始一个路径
* closePath()
> 表示关闭一个路径
* stroke()
> 用线条来绘制图形轮廓
> 调用stroke()时，所有形状不会自动闭合
* fill()
> 通过填充路径的内容区域生成实心图形
> 调用fill()时，所有没闭合的图形会自动闭合
* moveTo(x, y)
> 将笔触移动到指定的坐标点x以及y上。
> 我们可以用moveTo()绘制一些不连续的路径。
* lineTo(x, y)
> 绘制直线的方法, x,y代表坐标系中直线结束点
* arc(x, y, redius, startAngle, endAngle, anticlockwise)
> 1. 画一个圆形，以(x, y)为圆心，以redius为半径，从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成
> 2. startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。
> 3. anticlockwise === true 逆时针；否则是顺时针
> 4. arc()函数中表示角的单位是弧度，不是角度。角度与弧度的计算公式：弧度 = (Math.PI/180) * 角度
