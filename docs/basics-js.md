# concepts:

* Basics
  * [values and its types](#values-and-types)
  * [strict mode](#strict-mode)
  * [old vs new](#old-vs-new)
  * [comments](#comments)
  * [variables](#variables)
  * [operators](#operators)
  * [conditional statements](#conditional-statements)
  * [loops](#loops)
  * [loop control statements](#loop-control-statements)
  * [blocks and functions](#blocks-and-functions)
  * [json](#json)
  * [read input in js](#readline-sync)

---

# values and Types

In javascript the values are classified as 6 categories

* string
* number
* null and undefined
* object
* symbol(new to es6)
* boolean

typeof is a operator that is used to find the type of the value that reside in the variable. in javascript a variable is just a container that has some value.typeof is used find the type of the value that is in the variable not the typeof variable.

Note:

```javascript
var a;

typeof a;//undefined

var a=undefined;

typeof a;//undefined
```

```javascript
var a=null;

typeof a;//object
```

actually it is bug in js.previously they have not cleared but mostly billions of website run on js . if the bug is set to typeof as null then nearly billions of website has to be changed and modified. so to avoid it the bug is not fixed and continue in earlier version.

# Strict mode

ES5 added a "strict mode" to the language, which tightens the rules for certain behaviors. Generally, these restrictions are seen as keeping the code to a safer and more appropriate set of guidelines. Also, adhering to strict mode makes your code generally more optimizable by the engine. Strict mode is a big win for code, and you should use it for all your programs. You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode.

```javascript
function foo() {
 "use strict";
 // this code is strict mode
 function bar() {
 // this code is strict mode
 }
}
//this code is not strict mode
```

```javascript
"use strict";
function foo() {
 // this code is strict mode
 function bar() {
 // this code is strict mode
 }
}
// this code is strict mode
```

If you turn on strict mode in your code, and you get errors, or code starts behaving buggy, your temptation might be to avoid strict
mode. But that instinct would be a bad idea to indulge. If strict mode causes issues in your program, it's almost certainly a sign that
you have things in your program you should fix.Not only will strict mode keep your code to a safer path, and not only will it make your code more optimizable, but it also represents the future direction of the language. It'd be easier on you to get usedto strict mode now than to keep putting it off—it'll only get harder to convert later!

cases where strict throw error:

case 1: using variable or objects without declaration is not allowed.

```javascript
"use strict";
x = 3.14;                // This will cause an error
```

case 2:deleting a variable or object is not allowed.

```javascript
"use strict";
let x = 3.14;
delete x;                // This will cause an error
```

case 3:deleting a function is not allowed.

```javascript
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
```

case 4: duplicate a parameter is not allowed

```javascript
"use strict";
function x(p1, p2) {};  //this will cause an error
```

case 5: octal numerical literal is not allowed.

```javascript
"use strict";
let x = 010; //this will cause an error
```

case 6: octal escape character are not allowed.

```javascript
"use strict";
let x = "\010"; // this will cause an error 
```

case 7:writing to read only property are not allowed.

```javascript
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error
```

case 8: writing to get only property is not allowed.

```javascript
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error
```

case 9: deleting an undeletable peoperty is not allowed.

```javascript
"use strict";
delete Object.prototype; // This will cause an error
```

case 10:word eval,arguments cannot be used as variable

```javascript
"use strict";
let eval = 3.14;         // This will cause an error
```

case 11:with statement is not allowed.

```javascript
"use strict";
with (Math){x = cos(2)}; // This will cause an error
```

case 12:eval method is not able to create the variables in the scope from which it was called.

```javascript
"use strict";
eval ("x = 2");
console.log (x);      // This will cause an error
```

case 13: eval method cannot declare variable using var or let or const keyword

```javascript
"use strict";
eval ("var x = 2");
alert (x);    // This will cause an error
```

case 14: this refer to the object that called the function. if the object is not specified then the function in strict mode return undefined where as in no strict mode it return window object.

```javascript
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
```

case 15:keywords reserved in javascript cannot be used as variable in strict mode.

Note:

"use strict" is only written at the beginning of the script or the beginning of the function.

# old vs new

there are so many new features in js that are not still not there in the stable version of some browsers.some features are cannot be run by the old browsers.

there are two ways to run the new stuff in the old browser.

* polyfilling
* transpiling

**Polyfilling:**

the method says "taking the definition of the new feature and producing the piece of code that is equivalent to the behaviour but it is able to run in older js environment"	.

**transpiling:**

we cannot polyfill the new syntax that is added to the language. the old js engine might through error.so the better option is to use the tool that convert the new code to old code that the older browser compatable.

transpiling=transforming + compiling.

Here’s a quick example of transpiling. ES6 adds a feature called
“default parameter values.” It looks like this:

```javascript
function foo(a = 2) {
 console.log( a );
}
foo(); // 2
foo( 42 ); // 42
```

Simple, right? Helpful, too! But it’s new syntax that’s invalid in preES6 engines. So what will a transpiler do with that code to make it
run in older environments?

```javascript
function foo() {
 var a = arguments[0] !== (void 0) ? arguments[0] : 2;
 console.log( a );
}
```

# Comments

there are two types of comments in javascript

* single line comment
* multi line comment

**single line comment**: uses  '//' to comment the entire line.

```javascript
var demo=0
//var demo=0
```

**multi line comment**: uses '/**/' to comment the multiple lines.

```javascript
var demo=0
/* var demo=0
var demo2=0 */
```

adding spaces after and before multi line comment make lines looks good.

# Variables

there are 4 ways in js to declare variables

* var
* let
* const
* nothing

Note:

1. Always declare JavaScript variables with `var`,`let`, or `const`.
2. The `var` keyword is used in all JavaScript code from 1995 to 2015.
3. The `let` and `const` keywords were added to JavaScript in 2015.
4. If you want your code to run in older browsers, you must use `var`.
5. declare variable with nothing may cause error in use strict mode and also it is not advisiable to use nothing variables.
6. the declaration does not describe the type of the value describe only the container (variable that hold value) scope and propety of container.

the difference between var and let and const is given below.

| **var**                                                                 | **let**                                                                                                                              | **const**                                                                                                                         |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| The scope of a var variable is functional scope.                              | The scope of a let variable is block scope.                                                                                                | The scope of a*const* variable is block scope.                                                                                        |
| It can be updated and re-declared into the scope.                             | It can be updated but cannot be re-declared into the scope.                                                                                | It cannot be updated or re-declared into the scope.                                                                                     |
| It can be declared without initialization.                                    | It can be declared without initialization.                                                                                                 | It cannot be declared without initialization.                                                                                           |
| It can be accessed without declaration as its default value is “undefined”. | It cannot be accessed without declaration otherwise it will give ‘referenceError’.                                                       | It cannot be accessed without declaration, as it cannot be declared without initialization.                                             |
| hoisting done, with initializing as ‘default’ value                         | Hoisting is done , but not initialized (this is the reason for the error when we access the let variable before declaration/initialization | Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization |

Rules for Identifiers:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter.
* Names can also begin with $ and _ (but we will not use it in this tutorial).
* Names are case sensitive (y and Y are different variables).
* Reserved words (like JavaScript keywords) cannot be used as names.

## var:

* the scope of the var is functional scope

```javascript
var demo3=0
function demo(){
   var demo4=0;
   //demo3 can be accessible here
   //demo4 can also be accessible
}
//demo3 can be accessible but not demo4.
```

* the var variable can be redeclared or reupdated.
* no initialization is requried while declaring by defualt it will assign undefined.
* can be accessed withouth initialization as default is undefined.

## let:

* the scope of let is block scope

```javascript
let x=0;
let i=0;
//let x=0;//cause error
for(let i=0;i<5;i++){//can declare i no issues 
 let j=0;
//x can be accesible here 
 
}
//can access x
//console.log(j) cause error
//cannot access j
```

* the let variable can be update but not redeclared within the scope
* can be declare without initialization.
* cannot be accesed without declaration.
* technically hoisting is not possible. as hoisting will be done but when we try to access it it say reference error.the reason is it not declared before so cannot access it.

## const:

* const is also block scope.

```javascript
const x=0;
const i=0;
//const x=5 cause error
//for loop should not use const cause error because of reinitialization
for(let i=0;i<5;i++){
	const demo=0;
	//x can access here
}
//demo canot access here but x can

```

* cannot be updated or redeclared in the scope
* cannot be declare without initialization
* cannot be accesed without declaration
* technically hoisting is not possible. as hoisting will be done but when we try to access it it say const declaration must be initialized error.the reason is it not declared before so cannot access it.

Note:

writing var and let for for loop may vary when you use settimeout.

With **`var`** you have a function scope, and only one shared binding for all of your loop iterations - i.e. the `i` in every setTimeout callback means **the same** variable that **finally** is equal to 5 after the loop iteration ends.

With **`let`** you have a block scope and when used in the `for` loop you get a new binding for each iteration - i.e. the `i` in every setTimeout callback means **a different** variable, each of which has a different value: the first one is 0, the next one is 1 etc.

```javascript
for( let i=0;i<5;i++) {
    setTimeout(function(){
        console.log(i);
    },1000);
}
//output
/* 
0
1
2
3
4 */
```

when we use var all 5 will be printed

```javascript
for( var i=0;i<5;i++) {
    setTimeout(function(){
        console.log(i);
    },1000);
}
\\output
/* 
5
5
5
5
5
 */

```

if we use let out of for same output

```javascript
let i;
for(  i=0;i<5;i++) {
    setTimeout(function(){
        console.log(i);
    },1000);
}
\\output
/* 
5
5
5
5
5
 */

```

# Operators

there are 7 types of operator in javascript

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Conditional Operators
* Type Operators
* Bitwise Opertors

**Arithmetic Operators**:

| Operator | Description         |
| -------- | ------------------- |
| +        | Addition            |
| -        | Subtraction         |
| *        | Multiplication      |
| **       | Exponentiation      |
| /        | Division            |
| %        | Modulus (Remainder) |
| ++       | Increment           |
| --       | Decrement           |

**Assignment Operators**:

there are 4 categories

* Arithmetic assignment operator
* Shift Assignment Operator
* Logical Assignment Operator
* Bitwise Assignment Operator

Arithmetic Assignment Operator:

| Operator | Example |
| -------- | ------- |
| =        | x = y   |
| +=       | x += y  |
| -=       | x -= y  |
| *=       | x *= y  |
| /=       | x /= y  |
| %=       | x %= y  |
| **=      | x **= y |

Shift assignment Operator:

Note:

 ">>>" is unsigned right shift

| Operator | Example  | Same As     | example                           |
| -------- | -------- | ----------- | --------------------------------- |
| <<=      | x <<= y  | x = x << y  | let x=-100<br />x<<=5//-3200      |
| >>=      | x >>= y  | x = x >> y  | let x=-100<br />x>>=5//-4         |
| >>>=     | x >>>= y | x = x >>> y | let x=-100<br />x>>>=5//134217724 |

Bitwise Assignment Operator:

| Operator | Example | Same As   |
| -------- | ------- | --------- |
| &=       | x &= y  | x = x & y |
| ^=       | x ^= y  | x = x ^ y |
| l =      | x l = y | x=x l y   |

Logical Assignment Operator:(es 2020)

| Operator | Example  | Same As          |
| -------- | -------- | ---------------- |
| &&=      | x &&= y  | x = x && (x = y) |
| ll=      | x ll = y | x = x ll (x=y)   |
| ??=      | x ??= y  | x = x ?? (x = y) |

&& : logical and is used

if the first value is true the second value is assigned

||: logical or is used

if the first value is false the second value is assigned

??:**Nullish coalescing assignment operator** is used

if the first value is null or undefined then the second value is assigned.

**Comparision Operator**:

let x=5

Note: "===" not only compare value but also compare the type of value.

| Operator | Description                       | Comparing | Returns |
| -------- | --------------------------------- | --------- | ------- |
| ==       | equal to                          | x == 8    | false   |
|          |                                   | x == 5    | true    |
|          |                                   | x == "5"  | true    |
| ===      | equal value and equal type        | x === 5   | true    |
|          |                                   | x === "5" | false   |
| !=       | not equal                         | x != 8    | true    |
| !==      | not equal value or not equal type | x !== 5   | false   |
|          |                                   | x !== "5" | true    |
|          |                                   | x !== 8   | true    |
| >        | greater than                      | x > 8     | false   |
| <        | less than                         | x < 8     | true    |
| >=       | greater than or equal to          | x >= 8    | false   |
| <=       | less than or equal to             | x <= 8    | true    |

**Logical Operator**:

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| ll       | logical or  |
| !        | logical not |

these operators are used with comparision operators to make conditions in programming.

**Conditional Operator**:

Condition ? true statement ? false Statement?;

**Type Operator**:

| Operator   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

**bitwise Operator**:

| Operator | Description          | Example | Same as     | Result | Decimal |
| -------- | -------------------- | ------- | ----------- | ------ | ------- |
| &        | AND                  | 5 & 1   | 0101 & 0001 | 0001   | 1       |
| l        | Or                   | 5 l 1   | 0101 l 0001 | 0101   | 5       |
| ~        | NOT                  | ~ 5     | ~0101       | 1010   | 10      |
| ^        | XOR                  | 5 ^ 1   | 0101 ^ 0001 | 0100   | 4       |
| <<       | left shift           | 5 << 1  | 0101 << 1   | 1010   | 10      |
| >>       | right shift          | 5 >> 1  | 0101 >> 1   | 0010   | 2       |
| >>>      | unsigned right shift | 5 >>> 1 | 0101 >>> 1  | 0010   | 2       |

# Conditional Statements:

the conditional statements are

* if
* if else
* else if
* switch

the conditional statements are similar to statement in c. the syntax is given below

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
}
```

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

# Loops

the Loops statements are

* for
* while
* do while

the syntax is similar to c program. syntax is given below.

```javascript
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
//example:
for(let i=0;i<10;i++){
}
```

```javascript
while (condition) {
  // code block to be executed
}
```

```javascript
do {
  // code block to be executed
}
while (condition);
```

# loop control statements

 the loop control statements are

* break
* continue
* labels

some examples are given below

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
/*
output:
The number is 0
The number is 1
The number is 2 */
```

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
/*output:
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9 */
```

labels with continue:

```javascript
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
  loop2:
  for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

labels with break:

```javascript
top:
for (i = 0; i < 4; i++) {
    demo:
  for (j = 0; j < 4; j++) {
     if(j==3){
        break demo;
   
    }
    if(j==2 && i==2)
    break top;
    console.log(i+" "+j)
  }
}
/*output
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1*/
```

# Blocks and Functions

js uses blocks to run a piece of code without changing the value of variable and use other value for the same variable name. can be used with let or const.

```javascript
let demo=100;
{
    let demo=120;
    console.log(demo);
}
console.log(demo);
/*output:
120
100*/
```

Note:

using var will change the global value because it has functional scope. so use let or const if you want same variable name with different value for some procedure.

**functions:**

A JavaScript function is defined with the `function` keyword, followed by a  **name** , followed by parentheses  **()** .

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
**( *parameter1, parameter2, ...* )**

The code to be executed, by the function, is placed inside curly brackets: **{}**

the syntax is given as

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

to invoke the function call name(1,1,1)

we can also give default value for the function in javascript.

```javascript
function showMessage(name, text = "no text given") {
  console.log( name + ": " + text );
}

showMessage("Ann");
```

the showMessage method can be invoked with showMessage("Ann") or showMessage("Ann,"text given")

we can return the values with the help of 'return value' statement.

**Never add a newline between** `return` **and the value**

For a long expression in `return`, it might be tempting to put it on a separate line, like this:

```javascript
return
 (some + long + expression + or + whatever * f(a) + f(b))
```

That doesn't work, because JavaScript assumes a semicolon after `return`. That’ll work the same as:

```javascript
return;
 (some + long + expression + or + whatever * f(a) + f(b))
```

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as `return`. Or at least put the opening parentheses there as follows:

```javascript
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

```

**function with unknown parameter**:

```javascript
function demo(){
    console.log(arguments.length);
    console.log(arguments[0]);
}
demo(1,2);
//output 
//2
//1
//or
function demo(...demoname){
    console.log(demoname.length);
    console.log(demoname[0]);
}
demo(1,2);
```

**function Expression**:

There is another way for creating function other than declartion that is function expression

```javascript
let a= function(a,b){
    return a+b;
}
console.log(a(1,2))
//output is 3
```

we can also assign function to a variable

```javascript
function demo(a,b){
    return a+b;
}
let a= demo;
console.log(a(1,2))
//output: 3
```

**Callback Function**:

callback function is nothing but passing function as argument.

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

or you can directly pass the function to it

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

Note: hoisting can be done on function decleration but not on the function expression.

**Arrow Function**:

the syntax for arrow function is given below

```javascript
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

the arrow function can be use without function word and with one arguments also.

```javascript
let a= (a,b)=>{
    return a+b;
}
console.log(a(1,2))
//output will be 3
```

arrow function with only one argument

```javascript
let a= a=>{
    return a;
}
console.log(a(1))
//or
let a=(a)=>{
    return a;
}
console.log(a(1))
 
```

more than one argument it is mandatory to use '()' brackets.

single line arrow function.

```javascript
let a= a=> a*2;

console.log(a(1))
//output is 2
//or
let a= (a,b)=>a+b;
console.log(a(1,2))
//output is 3
```

in single line arrow function return statement is not required and also we can't keep and should not keep the return statement.

by default it will take the parameters and return the value of the expression.

if there is no parameter then the arrow function should have empty brackets

```javascript
let a=()=> alert("demo")
```

**Function Constructor**:

```javascript
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
```

using function constructor is not recommended.

**Function Hoisting**:

hositing can be done for only function declarations only.

```javascript
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

**Self-invoking Function**:

Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

```javascript

(function () {
  let x = "Hello!!";  // I will invoke myself
})();
//or
(()=> {
    let x = "Hello!!";  // I will invoke myself
  })();
//or
var a; 
(a=function () {
    console.log("hello")// I will invoke myself
  })();
```

you can write self invoking function with anonymous function and arrow function and function expression.

# Json

* JSON stands for **J**ava**S**cript **O**bject **N**otation
* JSON is a lightweight data-interchange format
* JSON is plain text written in JavaScript object notation
* JSON is used to send data between computers
* JSON is language independent.

## Why Use JSON?

The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

JavaScript has a built in function for converting JSON strings into JavaScript objects:

`JSON.parse()`

JavaScript also has a built in function for converting an object into a JSON string:

`JSON.stringify()`

You can receive pure text from a server and use it as a JavaScript object.

You can send a JavaScript object to a server in pure text format.

You can work with data as JavaScript objects, with no complicated parsing and translations.

**Json Syntax:**

* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays

# JSON Data - A Name and a Value

JSON data is written as name/value pairs (aka key/value pairs).

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

### Example

**"name"**:**"John"**

> JSON names require double quotes

## JSON Values

In  **JSON** , *values* must be one of the following data types:

* a string
* a number
* an object
* an array
* a boolean
* null

In **JavaScript** values can be all of the above, plus any other valid JavaScript expression, including:

* a function
* a date
* undefined

the Above value cannot be used by json.

> In JSON, *string values* must be written with double quotes where as in js we can write string as single and double quotes.

## JSON Strings

Strings in JSON must be written in double quotes.

### Example

**{**"name"**:**"John"**}**

## JSON Numbers

Numbers in JSON must be an integer or a floating point.

### Example

**{**"age"**:**30**}**

## JSON Objects

Values in JSON can be objects.

### Example

**{**
"employee"**:{**"name"**:**"John"**,** **"age"**:**30**, **"city"**:**"New York"**}
}

Objects as values in JSON must follow the JSON syntax.

## JSON Arrays

Values in JSON can be arrays.

### Example

**{**
"employees"**:[**"John"**,** **"Anna"**, **"Peter"**]
}

## JSON Booleans

Values in JSON can be true/false.

### Example

**{**"sale"**:**true**}**

## JSON null

Values in JSON can be null.

### Example

**{**"middlename"**:**null**}**

# Json.Parse()

A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.

> Make sure the text is in JSON format, or else you will get a syntax error.

Use the JavaScript function `JSON.parse()` to convert text into a JavaScript object:

**const** **obj = JSON.**parse**(**'{"name":"John", "age":30, "city":"New York"}'**);**

Note:

Date objects are not allowed in JSON.

If you need to include a date, write it as a string.

You can convert it back into a date object later

```javascript
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
```

Or, you can use the second parameter, of the `JSON.parse()` function, called  *reviver* .

The *reviver* parameter is a function that checks each property, before returning the value.

```javascript
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

```

# JSON.stringify()

A common use of JSON is to exchange data to/from a web server.

When sending data to a web server, the data has to be a string.

Convert a JavaScript object into a string with `JSON.stringify()`.

## Stringify a JavaScript Object

Syntax: JSON.stringify(value, replacer,space )

replacer: array of properties to encode or a mapping function(key,value)

space: amount of space use for formatting.

Imagine we have this object in JavaScript:

**const** **obj = {name:** **"John"**, age: **30**, city: **"New York"**};

Use the JavaScript function `JSON.stringify()` to convert it into a string.

**const** **myJSON = JSON.**stringify**(obj);**

The result will be a string following the JSON notation.

### Stringify Dates

In JSON, date objects are not allowed. The `JSON.stringify()` function will convert any dates into strings.

### Example

```javascript
const obj = {name: "John", today: new Date(), city : "New York"};
const myJSON = JSON.stringify(obj);
```

the above method display date in string format

NOTE:

It is a common mistake to call a JSON object literal "a JSON object".

JSON cannot be an object. JSON is a string format.

The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.

Accessing Object Values:

```javascript
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj.name;
//or
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj["name"];

```

The important limitation: there must be no circular references.

```javascript
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup; // room references meetup
  
  JSON.stringify(meetup);   
```

The Above code will generate an error due to cricular reference.

to eliminate it we should use replacer function or array for encode then the error will be removed the above code returned as

```javascript
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup;// room references meetup
  
 console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key == 'occupiedBy') ? undefined : value;
  }));
   console.log( JSON.stringify(room, function replacer(key, value) {
        return (key == 'place')?undefined : value;
  }));
//to print the objects just remove the opposite attribute and set it to undefined
/*
output:
{"title":"Conference","participants":["john","ann"],"place":{"number":23}}
{"number":23,"occupiedBy":{"title":"Conference","participants":["john","ann"]}}
*/
```

Note:

dont use circular references it is a bad approach(leads to memory leakage)

Using replacer and spaces:

```javascript


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}*/



let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/



let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

```

# ReadLine-sync

to Read user input we use ReadLine-sync method for synchronous reading of input.

```javascript
var rl=require('readline-sync');
var name=rl.question('enter name\n')
console.log(name)
```
