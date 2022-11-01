# React Introductory - S.A. (Starting Assignment)

<aside>
🐤 What are the characteristics of JavaScript - data type and JavaScript?

</aside>

- Explain what it means by:

  - loosely typed dynamic language

- **A dynamic scripting language**

  Dynamic scripting language here means that javascript has the ability to respond to an input from a user that comes from an event and is responded directly without going through the web server

- **Javascript is a cross-platform language**

  Javascript can be accessed in any browser and we can execute correctly as long as the browser supports javascript as well and can run the browser on the computer

- **Data type**

  The data types in JavaScript are similar to other programming languages such as Java or C#

- **loosely typed dynamic language**
  loosely typed dynamic language means that JavaScript is a dynamic and loosely typed language. JavaScript allows the user to not have specify the type of variable to be created, variables in JavaScript can allow any type of value, such as:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Example JavaScript Variables</h1>

    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
    <p id="p4"></p>
    <p id="p5"></p>

    <script>
      var variable = 1; // numeric value (this syntax will result "1")
      document.getElementById("p1").textContent = variable;

      variable = "one"; // string value (this syntax will result "one")
      document.getElementById("p2").textContent = variable;

      variable = 1.1; // decimal value (this syntax will result "1.1")
      document.getElementById("p3").textContent = variable;

      variable = true; // Boolean value (this syntax will result "true")
      document.getElementById("p4").textContent = variable;

      variable = null; // null value (this syntax will result "null value")
      document.getElementById("p5").textContent = variable;
    </script>
  </body>
