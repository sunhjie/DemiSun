// function a(arg1, arg1){}; //函数声明
// debug(a.name); // －－>a,   (FF, Safari, Chrome, Opera定义了name属性可以访问到函数指定的名字，跟在function关键字后面的标识符。

// var a = function(arg0, arg1){}; //匿名函数
// debug(a.name); // -－> 空字符串

// function a(arg0){   //a 返回了一个匿名函数，返回的函数可能会被赋值给一个变量或以其他方式调用
// 	return function(arg0){
// 		return 1;
// 	}
// }
// var b = a();
// var c = b();
// debug(b);  // --> function(arg0){return 1;}
// debug(c);  // --> 1

//闭包：有权访问另一个函数作用域中的变量的函数。创建的常见方式就是在一个函数内部创建另一个函数。

$(document).ready() 使用时，图像的高度和宽度这样的属性此时不一定有效。
可以实现一个onload事件处理程序，这两种机制能够和平共存。


function doStuff(){};
<body onload="doStuff();"> 
或
window.onload = doStuff;   //只使用函数名，如果带着圆括号，函数会被立即调用；函数名只是函数的标识符，可以用于在将来再调用

// jQuery 事件处理的绑定可以叠加(行为队列机制)，像document.addEventListener()和document.attachEvent()这种特定
// 于浏览器的方法，也能够提供类似功能。

<script src="a.js"></script>
<script src="jquery.js"></script>
<script>
	jQuery.noConflict(); //把s的控制权交还给a库
</script>
<script src="index.js"></script> //可以使用$代替a库

jQuery(document).ready(function($){
	//可以使用$
});

环境关键字this引用的是DOM元素，$(this)是jquery对象。
所以可以使用this.id 来获取被单击元素的ID








