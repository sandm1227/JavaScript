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
