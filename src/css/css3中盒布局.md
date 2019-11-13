## css3中的盒布局
* display: box
>1. 标准盒模型：width + margin-left + margin-right + padding-left + padding-right + 2*border-width
>2. 标准盒模型：height + margin-top + margin-bottom + padding-top + padding-bottom + 2*border-width
* box-sizing属性
>1. box-sizing: content-box || border-box
>2. content-box: 默认值，标准盒模型，宽高只包含内容。宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。

#### 样图
![content-box](../assets/img-demo1.jpg)
>3. border-box:
> width = border + padding + 内容的宽度
> height = border + padding + 内容的高度

#### 样图
![border-box](../assets/img-demo2.png)

## css3中的弹性盒布局
>1. 参考“flex布局.md”
* 注意
>1. 使用盒布局的时候，元素的宽度与高度具有自适应性，即元素的宽度与高度可以根据排列方向的改变而改变
* flex  ===  flex-grow flex-shrink flex-basis
>1. 参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
* 基础语法
````css
/* Basic values */
flex: auto;
flex: initial;
flex: none;
flex: 2;

/* One value, unitless number: flex-grow */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex-grow: default 0
flex-shrink: default 1
flex-basis: default auto

flex: 250px ===> flex-grow: 1 flex-shrink: 1 flex-basis: 250px;

/* align-content 用于指定多行布局时，各行的一个对齐方式 */
flex-start
flex-end
center
space-between
space-around
````
