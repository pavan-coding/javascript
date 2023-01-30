## Concepts:

[Array Methods](#array-methods)

[String Methods](#string-methods)

[Number Methods](#number-methods)

[Natives](#natives)

[Operator Precedence](#operator-precedence)

[Errors and Exceptional handling](#errors-and-exceptional-handling)

---

# Array Methods

The declaration for array is given as

```javascript
let arr= new Array()
//or
let arr=[]
```

the above two syntaxes are declaration of arrays.

we use for of loop to iterate through array

```javascript
let arr=[1,2,3]
for(let x of arr){
  console.log(x)
}
```

The List of Arrays methods are

| Name                                                                      | Description                                                                                                                                                                                                                                                                                     | syntax                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)           | Joins arrays and returns an array with the joined arrays                                                                                                                                                                                                                                        | *array1* .concat( *array2* , * array3* , ..., * arrayX* )                                                                                                                                                                                                                                                                                                                                                                               |
| [constructor](https://www.w3schools.com/jsref/jsref_constructor_array.asp)   | Returns the function that created the Array object's prototype                                                                                                                                                                                                                                  | *array* .constructor                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [copyWithin()](https://www.w3schools.com/jsref/jsref_copywithin.asp)         | Copies array elements within the array, to and from specified positions<br />Note: <br />the main array is not modified. is just copy to the position and return the array<br />it does not overwrite the existing value at the position. it just move it and then add the elements.           | *array* .copyWithin( *target, start, end* )<br />target->the position where the start to end values<br />need to be kept.                                                                                                                                                                                                                                                                                                               |
| [entries()](https://www.w3schools.com/jsref/jsref_entries.asp)               | Returns a key/value pair Array Iteration Object where the key is index and value is value.we can use<br />for of loop to iterate to it.                                                                                                                                                         | array.entries()                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [every()](https://www.w3schools.com/jsref/jsref_every.asp)                   | Checks if every element in an array pass a test.return true if all the elements pass the test else<br />false will be returned.<br />Note: the function will not execute for empty elements i.e having the array with sub array with <br />no value in that array etc                          | *array* .every( *function(currentValue, index, arr), thisValue* )<br />currentValue: describe the currentValue<br />index:describe the currentIndex<br />arr: describe the array<br />thisValue:optional default is undefined<br />a value passed to the function as its this value                                                                                                                                                    |
| [fill()](https://www.w3schools.com/jsref/jsref_fill.asp)                     | Fill the elements in an array with a static value.<br />Note: if the end value crosses the size of the array it will take up to the array size only.                                                                                                                                            | *array*.fill( *value, start, end* )                                                                                                                                                                                                                                                                                                                                                                                                     |
| [filter()](https://www.w3schools.com/jsref/jsref_filter.asp)                 | Creates a new array with every element in an array that pass a test                                                                                                                                                                                                                             | *array* .filter( *function(currentValue, index, arr), thisValue* )                                                                                                                                                                                                                                                                                                                                                                      |
| [find()](https://www.w3schools.com/jsref/jsref_find.asp)                     | Returns the value of the first element in an array that pass a test                                                                                                                                                                                                                             | *array*.find( *function(currentValue, index, arr),thisValue* )                                                                                                                                                                                                                                                                                                                                                                          |
| [findIndex()](https://www.w3schools.com/jsref/jsref_findindex.asp)           | Returns the index of the first element in an array that pass a test                                                                                                                                                                                                                             | *array*.findIndex( *function(currentValue, index, arr), thisValue* )                                                                                                                                                                                                                                                                                                                                                                    |
| [forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)               | Calls a function for each array element                                                                                                                                                                                                                                                         | *array* .forEach( *function(currentValue, index, arr), thisValue* )                                                                                                                                                                                                                                                                                                                                                                     |
| [from()](https://www.w3schools.com/jsref/jsref_from.asp)                     | Creates an array from an object                                                                                                                                                                                                                                                                 | Array.from(*object, mapFunction, thisValue* )<br />Note: here Array is not array it is Array object.<br />from is a function of Array Object<br />if we write array then it is array if it is Array then it <br />is Array object.<br />let string="demo"<br />let arr=Array.from(string)<br />//arr=>['d','e','m','o']<br />let arr=Array.from(string,function(value){<br />return value+"a"<br />}))<br />//arr=>['da','ea','ma','oa'] |
| [includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)       | Check if an array contains the specified element                                                                                                                                                                                                                                                | *array* .includes( *element* , start )                                                                                                                                                                                                                                                                                                                                                                                                  |
| [indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)         | Search the array for an element and returns its position                                                                                                                                                                                                                                        | *array* .indexOf( *item* , start )                                                                                                                                                                                                                                                                                                                                                                                                      |
| [isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp)               | Checks whether an object is an array                                                                                                                                                                                                                                                            | Array.isArray(obj)                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [join()](https://www.w3schools.com/jsref/jsref_join.asp)                     | Joins all elements of an array into a string. we can specify the seperator.the default seperator is<br />comma(,).return string                                                                                                                                                                 | *array* .join(*separator* )                                                                                                                                                                                                                                                                                                                                                                                                             |
| [keys()](https://www.w3schools.com/jsref/jsref_keys.asp)                     | Returns a Array Iteration Object, containing the keys of the original array. you can iterate through<br />for of loop.                                                                                                                                                                          | array.keys()                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp) | Search the array for an element, starting at the end, and returns its position.<br />similar to indexOf() but the difference is it will check from last to first.                                                                                                                               | array.lastIndexOf(item,start)                                                                                                                                                                                                                                                                                                                                                                                                               |
| [length](https://www.w3schools.com/jsref/jsref_length_array.asp)             | Sets or returns the number of elements in an array                                                                                                                                                                                                                                              | array.length                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [map()](https://www.w3schools.com/jsref/jsref_map.asp)                       | Creates a new array with the result of calling a function for each array element.<br />the original array will not be modified.                                                                                                                                                                 | *array* .map( *function(currentValue, index, arr), thisValue* )                                                                                                                                                                                                                                                                                                                                                                         |
| [pop()](https://www.w3schools.com/jsref/jsref_pop.asp)                       | Removes the last element of an array, and returns that element                                                                                                                                                                                                                                  | array.pop()                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)       | Allows you to add properties and methods to an Array object.we can create our own method<br />and use it for arrays.<br />Note: we should not change the prototype of the javascript build in datatypes<br />we should not change the prototype of the of an object that is not in our control. | Array.prototype.name=value<br />here value can be a value or a function.<br />in function we can write with and without parameter.<br />if we want to modify the data without parameter then <br />we need to use this.<br />[code](../code/basics-javascript/array-prototype.js)                                                                                                                                                             |
| [push()](https://www.w3schools.com/jsref/jsref_push.asp)                     | Adds new elements to the end of an array, and returns the new length                                                                                                                                                                                                                            | array.push(item1,item2,item3,...itemx)                                                                                                                                                                                                                                                                                                                                                                                                      |
| [reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)                 | Reduce the values of an array to a single value (going left-to-right)                                                                                                                                                                                                                           | *array* .**reduce**( *function(total, currentValue, currentIndex, arr), initialValue* )<br />total:the initial value or the previous value returned by the function<br />currentvalue: the value of the current element<br />currentIndex: the index of the current element<br />arr:the array <br />initial value: value to be passes to the function as intial value                                                           |
| [reduceRight()](https://www.w3schools.com/jsref/jsref_reduceright.asp)       | Reduce the values of an array to a single value (going right-to-left)                                                                                                                                                                                                                           | *array* .**reduceRight**( *function(total, currentValue, currentIndex, arr), initialValue* )                                                                                                                                                                                                                                                                                                                                      |
| [reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)               | Reverses the order of the elements in an array                                                                                                                                                                                                                                                  | *array* .reverse()                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [shift()](https://www.w3schools.com/jsref/jsref_shift.asp)                   | Removes the first element of an array, and returns that element                                                                                                                                                                                                                                 | array.shift()                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)             | Selects a part of an array, and returns the new array<br />The `slice()` method selects from a given  *start* , up to a (not inclusive) given  *end* .                                                                                                                                    | *array* .slice( *start* ,  end )                                                                                                                                                                                                                                                                                                                                                                                                       |
| [some()](https://www.w3schools.com/jsref/jsref_some.asp)                     | Checks if any of the elements in an array pass a test                                                                                                                                                                                                                                           | *array* .some( *function(value, index, arr), this* )                                                                                                                                                                                                                                                                                                                                                                                    |
| [sort()](https://www.w3schools.com/jsref/jsref_sort.asp)                     | Sorts the elements of an array                                                                                                                                                                                                                                                                  | array.sort(comparator function)                                                                                                                                                                                                                                                                                                                                                                                                             |
| [splice()](https://www.w3schools.com/jsref/jsref_splice.asp)                 | Adds/Removes elements from an array.                                                                                                                                                                                                                                                            | array.splice(index,howmany,item1,item2,...itemx)                                                                                                                                                                                                                                                                                                                                                                                            |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_array.asp)       | Converts an array to a string, and returns the result                                                                                                                                                                                                                                           | array.toString()                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)               | Adds new elements to the beginning of an array, and returns the new length                                                                                                                                                                                                                      | array.unshift(item1,item2,item3....itemx)                                                                                                                                                                                                                                                                                                                                                                                                   |
| [valueOf()](https://www.w3schools.com/jsref/jsref_valueof_array.asp)         | Returns the primitive value of an array                                                                                                                                                                                                                                                         | array.valueOf()                                                                                                                                                                                                                                                                                                                                                                                                                             |

# String methods

| Name                                                                            | Description                                                                                                                                                                               | syntax                                                                                                                                                                      |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp)                       | Returns the character at a specified index (position)                                                                                                                                     | string.charAt(index)<br />it will return the character in the string at the index<br />in the string format                                                                 |
| [charCodeAt()](https://www.w3schools.com/jsref/jsref_charcodeat.asp)               | Returns the Unicode of the character at a specified index                                                                                                                                 | string.charCodeAt(index)                                                                                                                                                    |
| [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)                | Returns two or more joined strings                                                                                                                                                        | *string* .concat( *string1* ,  *string2* , ...,  *stringX* )                                                                                                        |
| [constructor](https://www.w3schools.com/jsref/jsref_constructor_string.asp)        | Returns the string's constructor function<br />for js string it return function String(){[native code]}                                                                                   | string.constructor                                                                                                                                                          |
| [endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp)                   | Returns if a string ends with a specified value                                                                                                                                           | *string* .endsWith( *searchvalue* , length )<br />the maximum length of the string to search for                                                                        |
| [fromCharCode()](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)           | Returns Unicode values as characters                                                                                                                                                      | String.fromCharCode(*n1* ,  *n2* , ...,  *nX* )<br />n1,n2,..nx is unicode values                                                                                     |
| [includes()](https://www.w3schools.com/jsref/jsref_includes.asp)                   | Returns if a string contains a specified value                                                                                                                                            | *string* .includes( *searchvalue* ,start)                                                                                                                               |
| [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)                     | Returns the index (position) of the first occurrence of a value in a string                                                                                                               | *string* .indexOf( *searchvalue* , start )                                                                                                                              |
| [lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof.asp)             | Returns the index (position) of the last occurrence of a value in a string                                                                                                                | *string* .lastIndexOf( *searchvalue* ,  start)                                                                                                                         |
| [length](https://www.w3schools.com/jsref/jsref_length_string.asp)                  | Returns the length of a string                                                                                                                                                            | string.length                                                                                                                                                               |
| [localeCompare()](https://www.w3schools.com/jsref/jsref_localecompare.asp)         | Compares two strings in the current locale<br />return -1,0,1                                                                                                                             | *string* .localeCompare( *compareString* )                                                                                                                              |
| [match()](https://www.w3schools.com/jsref/jsref_match.asp)                         | Searches a string for a value, or a regular expression, and returns the matches.<br />return null if no matches found.<br />uses regular expression or values.                            | *string* .match( *match*                                                                                                                                                |
| [prototype](https://www.w3schools.com/jsref/jsref_prototype_string.asp)            | Allows you to add properties and methods to an object                                                                                                                                     | *object* .prototype.*name* = value <br />similar to array prototype<br />the value can be value or function <br />[code ](../code/basics-javascript/string-prototype.js) |
| [repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp)                       | Returns a new string with a number of copies of a string                                                                                                                                  | string.repeat(count)                                                                                                                                                        |
| [replace()](https://www.w3schools.com/jsref/jsref_replace.asp)                     | Searches a string for a value, or a regular expression, and returns a string where the values are replaced                                                                                | string.replace(searcvalue,new value)                                                                                                                                        |
| [search()](https://www.w3schools.com/jsref/jsref_search.asp)                       | Searches a string for a value, or regular expression, and returns the index (position) of the mat                                                                                         | string.search(stringvalue)                                                                                                                                                  |
| [slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)                  | Extracts a part of a string and returns a new string                                                                                                                                      | *string* .slice( *start* , end )<br />end is optional                                                                                                                   |
| [split()](https://www.w3schools.com/jsref/jsref_split.asp)                         | Splits a string into an array of substrings                                                                                                                                               | *string* .split( *separator* , limit )                                                                                                                                  |
| [startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp)               | Checks whether a string begins with specified characters                                                                                                                                  | *string* .startsWith( *searchValue* , start)<br />where start is optional                                                                                               |
| [substr()](https://www.w3schools.com/jsref/jsref_substr.asp)                       | Extracts a number of characters from a string, from a start index (position)<br />similar to slice but the difference is it take the negative values.                                     | *string* .substr( *start* , length )                                                                                                                                    |
| [substring()](https://www.w3schools.com/jsref/jsref_substring.asp)                 | Extracts characters from a string, between two specified indices (positions)<br />if start is greater than end both are swaped<br />if start is less than 0 then it will be replaced by 0 | string.substring(start,end)                                                                                                                                                 |
| [toLocaleLowerCase()](https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp) | Returns a string converted to lowercase letters, using the host's locale                                                                                                                  | string.toLocaleLowerCase()                                                                                                                                                  |
| [toLocaleUpperCase()](https://www.w3schools.com/jsref/jsref_tolocaleuppercase.asp) | Returns a string converted to uppercase letters, using the host's locale                                                                                                                  | string.toLocaleUpperCase()                                                                                                                                                  |
| [toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp)             | Returns a string converted to lowercase letters                                                                                                                                           | string.toLowerCase()                                                                                                                                                        |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_string.asp)            | Returns a string or a string object as a string                                                                                                                                           | string.toString()                                                                                                                                                           |
| [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp)             | Returns a string converted to uppercase letters                                                                                                                                           | string.toUpperCase()                                                                                                                                                        |
| [trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp)                    | Returns a string with removed whitespaces                                                                                                                                                 | string.trim()                                                                                                                                                               |
| [trimEnd()](https://www.w3schools.com/jsref/jsref_string_trim_end.asp)             | Returns a string with removed whitespaces from the end                                                                                                                                    | string.trimEnd()                                                                                                                                                            |
| [trimStart()](https://www.w3schools.com/jsref/jsref_string_trim_start.asp)         | Returns a string with removed whitespaces from the start                                                                                                                                  | string.trimStart()                                                                                                                                                          |
| [valueOf()](https://www.w3schools.com/jsref/jsref_valueof_string.asp)              | Returns the primitive value of a string or a string object                                                                                                                                | string.valueOf()                                                                                                                                                            |

# Number Methods:

| Name                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               | syntax                                                                                      |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [constructor](https://www.w3schools.com/jsref/jsref_constructor_number.asp)         | Returns the function that created JavaScript's Number prototype<br />default is<br />function Number() { [native code] }                                                                                                                                                                                                                                                                                                                                                  | number.constructor                                                                          |
| [EPSILON](https://www.w3schools.com/jsref/jsref_number_epsilon.asp)                 | Returns the difference between 1 and the smallest number greater than 1                                                                                                                                                                                                                                                                                                                                                                                                   | Number.EPSILON                                                                              |
| [isFinite()](https://www.w3schools.com/jsref/jsref_isfinite_number.asp)             | Checks whether a value is a finite number<br />it return false for<br />Infinite (not finite) numbers are `Infinity`, `-Infinity`, or `NaN`<br />otherwise it return true.                                                                                                                                                                                                                                                                                          | Number.isFinite(*value* )                                                                |
| [isInteger()](https://www.w3schools.com/jsref/jsref_isinteger.asp)                  | Checks whether a value is an integer                                                                                                                                                                                                                                                                                                                                                                                                                                      | Number.isInteger(*value* )                                                                |
| [isNaN()](https://www.w3schools.com/jsref/jsref_isnan_number.asp)                   | Checks whether a value is Number.NaN<br />Nan=>Not a Number<br />In JavaScript, `NaN` is a number that is not a legal number.<br />The `Number.isNaN()` method returns `true` if the value is `NaN`, and the type is a Number.<br />the difference between isNan(value) and Number.isNan(value) is<br />`isNaN()` method returns `true` if a **value** is Not-a-Number.<br />`Number.isNaN()` returns `true` if a **number** is Not-a-Number. | Number.isNan(value)<br /><br />or <br /><br />isNan(value)                                 |
| [isSafeInteger()](https://www.w3schools.com/jsref/jsref_issafeinteger.asp)          | Checks whether a value is a safe integer<br />The `Number.isSafeInteger()` method returns `true`if a number is a safe integer.<br />A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number: <br />all integers from (2^53^ - 1) to -(2^53^ - 1).                                                                                                                                                                         | Number.isSafeInteger(*value* )                                                            |
| [MAX_SAFE_INTEGER](https://www.w3schools.com/jsref/jsref_max_safe_integer.asp)      | Returns the maximum safe integer in JavaScript.                                                                                                                                                                                                                                                                                                                                                                                                                           | Number.MAX_SAFE_INTEGER                                                                     |
| [MIN_SAFE_INTEGER](https://www.w3schools.com/jsref/jsref_min_safe_integer.asp)      | Returns the minimum safe integer in JavaScript                                                                                                                                                                                                                                                                                                                                                                                                                            | Number.MIN_SAFE_INTEGER                                                                     |
| [MAX_VALUE](https://www.w3schools.com/jsref/jsref_max_value.asp)                    | Returns the largest number possible in JavaScript                                                                                                                                                                                                                                                                                                                                                                                                                         | Number.MAX_VALUE                                                                            |
| [MIN_VALUE](https://www.w3schools.com/jsref/jsref_min_value.asp)                    | Returns the smallest number possible in JavaScript                                                                                                                                                                                                                                                                                                                                                                                                                        | Number.MIN_VALUE                                                                            |
| [NaN](https://www.w3schools.com/jsref/jsref_number_nan.asp)                         | Represents a "Not-a-Number" value                                                                                                                                                                                                                                                                                                                                                                                                                                         | Number.NaN                                                                                  |
| [NEGATIVE_INFINITY](https://www.w3schools.com/jsref/jsref_negative_infinity.asp)    | Represents negative infinity (returned on overflow)                                                                                                                                                                                                                                                                                                                                                                                                                       | Number.NEGATIVE_INFINITY                                                                    |
| [POSITIVE_INFINITY](https://www.w3schools.com/jsref/jsref_positive_infinity.asp)    | Represents infinity (returned on overflow)                                                                                                                                                                                                                                                                                                                                                                                                                                | Number.POSITIVE_INFINITY                                                                    |
| [parseFloat()](https://www.w3schools.com/jsref/jsref_number_parsefloat.asp)         | Parses a string an returns a number                                                                                                                                                                                                                                                                                                                                                                                                                                       | Number.parseFloat(*value* )                                                               |
| [parseInt()](https://www.w3schools.com/jsref/jsref_number_parseint.asp)             | Parses a string an returns a whole number<br />radix=>optional <br />default is 10 <br />we can specify a number from 2 to 36 based on the number system.                                                                                                                                                                                                                                                                                                               | Number.parseInt(*string, radix* )                                                         |
| [prototype](https://www.w3schools.com/jsref/jsref_prototype_num.asp)                | Allows you to add properties and methods to an object                                                                                                                                                                                                                                                                                                                                                                                                                     | Number.prototype.*name  =* value<br />[code](../code/basics-javascript/number-prototype.js) |
| [toExponential(x)](https://www.w3schools.com/jsref/jsref_toexponential.asp)         | Converts a number into an exponential notation<br />x=>is optional between 0 and 20 representing the digits in the notation after the decimal point.                                                                                                                                                                                                                                                                                                                      | *number* .toExponential( *x* )                                                          |
| [toFixed(x)](https://www.w3schools.com/jsref/jsref_tofixed.asp)                     | Formats a number with x numbers of digits after the decimal point<br />x=>no of decimals points default is 0.                                                                                                                                                                                                                                                                                                                                                             | *number* .toFixed( *x* )                                                                |
| [toLocaleString()](https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp) | Converts a number into a string, based on the locale settings<br />mostly used for currecy display<br />there are so many locales and strings refer website to see.                                                                                                                                                                                                                                                                                                       | *number* .toLocaleString( *locales* ,  *options* )                                    |
| [toPrecision(x)](https://www.w3schools.com/jsref/jsref_toprecision.asp)             | Formats a number to x length<br />A decimal point and nulls are added (if needed), to create the specified length.                                                                                                                                                                                                                                                                                                                                                        | *number* .toPrecision(x)                                                                  |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)             | Converts a number to a string<br />radix is optional between 2 to 36.                                                                                                                                                                                                                                                                                                                                                                                                     | *number* .toString( *radix* )                                                           |
| [valueOf()](https://www.w3schools.com/jsref/jsref_valueof_number.asp)               | Returns the primitive value of a number                                                                                                                                                                                                                                                                                                                                                                                                                                   | *number* .valueOf()                                                                       |

# Natives

Here’s a list of the most commonly used natives:
• String()
• Number()
• Boolean()
• Array()
• Object()
• Function()
• RegExp()
• Date()
• Error()
• Symbol()—added in ES6!

Note:

if we use natives for declaration then we get typeof as object rather than string,number,etc.

example:

```javascript
let s=new String("helo")
console.log(s)
let a="demo"
console.log(s.toString())
console.log(typeof s)
console.log(s instanceof String)
console.log(typeof a)
/*
[String: 'helo']
helo
object
true
string
*/
```

The result of the constructor form of value creation new String("abc") is an object wrapper around the primitive ("abc") value.

The point is, new String("abc") creates a string wrapper object around "abc", not just the primitive "abc" value itself.

Note:

never do things like new String("abc"), new Number(42), etc.—always prefer using the literal primitive values "abc" and 42

There are even gotchas with using the object wrappers directly that you should be aware of if you do choose to ever use them.

For example, consider Boolean wrapped values:
var a = new Boolean( false );
if (!a) {
 console.log( "Oops" ); // never runs
}
The problem is that you’ve created an object wrapper around the false value, but objects themselves are “truthy"S, so
using the object behaves oppositely to using the underlying false value itself, which is quite contrary to normal expectation. If you want to manually box a primitive value, you can use the Object(..) function (no new keyword):

```javascript
var a="abc"
var b = new String( a );
var c = Object( a );
typeof a; // "string"
typeof b; // "object"
typeof c; // "object"
b instanceof String; // true
c instanceof String; // true
Object.prototype.toString.call( b ); // "[object String]"
Object.prototype.toString.call( c ); // "[object String]"
```

Again, using the boxed object wrapper directly (like b and c above)  is usually discouraged, but there may be some rare occasions you’ll
run into where they may be useful

If you have an object wrapper and you want to get the underlying primitive value out, you can use the valueOf() method:

```javascript
var a=new String("abc");
var b = new Number( 42 );
var c = new Boolean( true );
a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true

```

Unboxing can also happen implicitly, when using an object wrapper value in a way that requires the primitive value. This process (coercion) will be covered in more detail next, but briefly:

```javascript
var a = new String( "abc" );
var b = a + ""; // `b` has the unboxed primitive value "abc"
typeof a; // "object"
typeof b; // "string"
```

The Array constructor has a special form where if only one number argument is passed, instead of providing that value as contents of the
array, it’s taken as a length to “presize the array” (well, sorta). This is a terrible idea. Firstly, you can trip over that form accidentally, as it’s easy to forget.

```javascript
var a=new Array(3);
console.log(a.length);
console.log(a);
var b=[3]
console.log(b.length);
var c=new Array(3,2);
console.log(c.length);
/*
3
[ <3 empty items> ]
1
2
*/
```

when we try to push the values in a the empty items remains same and then value will be pushed. so it is bad practice to declare array object with

one argument with constructor. we can declare array object using square objects and it is good to practise it.

**Implict Coercion**:

which is done by the java scipt engine

**Explict Coercion**:

which is done by us.

```javascript
var a = 42;
var b = a + ""; // implicit coercion
var c = String( a ); //explicit coercion
```

# Operator Precedence

Note: more in number more in precedence.

| Val | Operator | Description                                                                                                                                    | Example                 |
| --- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 18  | ( )      | [Expression Grouping](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence2)                                               | (100 + 50) * 3          |
| 17  | .        | [Member Of](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_member_of)                                                                 | person.name             |
| 17  | []       | [Member Of](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_member_of2)                                                                | person["name"]          |
| 17  | ?.       | [Optional Chaining](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_optional_chaining) [ES2020](https://www.w3schools.com/js/js_2019.asp) | x ?. y                  |
| 17  | ()       | [Function Call](https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions)                                                                  | myFunction()            |
| 17  | new      | [New with Arguments](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_new_arguments)                                                    | new Date("June 5,2022") |
| 16  | new      | [New without Arguments](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current)                                                       | new Date()              |

| 15 | ++ | [Postfix Increment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_incr2) | i++ |
| -- | -- | ---------------------------------------------------------------------------------- | --- |
| 15 | -- | [Postfix Decrement](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decr2) | i-- |
| 14 | ++ | [Prefix Increment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_incr)   | ++i |
| 14 | -- | [Prefix Decrement](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decr)   | --i |

| 14 | ! | [Logical NOT](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_not)    | !(x==y) |
| -- | - | ----------------------------------------------------------------------------- | ------- |
| 14 | ~ | [Bitwise NOT](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_not) | ~x      |

| 14 | +      | [Unary Plus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_unary_plus)   | +x                 |
| -- | ------ | ---------------------------------------------------------------------------------- | ------------------ |
| 14 | -      | [Unary Minus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_unary_minus) | -x                 |
| 14 | typeof | [Data Type](https://www.w3schools.com/js/tryit.asp?filename=tryjs_typeof_all)         | typeof x           |
| 14 | void   | [Evaluate Void](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_void)      | void(0)            |
| 14 | delete | [Property Delete](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_delete)  | delete myCar.color |

| 13 | ** | [Exponentiation](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetric_exponent1) [ES2016](https://www.w3schools.com/js/js_2016.asp) | 10 ** 2        |
| -- | -- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 12 | *  | [Multiplication](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mult)                                                             | 10 * 5         |
| 12 | /  | [Division](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_div)                                                                    | 10 / 5         |
| 12 | %  | [Division Remainder](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mod)                                                          | 10 % 5         |
| 11 | +  | [Addition](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_add)                                                                    | 10 + 5         |
| 11 | -  | [Subtraction](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_sub)                                                                 | 10 - 5         |
| 11 | +  | [Concatenation](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_concatenate)                                                       | "John" + "Doe" |

| 10 | <<  | [Shift Left](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_left)                 | x << 2  |
| -- | --- | --------------------------------------------------------------------------------------------- | ------- |
| 10 | >>  | [Shift Right (signed)](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_right_sign) | x >> 2  |
| 10 | >>> | [Shift Right (unsigned)](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_right)    | x >>> 2 |

| 9 | in         | [Property in Object](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_in)         | "PI" in Math       |
| - | ---------- | ---------------------------------------------------------------------------------------- | ------------------ |
| 9 | instanceof | [Instance of Object](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_instanceof) | x instanceof Array |

| 9 | <   | [Less than](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison9)              | x < y      |
| - | --- | ---------------------------------------------------------------------------------------- | ---------- |
| 9 | <=  | [Less than or equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison11)    | x <= y     |
| 9 | >   | [Greater than](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison8)           | x > y      |
| 9 | >=  | [Greater than or equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison10) | x >= Array |
| 8 | ==  | [Equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison1)                  | x == y     |
| 8 | === | [Strict equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison4)           | x === y    |
| 8 | !=  | [Unequal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison5)                | x != y     |
| 8 | !== | [Strict unequal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison6)         | x !== y    |

| 7 | & | [Bitwise AND](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_and) | x & y |
| - | - | ----------------------------------------------------------------------------- | ----- |
| 6 | ^ | [Bitwise XOR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_xor) | x ^ y |
| 5 | l | [Bitwise OR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_or)   | x l y |

| 4 | && | [Logical AND](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and)                                                 | x && y |
| - | -- | -------------------------------------------------------------------------------------------------------------------------------- | :----: |
| 3 | ll | [Logical OR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_or)                                                   | x ll y |
| 3 | ?? | [Nullish Coalescing](https://www.w3schools.com/js/tryit.asp?filename=tryjs_nullish) [ES2020](https://www.w3schools.com/js/js_2019.asp) | x ?? y |

| 2 | ? : | [Condition](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison) | ? "yes" : "no" |
| - | --- | -------------------------------------------------------------------------- | -------------- |

| 2 | =      | [Simple Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_equal)                   | x = y    |
| - | ------ | ------------------------------------------------------------------------------------------------------ | -------- |
| 2 | :      | [Colon Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_colon)                    | x: 5     |
| 2 | +=     | [Addition Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_plusequal)             | x += y   |
| 2 | -=     | [Subtraction Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_minequal)           | x -= y   |
| 2 | *=     | [Multiplication Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_multequal)       | x *= y   |
| 2 | **=    | [Exponentiation Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_exponential)     | x **= y  |
| 2 | /=     | [Division Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_divequal)              | x /= y   |
| 2 | %=     | [Remainder Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_modequal)             | x %= y   |
| 2 | <<=    | [Left Shift Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_left_shift)          | x <<= y  |
| 2 | >>=    | [Right Shift Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_right_shift)        | x >>= y  |
| 2 | >>>=   | [Unsigned Right Shift](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_unsigned_right_shift) | x >>>= y |
| 2 | &=     | [Bitwise AND Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_and)        | x &= y   |
| 2 | l=     | [Bitwise OR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_or)          | x l= y   |
| 2 | ^=     | [Bitwise XOR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_xor)        | x ^= y   |
| 2 | &&=    | [Logical AND Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_logical_and)        | x &= y   |
| 2 | ll=    | [Logical OR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_logical_or)          | x ll= y  |
| 2 | =>     | [Arrow](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arrow_function4)                            | x => y   |
| 2 | yield  | Pause / Resume                                                                                         | yield x  |
| 2 | yield* | Delegate                                                                                               | yield* x |
| 2 | ...    | [Spread](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_spread_array)                         | ... x    |
| 1 | ,      | Comma                                                                                                  | x , y    |

# Errors and Exceptional Handling

* there are 4 keyword for errors exceptional handling.
  * try
  * catch
  * finally
  * throw

**Try Catch**:

**syntax**:

```javascript
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
```

Note:

the errors that occurs at read time are called as *parse time error(syntax are incorrect)*

try catch can handle the error that occurs in valid code.

try catch execute in synchronous manner.

Error object has 4 properties there are

* Name
* Message
* Stack

`name `Error name. For instance, for an undefined variable that's `"ReferenceError"`.

`message `Textual message about error details.There are other non-standard properties available in most environments. One of most widely used and supported is:

`stack` Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

## The throw Statement

The `throw` statement allows you to create a custom error.

Technically you can  **throw an exception (throw an error)** .

The exception can be a JavaScript `String`, a `Number`, a `Boolean` or an `Object`:

example:

```javascript
throw "Too big";    // throw a text
throw 500;          // throw a number
```

The syntax is:

throw `<error object> or <message>`

Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with `name` and `message` properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` and others. We can use them to create error objects as well.

Their syntax is:

```javascript
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

For built-in errors (not for any objects, just for errors), the `name` property is exactly the name of the constructor. And `message` is taken from the argument.

**Finally**:

The `try...catch` construct may have one more code clause: `finally`.

If it exists, it runs in all cases:

* after `try`, if there were no errors,
* after `catch`, if there were errors.

The extended syntax looks like this:

```javascript
try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
```

The code has two ways of execution:

1. If you answer “Yes” to “Make an error?”, then `try -> catch -> finally`.
2. If you say “No”, then `try -> finally`.

The `finally` clause is often used when we start doing something and want to finalize it in any case of outcome.

For instance, we want to measure the time that a Fibonacci numbers function `fib(n)` takes. Naturally, we can start measuring before it runs and finish afterwards. But what if there’s an error during the function call? In particular, the implementation of `fib(n)` in the code below returns an error for negative or non-integer numbers.

The `finally` clause is a great place to finish the measurements no matter what.

Here `finally` guarantees that the time will be measured correctly in both situations – in case of a successful execution of `fib` and in case of an error in it:

Note:

The `finally` clause works for *any* exit from `try...catch`. That includes an explicit `return`.

In the example below, there’s a `return` in `try`. In this case, `finally` is executed just before the control returns to the outer code.

example:

```javascript
function func() {

    try {
      return 1;
  
    } catch (err) {
      /* ... */
    } finally {
      console.log( 'finally' );
    }
  }
  func()
```

the code above give output finally.

Note:

we can remove catch by keeping finally If we don't want to handle the error.

**Custom Error and Extending Errors**

When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need `HttpError`, for database operations `DbError`, for searching operations `NotFoundError` and so on.

Our errors should support basic error properties like `message`, `name` and, preferably, `stack`. But they also may have other properties of their own, e.g. `HttpError` objects may have a `statusCode` property with a value like `404` or `403` or `500`.

JavaScript allows to use `throw` with any argument, so technically our custom error classes don’t need to inherit from `Error`. But if we inherit, then it becomes possible to use `obj instanceof Error` to identify error objects. So it’s better to inherit from it.

As the application grows, our own errors naturally form a hierarchy. For instance, `HttpTimeoutError` may inherit from `HttpError`, and so on.

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}
```

when we have more than one error then we can use instanceof to find the for which the error belong to.

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
```

**Global Exceptional Handling**:

> In js we have window object where as in node js we have global object


## Global Objects

The following table provides a list of other objects which we use frequently in our applications. For a more detail, you can refer to the official documentation.

| Sr.No. | Module Name & Description                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1      | [**Console**](https://www.tutorialspoint.com/nodejs/nodejs_console.htm):Used to print information on stdout and stderr.                                                     |
| 2      | [**Process**](https://www.tutorialspoint.com/nodejs/nodejs_process.htm):Used to get information on current process. Provides multiple events related to process activities. |

## Console Methods

Following is a list of methods available with the console global object.

| Sr.No. | Method & Description                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | console.log([data][, ...])  Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.         |
| 2      | console.info([data][, ...])  Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.        |
| 3      | console.error([data][, ...])  Prints to stderr with newline. This function can take multiple arguments in a printf()-like way.       |
| 4      | console.warn([data][, ...])  Prints to stderr with newline. This function can take multiple arguments in a printf()-like way         |
| 5      | console.dir(obj[, options])  Uses util.inspect on obj and prints resulting string to stdout.                                         |
| 6      | console.time(label)  Mark a time.                                                                                                    |
| 7      | console.timeEnd(label)  Finish timer, record output.                                                                                 |
| 8      | console.trace(message[, ...])  Print to stderr 'Trace :', followed by the formatted message and stack trace to the current position. |
| 9      | console.assert(value[, message][, ...])  Similar to assert.ok(), but the error message is formatted as util.format(message...).      |

Process Events

The process object is an instance of EventEmitter and emits the following events −

| Sr.No. | Event & Description                                                                                                                                                                                                                                                  |
| ------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **exit**:Emitted when the process is about to exit. There is no way to prevent the exiting of the event loop at this point, and once all exit listeners have finished running, the process will exit.                                                          |
| 2      | **beforeExit**:This event is emitted when node empties its event loop and has nothing else to schedule. Normally, the node exits when there is no work scheduled, but a listener for 'beforeExit' can make asynchronous calls, and cause the node to continue. |
| 3      | **uncaughtException**:Emitted when an exception bubbles all the way back to the event loop. If a listener is added for this exception, the default action (which is to print a stack trace and exit) will not occur.:                                          |
| 4      | **Signal Events**:Emitted when the processes receives a signal such as SIGINT, SIGHUP, etc.                                                                                                                                                                    |

```javascript
process.on('uncaughtException',function(e) {
    console.log("errror has occured")
})
throw "demo"
```
