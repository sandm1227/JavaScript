## canvas-example-one
>1. 在一个canvas画布上绘制两个长方形。其中一个有的alpha透明度。
````js
<html>
    <head>
        <script type="text/javascript">
            function draw() {
                var canvas = document.getElementById('canvas-example-one');
                if(canvas.getContext){
                    var ctx = canvas.getContext('2d');

                    ctx.fillStyle = "rgb(200, 0, 0)";
                    ctx.fillRect(10, 10, 55, 50);

                    ctx.fillStyle = "rgb(0, 0, 200, 0.5)";
                    ctx.fillRect(30, 30, 55, 50);
                }
            }
        </script>
    </head>
    <body onload="draw();">
        <canvas id="canvas-example-one" width="150" height="150"></canvas>
    </body>
</html>
````