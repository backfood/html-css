1. es6 moudel 与 umd 的区别
2. 浏览器微宏任务
   - macro task
     - setTimeout setInterval MessageChannel postMessage setImmdiate
     - MessageChannel
       - 实例有 port1 port2 两个端口，两个端口都可以通过 postMessage 向另一个端口发送数据、使用 onmessage 接受数据
       - 可以用来做深拷贝 但是深拷贝时不能处理循环引用，可以使用 loadsh 解决
       - （查看 loadsh 如何解决的）

```js
var channel = new MessageChannel();
var port1 = channel.port1;
var port2 = channel.port2;
port1.onmessage = function (event) {
  console.log("port1收到来自port2的数据：" + event.data);
};
port2.onmessage = function (event) {
  console.log("port2收到来自port1的数据：" + event.data);
};

port1.postMessage("发送给port2");
port2.postMessage("发送给port1");
```

- micro
  - MutationObserver Promise

1. js 运行机制
   1. https://mp.weixin.qq.com/s/58UhR2OkGv06RKHAdh-SrQ
2. 性能优化
   1. https://mp.weixin.qq.com/s/58UhR2OkGv06RKHAdh-SrQ
   2. 开发时性能优化
3. 深浅拷贝
   - JSON.parse/JSON.stringify 有三个问题
     1. 忽略 undefined
     2. 不能序列函数
     3. 不能解决循环引用的对象（循环引用时报错）
4. web work
   1. https://juejin.cn/post/7139718200177983524
5. node 异步与 js 异步的区别
