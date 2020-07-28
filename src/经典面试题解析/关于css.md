## 题一：掌握盒子水平垂直居中的五大方案   
* 定位3中                                                                                           
````html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* 方法一 必须要设置box的width，height */
            html,
            body{
                position: relative;
                height: 100%;
            }
            .box{
                position: absolute;
                width: 200px;
                height: 300px;
                background: red;
                left: 50%;
                top: 50%;
                margin-left: -100px;
                margin-top: -150px;
            }
        </style>
    </head>

    <body>
        <div class="box"></div>
    </body>
</html>
````

````html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* 方法二 不需要考虑width，hieght；要考虑兼容性 */
            html,
            body{
                position: relative;
                height: 100%;
            }
            .box{
                position: absolute;
                width: 200px;
                height: 300px;
                background: red;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        </style>
    </head>

    <body>
        <div class="box"></div>
    </body>
</html>
````

````html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* 方法三 */
            html,
            body{
                position: relative;
                height: 100%;
            }
            .box{
                position: absolute;
                background: red;
                width: 200px;
                height: 300px;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
            }
        </style>
    </head>

    <body>
        <div class="box"></div>
    </body>
</html>
````
* flex布局 (弹性盒子布局)
````css
body{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
````

* js实现
````html
````

* display：table-cell
````css
body{ /* 父级元素需要设置固定宽高 */
    height: 100%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.box{
    display: inline-block;
    width: 200px;
    height: 300px;
    background: red;
}
````

## 题二：关于css中盒模型的几道面试题

## 题三：掌握几大经典布局的方案

## 题四：移动端响应式布局开发的三大方案

## 课后作业：
### 作业1: 使用css，让一个div消失在视野中，发挥想象力

### 作业2：请说明z-index的工作原理，使用范围
* 文档流
* 定位

### 作业3: 谈谈你对html5的理解

### 作业4: 如何使一个div里面的文字垂直居中，且该文字的大小根据屏幕大小自适应

### 作业5: 不考虑其他因素，下面哪种的渲染性能比较高？
A：.box a{}
B: a{}

