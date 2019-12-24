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
                    ctx.moveTo(10,10);
                    ctx.arc(20, 10, 10, Math.PI*2, true);
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