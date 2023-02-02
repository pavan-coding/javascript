# Concepts

* map
* set
* weak map
* weak set

# JavaScript Maps

A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.

## Map Methods

| Method    | Description                                                     | syntax                                                           |
| --------- | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| new Map() | Creates a new Map object                                        | const fruits = new Map([<br />[key,value],<br />[key,value],..]) |
| set()     | Sets the value for a key in a Map                               | map.set(key,value)                                               |
| get()     | Gets the value for a key in a Map                               | map.get(key)                                                     |
| clear()   | Removes all the elements from a Map                             | map.clear()                                                      |
| delete()  | Removes a Map element specified by a key                        | map.delete(key)                                                  |
| has()     | Returns true if a key exists in a Map                           | map.has(key )                                                    |
| forEach() | Invokes a callback for each key/value pair in a Map             | map.forEach(function(key,value){<br />})                         |
| entries() | Returns an iterator object with the [key, value] pairs in a Map | map.entries()                                                    |
| keys()    | Returns an iterator object with the keys in a Map               | map.keys()                                                       |
| values()  | Returns an iterator object of the values in a Map               | map.values()                                                     |

| Property | Description                        | syntax   |
| -------- | ---------------------------------- | -------- |
| size     | Returns the number of Map elements | obj.size |



# JavaScript Sets

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.


## Set Methods

| Method    | Description                                                 | syntax                                                                                    |
| --------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| new Set() | Creates a new Set                                           | **const** letters = **new** Set([**"a"**,**"b"**,**"c"**]); |
| add()     | Adds a new element to the Set                               | set.add(value)                                                                            |
| delete()  | Removes an element from a Set                               | set.delete(value)                                                                         |
| has()     | Returns true if a value exists                              | set.has(value)                                                                            |
| clear()   | Removes all elements from a Set                             | set.clear()                                                                               |
| forEach() | Invokes a callback for each element                         | set.forEach(function(value){} )                                                           |
| values()  | Returns an Iterator with all the values in a Set            | set.values()                                                                              |
| keys()    | Same as values()                                            | set.keys()                                                                                |
| entries() | Returns an Iterator with the [value,value] pairs from a Set | set.entries()                                                                             |

| Property | Description                          | syntax   |
| -------- | ------------------------------------ | -------- |
| size     | Returns the number elements in a Set | set.size |

Weak map:

weak map is same as map but the only difference is the keys must be the objects.

`WeakMap` does not support iteration and methods `keys()`, `values()`, `entries()`, so there’s no way to get all keys or values from it.

`WeakMap` has only the following methods:

* [`weakMap.set(key, value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set)
* [`weakMap.get(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get)
* [`weakMap.delete(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete)
* [`weakMap.has(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has)

WeakSet:

weakset is same as set but the only difference is the value must be the objects.

[`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) behaves similarly:

* It is analogous to `Set`, but we may only add objects to `WeakSet` (not primitives).
* An object exists in the set while it is reachable from somewhere else.
* Like `Set`, it supports [`add`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Weakset/add), [`has`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Weakset/has) and [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Weakset/delete), but not `size`, `keys()` and no iterations.

Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in `WeakSet` may mean something about the object.

The most notable limitation of `WeakMap` and `WeakSet` is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent `WeakMap/WeakSet` from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.
