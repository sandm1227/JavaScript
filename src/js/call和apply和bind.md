## 原生实现call
>1. 第一个参数是this，后面是参数列表
>2. 不传入第一个参数或者第一个参数是undefined,null，那this就是window
````javascript
Function.prototype.myCall = function(context) {
    var context = context || window
    context.fn = this;
    var args = [...arguments].slice(1)
    var result = context.fn(...args);
    delete context.fn;
    return result
}
````

## 原生实现apply
>1. 第一个参数是this，后面参数是参数数组
>2. 不传入第一个参数或者第一个参数是undefined,null，那this就是window
````javascript
Function.prototype.myApply = function(context) {
    var context = context || window
    context.fn = this;

    var result
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
````

## 原生实现bind
>1. 第一个参数是this，后面参数是参数列表
>2. 不传入第一个参数或者第一个参数是undefined,null，那this就是window
````javascript
Function.prototype.myBind = function(context) {
    if(typeof this !== 'function') {
        throw new Error('error')
    }

    var self = this;
    var args = [...arguments].slice(1);

    // 返回一个函数
    return function F() {
        if(this instanceof F) { // 因为返回一个函数，所以可以用new F()，所以需要判断
            return new self(...args, ...arguments)
        }
        return self.apply(context, args.concat(...arguments))
    }

}
````
