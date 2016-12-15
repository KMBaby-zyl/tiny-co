### co 的原理

***

> co 函数库其实就是将两种自动执行器（Thunk 函数和 Promise 对象），
> 包装成一个库。使用 co 的前提条件是，Generator 函数的 yield 命令后面，
> 只能是 Thunk 函数或 Promise 对象。



tiny-co 即想自己实现一个 Thunk 和 Promise 

最后实现一个tiny-co
