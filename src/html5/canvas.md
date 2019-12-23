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