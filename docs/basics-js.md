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