</html>
```

    - JavaScript Type Casting

In JavaScript, typecasting means converting one data type to another data type by converting a string data type to a Boolean or converting an integer data type to a string data type. Typecasting in JavaScript is known as type conversion or type coercion, there are two types of casting in JavaScript, such as **Implicit type casting** and **explicit type casting**.

- **Implicit type casting** is a data type conversion performed due to internal requirements or automatic conversion by the compiler or interpreter.

- **Explicit type casting** is done forcibly by the developer in order for the lines of code to look good. In JavaScript type casting can be done only for strings, numbers and Boolean data types (objects).

  - ==, ===

  **==** in JavaScript is mean **equal to.** Example:

  ```jsx
  <!DOCTYPE html>
  <html>
  <body>

  <h1>JavaScript Comparison</h1>
  <h2>The == Operator</h2>

  <p>Assign 1 to x, and display the value of the comparison (x == 8):</p>

  <p id="demo"></p>

  <script>
  let x = 1;
  document.getElementById("demo").innerHTML = (x == 8);
  </script>

  </body>
  </html>
  ```

  **Result:**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0074c4a-245f-4702-a4a6-ee2a83c6c171/Untitled.png)
  The output will result false because the number 1 is not equal to 8
  It will be different when we type the number 8 on let x, it will produce the output true

  ```jsx
  <!DOCTYPE html>
  <html>
  <body>

  <h1>JavaScript Comparison</h1>
  <h2>The == Operator</h2>

  <p>Assign 1 to x, and display the value of the comparison (x == 8):</p>

  <p id="demo"></p>

  <script>
  let x = 8;
  document.getElementById("demo").innerHTML = (x == 8);
  </script>

  </body>
  </html>
  ```

  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ae36508-95f1-49cc-ad1d-056d99dc4dd5/Untitled.png)

  **===** in JavaScript is mean **equal value and equal type.** Example:

  ```jsx
  <!DOCTYPE html>
  <html>
  <body>

  <h1>JavaScript Comparison</h1>
  <h2>The === Operator</h2>

  <p>Assign 5 to x, and display the value of the comparison (x === 5):</p>

  <p id="demo"></p>

  <script>
  let x = 5;
  document.getElementById("demo").innerHTML = (x === 5); (this syntax will result "true")
  </script>

  </body>
  </html>
  ```

  **let x = 5 compared to (x === 5) has no difference in equal value and equal type so it will return a true value**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/81218758-81ee-46f6-b7f2-81b5ebea2d6b/Untitled.png)

  - Answer the following questions: - What is the **problem** of a loosely typed dynamic language, and what are the ways to **supplement** it?
    The problem with using loosely typed language is that it will produce unexpected or even incorrect output at run-time. Example, when an integer value is expected in the calculation but instead a string value is passed instead. The way to complete it is that we can prevent it by validating the data type before performing a specific operation.

        - Compare the difference between undefined and null.

  - **Null** is an object type that is a built-in type in javascript and does not contain any values
  - **Undefined** is generated when a variable is not given an initial value or when the void operator is used
    example:
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec0bc2d3-7acd-4231-8d20-3fa097dd0552/Untitled.png)
    \*Pict by [Difference between Null and Undefined in JavaScript (linuxhint.com)](https://linuxhint.com/difference-null-undefined/#:~:text=Another%20prominent%20difference%20is%20the%20data%20type%20of,difference%20between%20the%20types%20of%20these%20two%20values.)
    It signifies that null is an object whereas when we don't define it, then the output is undefined

<aside>
🐤 What is JavaScript object and Immutability?

</aside>

#### JavaScript Object

_An object in Javascript is defined as a mutable properties collection,
which means it is a set of properties (characteristics) that can change their value_.
Javascript objects consist of many properties. Each of these properties is used to describe the object.
Properties can be filled with values of type number, boolean, string, null, and object.
A property ideally is directly related and clearly describes the object.

#### Immutability

In JavaScript, _immutability is a data type whose value is fixed_.
Immutable data types are all data types that include primitive types (string, number, boolean, null, undefined, and symbol).

- Explain what it means by:

  - Primitive type data, and Reference type data.

  #### Primitive Type

**Primitive types** are the basic types of data such as (byte, short, int, long, float, double, boolean, char).
They are not objects, and do not have methods. When you declare a primitive data type in JavaScript, it is stored on a stack.

#### Reference Type

**Reference types** are any instantiable class as well as arrays such as (objects, functions, collections, arrays, dates, other types of object. Reference variables store addresses to locations in memory for where the data is stored.

- JavaScript Type Casting

_Type casting means conversion of one data type to another explicitly._
In JavaScript some of the most common methods to convert a datatype to either string using String(),
to boolean using Boolean(), or to number using Number().

- Answer the following questions:

  - How to make Immutable Object?

  Object immutability is an important concept in any programming language.
  It restricts object modifications and prevents unwanted changes.
  We can implement object immutability in JavaScript by using freeze() and seal() methods.

Example :

- **Object.freeze()** - _is used to freeze objects._
  So, if you want an object to be protected from changes, you can pass it to the freeze() method as follows. And it will return an immutable version of that object.

```js
var draftArticle = {
   name: “Object Immutability”,
   author: “Chameera Dulanga”,
   publication: “Bits and Pieces”,
   status: “In review”
};
var publishedArticle = Object.freeze(draftArticle);
```

- **Object.seal()** - only protects the objects against adding and removing properties. It allows updating existing properties.

```js
var article = {
   name: “Object Immutability”,
   author: “Chameera Dulanga”,
   publication: “Bits and Pieces”,
   status: “In review”
};
// Sealing the object
Object.seal(article);
```

- What are shallow copy and deep copy. What are the differences?

- What is Shallow copy?
  A bitwise copy of an object, where a new object is created and it has the same copy
  of the values in the original object, is called a Shallow copy. If any of the object
  fields refer to the other object then in such cases only the reference address is copied.

- What is Deep copy?
  When the process of copying occurs repetitively and a copy of the object is always
  copied in another object, then it is called deep copy. In this process, initially,
  a new collection of the object is constructed, and then the copies of the child object
  frequently populate those found in the original.

- Difference between Shallow copy and Deep copy

| Shallow Copy                                                                                               | Deep Copy                                                                                     |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| In Shallow copy, a copy of the original object is stored and only the reference address is finally copied. | In Deep copy, the copy of the original object and the repetitive copies both are stored.      |
| Shallow copy is faster than Deep copy.                                                                     | Deep copy is slower than Shallow copy.                                                        |
| The changes made in the copied object also reflect the original object.                                    | There is no reflection on the original object when the changes are made in the copied object. |
| It stores references of the object in the main memory.                                                     | It stores copies of the object values.                                                        |

<aside>
🐤 Hoisting and TDZ

</aside>

- Explain what it means by:
  - Scope, Hoisting and TDZ

# Scope

Scope is related to declaring a variable. There are 3 type of scope in JavaScript.

## Block Scope

Use {} (Braces) any variable declared inside the braces will be available inside the block. Use let, const.

```js
{
  let jml_ayam = 2;
}
// jml_ayam can NOT be used here
```

## local Scope

function scope is also called as local scope. It is only available inside the function. Use var, let, const.

```js
// code here can NOT use ayam

