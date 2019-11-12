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