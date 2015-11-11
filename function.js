/*
	1. 参数默认值
*/

// ES6之前

function fn1(y) {
	console.log( y = y || 1 )
}

// ES6

console.log('如果下面报错代表不支持参数默认值');

function fn2(y = 1) {
	console.log(y);
}

/*
	2. 参数默认值 => 进阶
*/

// 场景: 函数如果没有传人第二个参数其属性值method默认为GET 

function fn3(url, { method: 'GET' } = {}) {
	console.log()
}


// 误区：使用了默认值变量就无法使用 const 或 let 再次声明


//  场景：插件用户自定已参数

function plugin({
	property1 : 'a',
	property1 : '2'
} = {}) {
	// do something
}

	// or

var defaults = {
	property1 : 'a',
	property2 : '2'
}

function plugin(opts = defaults) {

}



/*
	3. 函数的length属性
*/ 


(function(a, b, c = 1) ).length;

// ( 函数 ).length 函数表达式 

// => 2

/*
	4. 不传入参数就报错
*/

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

/*
	5. 利用...rest(扩展运算符) 来代替 arguments
*/

function add(...num){
	return sum = num.each(function(){})
}

// 2.数组合并应用

[1,2].concat(arr2);
[1,2, ...arr2]

// 将一个数组转为用逗号分隔的元素序列。





