# Concepts

* [lexical scope](#lexical-scope)

---

# Lexical Scope

There are two predominant models for how scope works. The first of these is by far the most common, used by the vast majority of                    programming languages. It's called lexical scope, and we will examine it in depth. The other model, which is still used by some languages               (such as Bash scripting, some modes in Perl, etc) is called dynamic scope.

the first traditional phase of a standard language compiler is called lexing (a.k.a., tokenizing). If you recall, the lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.It is this concept that provides the foundation to understand what lexical scope is and where the name comes from. To define it somewhat circularly, lexical scope is scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is
(mostly) set in stone by the time the lexer processes your code.

```javascript
function foo(a) {
 var b = a * 2;
 function bar(c) {
 console.log( a, b, c );
 }
 bar( b * 3 );
}
foo( 2 ); // 2, 4, 12
```

the above code scoping represent as

![ ](./images/image1.png)

In general the scope are classified in to three categories.

1. block scope
2. function scope
3. globla scope

## Block Scope

Before ES6 (2015), JavaScript had only **Global Scope** and  **Function Scope** .

ES6 introduced two important new JavaScript keywords: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

```javascript
{
  let x = 2;
}
// x can NOT be used here
```

Note:

Variables declared with the `var` keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

## Function Scope

JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

They all have  **Function Scope** :

```javascript
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
function myFunction() {
  let carName = "Volvo";   // Function Scope
}
function myFunction() {
  const carName = "Volvo";   // Function Scope
}
```

## Global JavaScript Variables

A variable declared outside a function, becomes  **GLOBAL** .

Variables declared **Globally** (outside any function) have  **Global Scope** .

**Global** variables can be accessed from anywhere in a JavaScript program.

Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.

```javascript
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
```
