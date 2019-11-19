## Prop

#### 特别注意
>1. 不建议在子组件修改父组件传递过来的props，（实际是可以修改的，也没有报错）
>2. 原因：Vue是单向数据流（单向下行绑定）。
>3. 每次父组件发生更新时，子组件中的所有prop都会刷新到最新的值。这意味着你不应该在子组件中去修改prop的值 
#### Prop类型
````js
props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactdPromise: Promise // or any other constructor
}
````

#### Prop传递方式
* 以字符串数组形式列出prop
````js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
````
* 以对象形式列出 （如上）
* 以对象形式列出 （如下）
> <code>type</code>可以是下列原生构造函数中的一种
>1. String
>2. Number
>3. Boolean
>4. Array
>5. Object
>6. Date
>7. Function
>8. Symbol
> <code>type</code>也可以是自定义构造函数，并且通过instanceof来进行检查确认
````js
// 自定义构造函数
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 可以使用
props: {
    author: Person
}
// 验证author的值是否通过new Person创建的
````
````js
props: {
    title: {
        type: String, // 类型
        default: '', // 默认值
        validator: function(value) { // 校验规则
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
    },
    commentIds: {
        type: Array,
        default: () => [] // 数组/对象的默认值必须从一个工厂函数中获取
    }
}
````

#### 非prop的特性
