## flex布局
>1. 弹性布局，用来为盒模型提供最大的灵活性
>2. 行内元素也可以使用flex布局
````css
.box {
    display: inline-flex
}
````
>3. Webkit内核的浏览器，必须加上-webkit前缀
````css
.box {
    display: -webkit-flex; /* Safari */
    display: flex
}
````
### 容器
>1. 采用Flex布局的元素，称为Flex容器，简称“容器”；
>2. 它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”
#### 容器的属性
* flex-direction
<code>决定项目的排列方向</code>
````css
.box {
    flex-direction: row(默认值) | row-reverse | column | column-reverse
}
````
* flex-wrap
<code>项目换行情况</code>
````css
.box {
    flex-wrap: nowrap(默认值) | wrap(自动换行，第一行在上) | wrap-reverse(自动换行，第一行在下)
}
````
* flex-flow
<code>是flex-direction和flex-wrap的简写形式，默认值是row nowrap</code>
````css
.box {
    flex-flow:<flex-direction> || <flex-wrap>
}
````
* justify-content
<code>定义项目在主轴上的对齐方式</code>
>1. **flex-start:** 左对齐（看主轴方向）（**默认值**）
>2. **flex-end:** 右对齐（看主轴方向）
>3. **center:** 居中对齐
>4. **space-between:** 两端对齐，项目之间的间隔相同
>5. **space-around:** 每个项目两侧间隔相同；所以项目之间间隔比项目与边框之间距离大一倍。
````css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around
}
````
* align-items 
<code>定义项目在交叉轴方向的对齐方式</code>
>1. **flex-start:** 交叉轴起点对齐 （看主轴方向）
>2. **flex-end:** 交叉轴终点对齐 （看主轴方向）
>3. **center:** 交叉轴中点对齐
>4. **stretch:** 如果项目未设置高度或设为auto，将占满整个容器的高度（**默认值**）
>5. **baseline:** 以项目的第一行文字的基线对齐
````css
.box {
    align-items: flex-start | flex-end | center | stretch | baseline
}
````
