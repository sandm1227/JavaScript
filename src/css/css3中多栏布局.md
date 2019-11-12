## css3中的多兰布局
>1. 使用多栏布局可以将一个元素中的内容分为多栏。
>2. 适合文本段落
>3. 可以解决使用float和position -不能撑开父容器高度问题；-左右两栏或多栏中底部不能对齐的问题
* column-count
>1. 将一个元素中的内容分为多栏显示
* column-width
>1. 设置每一栏的宽度而不需要设定元素的宽度
* column-gap
>1. 设置多栏之间的间隔距离
* column-rule
>1. 在栏与栏之间增加一条间格线，同border设置方法
>2. column-rule: 1px solid #f00

````html
<div class="box"></div>
````
````css
.box{
    column-count: 3;
    column-width: 100px;
    column-rule:1px solid #f00;
    column-gap: 16px;
}
````