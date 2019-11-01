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
    flex-direction: row | row-reverse | column | column-reverse
}
````