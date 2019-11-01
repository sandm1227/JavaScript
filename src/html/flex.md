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
* align-content

<code>定义了多根轴线的对齐方式。如果该项目中只有一根轴线，该属性将不起作用<code>
>1. **flex-start:** 与交叉轴的起点对齐
>2. **flex-end:** 与交叉轴的终点对齐
>3. **center:** 与交叉轴的中点对齐
>4. **stretch:** （默认值），轴线占满整个交叉轴
>5. **space-between:** 与交叉轴两端对齐，轴线之间的间隔平均分布
>6. **space-around:**  每根轴线两侧的间隔相等。所以，轴线之间的间隔壁比轴线与边框的间隔大一倍
````css
.box {
    align-content: flex-start | flex-end | center | stretch | space-between | space-around
}
````
### 项目的属性

* order  

<code>定义项目的排列顺序，默认值为0。值越小，排列越靠前</code>
````css
.item {
    order: <integer>
}
````

* flex-grow  

<code>定义了项目的放大比例，默认值为0，即就算存在多余空间，也不放大</code>
>注意：如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍
````css
.item {
    flex-grow: <number> /* default 0 */
}
````

* flex-shrink  

<code>定义了项目的缩小比例，默认值为1，即空间不足时，项目自动缩小</code>
````css
.item {
    flex-shrink: <number> /* default 1 */
}
````

* flex-basis  

<code>定义了项目占据主轴的空间（main size），浏览器根据这个属性，计算主轴是否有多余空间。</code>
<code>它的默认值是auto，即项目本来大小</code>
> 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
````css
.item {
    flex-basis: <length> | auto /* default auto */
}
````

* flex  

>1. 是<code>flex-grow</code>，<code>flex-shrink</code>，<code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>后两个属性可选
>2. 该属性有两个快捷键：auto(<code>1 1 auto</code>), nonde(<code>0 0  auto</code>)
>3. **建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。**
````css
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
````

* align-self  

>1. 允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。
>2. 默认值是auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
````css
.item {
    align-self: auto | flex-start | flex-end | center | stretch | baseline
}
````
