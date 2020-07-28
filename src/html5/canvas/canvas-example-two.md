## canvas-example-two
> 1. 绘制三角形
````html
<html>
    <head>
        <script type="text/javascript">
            function draw() {
                var canvas = document.getElementById('canvas-example-two1');
                if(canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.moveTo(10,20);
                    ctx.lineTo(20,30);
                    ctx.lineTo(20,10);
                    ctx.lineTo(10,20);
                    // ctx.fill()
                    ctx.stroke();
                    ctx.closePath()
                }
            }
        </script>
    </head>

    <body onload="draw()">
        <canvas width="200" height="200" id="canvas-example-two1"></canvas>
    </body>
</html>
````

>2. 使用beginPath(), closePath(), stroke(), moveTo(), lineTo(), arc(),绘制笑脸
````html
<html>
    <head>
        <script type="text/javascript">
            function draw() {
                var canvas = document.getElementById('canvas-example-two2');
                if(canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    
                    ctx.beginPath();
                    ctx.arc(100,100,50,0,Math.PI*2,true); // 绘制脸
                    ctx.moveTo(130, 100); // 如果你想看到连续的线，你可以移除调用的moveTo()。
                    ctx.arc(100,100,30,0,Math.PI, false); // 口(顺时针)
                    ctx.moveTo(90 ,80); // 如果你想看到连续的线，你可以移除调用的moveTo()。
                    ctx.arc(85,80,5,0,Math.PI * 2, true); // 左眼
                    ctx.moveTo(120 ,80); // 如果你想看到连续的线，你可以移除调用的moveTo()。
                    ctx.arc(115,80,5,0,Math.PI * 2, true); // 右眼
                    ctx.stroke();
                    ctx.closePath()
                }
            }
        </script>
    </head>
    <body onload="draw()">
        <canvas id="canvas-example-two2" width="200" height="200"></canvas>
    </body>
</html>
````