function myFunction() {
  let ayam = "Goreng";
  // code here CAN use ayam
}


// code here can NOT use ayam
```

## Global Scope

variable that applied anywhere. Use var, let, const.

```js
let ayam = "goreng";
// code here can use ayam

function myFunction() {
// code here can also use ayam
}
```

#

# Hoisting

a feature to still run a code line even though some variable are still undefined as long as you define it somewhere.

```js
console.log(makanan); //undefined
var makanan = 'ayam';
```

for example the code above will still show a result "undefined"

Hoisting feature act differently depend on how you declare your variables.
For example with var.
it will always give "undefined" value when you declare it somwhere.

```js
console.log(ayam); // undefined

var ayam = 'goreng';

# console.log(ayam); // "goreng"

# In different situation where you separed declaration of variable and assign the variable value.

var makanan;

console.log(makanan); // undefined

makanan = 'ayam';

# console.log(makanan); // "ayam"

# In case you never declare the variable.

# console.log(makanan); // Uncaught ReferenceError: makanan is not defined
```

Example with let and const.
it will give ReferenceError even though you declare it later.

```js
console.log(makanan); // Uncaught ReferenceError: Cannot access 'makanan' before initialization

# let makanan = 'ayam'; // Same behavior for variables declared with const
```

#

# Temporal Dead Zone

a zone where it will return ReferenceError for const and let.
It starts from the beginning of the variable scope to when the variable is declared

```js
{
// Start of bebek's TDZ
let ayam = 'ayam';
console.log(ayam); // "ayam" No problem at all for ayam.

console.log(bebek); // ReferenceError because we're in the TDZ

let bebek = 'bebek'; // End of foo's TDZ
}
```

Not only from top to bottom, it also applied on left to right.

```js
function ayamgoreng(ayam = goreng, goreng = 'goreng') {
console.log(ayam);
}
ayamgoreng(); // Uncaught ReferenceError: Cannot access 'goreng' before initialization.


// variable goreng is declared later after when it is already called when we tried to define variable ayam.
```

#

- Different ways of hoisting in Function Declarations and Function Expressions.

Function Hoisting
=> like you lift the function declaration to the top.

```js
theFunction(); // "work" this function is still working because the declaration is hoisted.

function theFunction() {
console.log('work');
}
```

# No hoising, still giving the same result

```js
function theFunction() {
console.log('work');
}

# theFunction(); // "work" not hoisting but still working.

# As we know there are declaration of variable and assign a value. When we assign a variable with function, it is called as Function expressions.

let theFunction = function() {
alert( "Masak air, biar mateng" );
};

```

# Hoistings works for function declaration. But not for function expressions.

```js
with_var(); // Uncaught TypeError: with_var is not a function. With_var is still undefined at this point.
var with_var = function () {
console.log("doesn't work");
}

with_let(); // Uncaught ReferenceError: Cannot access 'with_let' before initialization/declaration.
let with_let = function () {
console.log("doesn't work");
}

with_const(); // Uncaught ReferenceError: Cannot access 'with_const' before initialization/declaration
const with_const = function () {
console.log("doesn't work");
}

# function_without_any_declaration(); //Uncaught ReferenceError: function_without_any_declaration is not defined
```

#

- Execution Context and Call Stack

Execution context and call stack

A. Execution context
Just imagine that Execution context is a box where you store the information that will be called later. To have better understanding about this box, first we must learn about how the javascript run the code.

There are several process for running the code

1. Creation Phase / Memory allocation phase
   The code will collect all variable, check the scope of each variable and then collect this keyword. (this is a complex thing but in simple term, it is like an object.). This process will trying to connect the variable in function. Until all of it is defined or sent an error feedback. In this process, Javascript haven't assign any value to the variable.

All of these creation phase will be stored in execution context. Execution context is like a box where you store the information that will be called later.

2. Execution Phase / Code execution phase
   In this phase, after the code is connected, it will run the mathematical logic and calculating the value of the variable. Showing text or storing data to database depend on what is written in the code.

#

B. Call Stack
If execution context is like a box. Imagine that Call stack is a room or a bigger box. You will put the execution context inside that bigger box. You will stack it, first one will go to the bottom and will be removed last. The execution context on the top will be placed last and it is also will be removed first. With this way, Javascript will make sure everything run normally when it need more than 2 or more function to run a code.

Whatever you put inside this room/bigger box will be executed. Then later removed from the memory. After it is done with everything, Javascript will remove global execution.

For detailed step

1. Javascript run the code... it will put global execution context to the call stack. Now global execution context is in the most bottom/lowest place.
2. Whenever a function is executed, we will put it on the call stack.
3. If it call another function, we will put another execution context on the stack.
4. each function has its own execution context.
5. Until we end up with "return", then we will remove the function on the top. It will goes back to previous execution context.
6. This process will repeat until we remove the most bottom execution context which is global execution context.

```js
const ayam = "ayam" // This is global, will be in global execution context.

