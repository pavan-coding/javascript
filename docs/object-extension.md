# Concepts:

* [call,apply,bind](#call-apply-and-bind)
* [prototype](#prototype)
* classes

# Call Apply and bind:

## Definitions

Let's look at the functions we'll be studying here a bit more closely to understand what they do.

**Call** is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of `this` inside a function with whatever value you want.

**Apply** is very similar to the `call` function. The only difference is that in `apply` you can pass an array as an argument list.

**Bind** is a function that helps you create another function that you can execute later with the new context of `this` that is provided.

Now we will look at some basic examples of the call, apply, and bind functions. Then we will look at an example were we will be constructing our own function similar to the map function.

## How to Use the Call Function in JavaScript

`call` is a function that you use to change the value of `this` inside a function and execute it with the arguments provided.

Here is the syntax of the `call` function:

```javascript
func.call(thisObj, args1, args2, ...)

```

Where,

* **func** is a function that needs to be invoked with a different `this` object
* **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
* **args1, args2** are arguments that are passed to the invoking function with the changed `this` object.

Note that if you invoke a function without any `thisObj` argument, then JavaScript considers this property to be a global object.

Now that we have some context around what the `call` function is, let's start off by understanding it in more detail with some examples.

### How to call a function with different contexts in JS

Consider the below example. It consists of 3 classes – `Car`, `Brand1`, and `Brand2`.

```javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

If you look carefully, you can see that we use the `call` function to invoke the `Car` function on two occasions. Firstly, in the `setBrand` and then in the `definePrice` functions.

In both of these functions, we invoke the `Car` function with `this` object representing to the respective functions themselves. For example, inside `setBrand`, we call the `Car` function with the `this` object belonging to its context. The case is similar for `definePrice`.

### How to call a function with no arguments in JS

Consider the below example:

```javascript
const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();
```

In this example, we invoked the function `mountEntity` with no `thisObj` argument. In such cases, JavaScript refers to the global object.

## How to Use the Apply Function in JavaScript

The `Apply` function is very similar to the `Call` function. The only difference between `call` and `apply` is the difference in how arguments are passed.

In `apply`, arguments you can pass an argument as an array literal or a new array object.

Here is the syntax for the `apply` function:

```javascript
func.apply(thisObj, argumentsArray);
```

Where,

* **func** is a function that needs to be invoked with a different `this` object
* **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
* **argumentsArray** can be an array of arguments, array object, or the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) keyword itself.

As you can see above, the `apply` function has different types of syntaxes.

The first syntax is a simple one. You can pass in an array of arguments like below:

```javascript
func.apply(thisObj, [args1, args2, ...]);
```

The second syntax is where we can pass in the new array object to it:

```javascript
func.apply(thisObj, new Array(args1, args2));
```

The third syntax is where we can pass in the arguments keyword:

```javascript
func.apply(thisObj, arguments); 
```

[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is a special object available inside a function. It contains values of the arguments that are passed to a function. You can use this keyword with the `apply` function to take any number of arbitrary arguments.

The best part about `apply` is we don’t need to take care of the number of arguments that are passed to the invoking function. Because of its dynamic and versatile nature, you can use it in complicated situations.

Let’s look at the same example as above, but this time we'll use the `apply` function.

```javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

And here is an example that showcases how you'd use the `arguments` keyword:

```javascript
function addUp(){
		//Using arguments to capture the arbitrary number of inputs
    const args = Array.from(arguments); 
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log("this.x = ", this.x);
}

function driverFunc(){
    const obj = {
        inps: [1,2,3,4,5,6]
    }
    addUp.apply(obj, obj.inps);
}

driverFunc();
```

## How to Use the Bind Function in JavaScript

The `bind` function creates a copy of a function with a new value to the `this` present inside the calling function.

Here is the syntax for the `bind` function:

```javascript
func.bind(thisObj, arg1, arg2, ..., argN);
```

Where,

* **func** is a function that needs to be invoked with a different `this` object
* **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
* **arg1, arg2…argN** – you can pass 1 argument to the calling function or more than that, similar to the `call` function.

The `bind` function then returns a new function that consists of a new context to the `this` variable present inside the calling function:

```javascript
func(arg1, arg2);
```

Now this function `func` can be executed later with the arguments.

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
fullName()//john doe
```

## Preserving **this**

Sometimes the `bind()` method has to be used to prevent losing  **this** .

In the following example, the person object has a display method. In the display method, **this** refers to the person object:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

person.display();
```

the oubput of above is john doe

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
```

the output is undefined undefined

the reason is

Unlike Java, there's no intrinsic "binding" of functions to any object, regardless of how they're declared. The binding of object context happens only at function invocation time. Thus, when you pass a reference to a function to something like "setTimeout", it doesn't matter at all that you got the function from some object. It's just a function, and "setTimeout" will call it with the default context

when we use `new object` or `object.function()` for creation then the object this is passed otherwise it passess the settimeout this

```javascript
a=10
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
   // let x = document.getElementById("demo");
    console.log(this.firstName + " " + this.lastName)
    console.log(JSON.stringify(this))
    return function(){
      return 0;
    }
  }
}

setTimeout(person.display(),4000)
```

output john doe

The `bind()` method solves this problem.

In the following example, the `bind()` method is used to bind person.display to person.

This example will display the person name after 3 seconds:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    console.log( this.firstName + " " + this.lastName)
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
```

# Prototype:
