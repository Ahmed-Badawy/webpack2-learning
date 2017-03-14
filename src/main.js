//multiple ways to do it:-
		// import im1 from "./file1";
		// let im2 = require("./file1");

// im1("hello world 1");
// im2("hello world 2");


// console.log("------------------------------------------------------");
// import {notify} from "./file1";
// notify("hello world this is notify");



/*************************************************************
some es6 for converting
*************************************************************/
console.log("---------------------------log string---------------------------");
let fun = _=>console.log("hello world");
let p1 = new Promise((resolve,reject)=>{
	window.setTimeout(_=>resolve("after timeout"),2000)
});

console.log(fun());
p1.then(res=>console.log("output here: "+res));

class Rectangle {
  constructor(height, width) { this.height = height; this.width = width; }
}
console.log(Rectangle.height);;
/**********************************************************************/




/*********************************************************************
Loading css & injecting it into the db
		  if you don't want to require them from here you have to put them inside the "entry" propertary inside (webpack.config.js)
**********************************************************************/
// let css_content = require("./main.css");
// console.log(css_content);
/*********************************************************************
Loading SASS & injecting it
**********************************************************************/
// let sass_content = require("./main.scss");
// console.log(sass_content);
/*********************************************************************
Loading Stylus
**********************************************************************/