function first_function(){ // This function will have its own execution context.
let a = 1;
b = second_function(); // Inside first_function execution context, we will stack another execution context (which is second_function)
c = a + b;
return c;
}

function second_function(){ // second_function will be placed on top and removed first.
var d = 2;
return d;
}
```

#

Call Stack illustration
![ilustrasi call stack](https://user-images.githubusercontent.com/116085209/197250465-cc992135-cb32-4443-9ca5-c35e6cb67f2a.png)

- Scope Chain and Information Hiding

Scope chain.
As we learned before, in creation phase/memory allocation phase, we will collect all variable and find the connection between each variables. From past example, variable d has its own scope but first_function() still has the access to it. The value is still undefined until the execution process.

Information hiding
variable declared inside a function will has a limited scope.
Some review from past.

```js
// code here can NOT use ayam

function myFunction() {
let ayam = "Goreng";
// code here CAN use ayam
}

# // code here can NOT use ayam

variable ayam is hidden inside the myFunction().

# There is a way to make it available outside the function with "this"
```

```js
function Rectangle() // capitalized name convention
{
// private stuff
var height;
var width;

    // public stuff
    this.getArea = function(){
        return height*width;
    };

    this.setWidth = function(w){ // This function allow you to modify the height or private stuff outside the function.
        width = w;
    };

    this.setHeight = function(h){ // This function allow you to modify the height or private stuff outside the function.
        height = h;
    };

    this.shapeType = 'rectangle';

}

var rect = new Rectangle(); // use new keyword
rect.setWidth(4);
rect.setHeight(3);
alert(rect.getArea()); // alerts 12
alert(rect.shapeType); // alerts 'rectangle'
alert(rect.height); // alerts 'undefined'

var rect2 = new Rectangle();
rect2.setWidth(10);
rect2.setHeight(2);
alert(rect2.getArea()); // alerts 20
alert(rect2.shapeType); // alerts 'rectangle'
alert(rect2.height); // alerts 'undefined'

```

<aside>
🐤 Let’s do some Exercise:

</aside>

- What would be the “b” value printed on the console?
  Variable “b” will be printed as 1 in console.log as it was assigned.
  There are 3 console lines that print “b”.

- Which “b” value would be printed from which line of console.log? Explain why.
- ![varland 0](https://user-images.githubusercontent.com/116085209/197250806-52ce0e51-b91f-4284-ac21-0e6ffdfa472d.png)

  based on my text editor, it was : line 10, line 7, and line 13
  line 10 : printed as 1 because the variable “b” is assigned as 1
  line 7 : printed as 101 because there is an incrementation (b++) in the function hi(), and it’s going to adding 1 to the variable b when the function is called
  line 13 : printed as 1 because the variable “b” was declared as 1 before the hi() function was created.

- What would be `//console.log(a);` in the comment? If there’s an error, explain why and fix the error.
  What would be the “b” value printed on the console?
  
![varland 1](https://user-images.githubusercontent.com/116085209/197250783-996b77a2-cd36-43a8-86dc-c4c42e28886e.png)

Error from const a
For the error part, “a” is a constant with a value is 1, which is defined and declare in the hi() function, so the constant “a” has a limited scope in the hi() function. That’s why the console give an alert ‘a is not defined’.

The way to fix this easily is turn const a into global scope variable by replace it to outside of the hi() function and const a is already global scope variable then you can access it from anywhere.
![varland 2](https://user-images.githubusercontent.com/116085209/197250726-faffb4b1-94dd-44a4-8d78-800f15aca927.png)
