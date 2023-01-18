# concepts:

* Basics
  * [values and its types](#values-and-types)
  * [strict mode](#strict-mode)

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

case 3:deleting a function is not allowed

[gotodemo.js](../code/demo.js)
