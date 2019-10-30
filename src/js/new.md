## 原生实现new
>1. 生成一个新的对象
>2. 获取构造函数
>3. 连接到原型上
>4. 判断结果类型并返回
````javascript
function myNew() {
    var obj = new Object();
    const Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    var result = Con.apply(obj, arguments);
    return typeof result === 'object' ? result : obj;
}
````