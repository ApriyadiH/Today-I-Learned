# Team 1

<aside>
🔐 What’s the difference between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

Array is a list that each item is stored in index start at 0 in the order of their entry. Array-like object is a object but instead the data is stored in key value format, it will stored in index that should start at 0 like Array did and also should have length property that return non-negative integer.

We can access each element using “ [index] “. 

example :

const arr_like = {0: ‘I’, 1: ‘am’, 2: ‘array-like’, length: 3};

arr_like[0] = ‘new value‘. so value in index 0 change from ‘I’ to ‘new value’

or we want to add data to arr_like, we can’t just use arr_like.push method, we can use push like this Array.prototype.push.call(arr_like, 'add value');

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

So basically, The Diagram below is suppossed to describe how the flow will going. First we initialize the state by creating a function named changeName() then we called the state useState with the current state (”Sparta”). After that we read the state by creating a paragraph with the current state inside. Finally, we update the state using button that called the hook using onclick function.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59387286-adbe-48b0-9f5c-2bd02a78dc9e/Untitled.png)

<aside>
💡  pargWhat is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

two way binding refers to sharing data between a component class and its template. If you change data in one place, it will relate at the other end. Example we have parent component A and child component B. if we change the value of child component B. then it will also update on  the attached property in parent component A.

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

Using Hooks Effect useEffect(), the use of hooks effects is almost the same as the lifecycle method in the component class. useEffect will accept two parameters namely callback and array

useEffect(()⇒{

    //do something

return ()⇒{

 // do something clean up (remove event listener)

}

},[])

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassNam`

</aside>

ref is used whenever we want to access DOM or react element that created inside a render method. ref is usually used when we meet some event such managing focus, text selection, or media playback. We use ref for triggering animation and intergrating with thir-party DOM libraries. But ref can’t be used without certain case, if we find something that can be done declaratively avoid using refs. It’s not recommended to overuse the refs, we must thinking critically before decide to use that.

<aside>
🔐 Explain SPA and MPA.

</aside>

- SPA (Single Page Application)

SPA stand for Single Page Application, just like the name it means an application that run on single page this been used for modern application nowadays such Twitter, Facebook, Youtube, etc. SPA is faster than MPA in terms of loading the application. SPA is decoupled which means that the FE part and the BE part is separate from each other. SPA making life easier with reusable BE, but everything is having a pros and cons the cons of SPA is that SPA is not safe because security is not necesary needed, also because the SPA using Javascript it sometimes feel problematic.

- MPA (Multi Page Application)
    
    MPA is the opposite of SPA, this application is using multiple page. MPA is commonly used for large company that must have some page separate such as e-commerce, MPA also need to be reload in case to open another page this is very obvious because in SPA we just using one page only so reloading is not necessary. So in terms of speed MPA is slower than SPA because it’s need to be reload to open another page, but for MPA the FE and BE is housed in one project, but in MPA we need to secure each page so it’s more safer than SPA. 
    

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

Maybe the bucket doesn’t have same name as the domain or subdomain name. For example, if you want to use the subdomain acme.example.com, the name of the bucket must be acme.example.com. Or it doesn’t set the permissions for website access. if we want our website to be public, we need to grant public read access and make the bucket readable  by disabling block public access.

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. `const` is an immutable constant, how can I change its `value` using setState

A1. we can change const using setState, it will return the updated value, but it actually not the same const but that is a new const .

Q2.  What’s the difference between a function component and a class component?

A2.

**[Functional Components:](https://www.geeksforgeeks.org/reactjs-functional-components/)**  are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.

**Syntax:**

```
const Car=()=> {
  return <h2>Hi, I am also a Car!</h2>;
}
```

**[Class Component:](https://www.geeksforgeeks.org/reactjs-class-based-components/)** This is the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application).

**Syntax:**

```
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

| Functional Components      |  Class Components |
| --- | --- |
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | A class component requires you to extend from React. Component and create a render function which returns a React element. |
| There is no render method used in functional components. | It must have the render() method returning JSX (which is syntactically similar to HTML) |
| Functional component run from top to bottom and once the function is returned it cant be kept alive. | Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component. |
| Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
| React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |
| Hooks can be easily used in functional components to make them Stateful.
example: const [name,SetName]= React.useState(‘ ‘) | It requires different syntax inside a class component to implement hooks.
example: constructor(props) {
   super(props);
   this.state = {name: ‘ ‘}
} |
| Constructors are not used. | Constructor are used as it needs to store state. |

Q3. What is Props Drilling ?
A3. Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc95ba4a-609a-4d8b-8eb6-4a2f861ee060/Untitled.png)

The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.

# Team 2

<aside>
🔐 What’s the difference between an array and an array-like object in javascript?
How can you change each element in an array-like object?

</aside>

**************Answer:**************

**The difference between array and array-like object.**

An array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. arrays are resizable and can contain a mix of different data types. In JavaScript, arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes. arrays are zero-indexed, the first element of an array is at index 0, the second is at index 1, and so on and the last element is at the value of the array's length property minus 1.

An array-like-object is a JavaScript object that meets the following conditions:

- At least some of its keys are set to non-negative integers.
- It has a length property.

The keys should start at zero and increment sequentially like the indexes of an array, and the length property should be equal to the number of numbered keys.

********************************************************************How to Change each element in an array-like object********************************************************************

```jsx
// Array-like object
const arr = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jane'
    },
    {
        id: 3,
        name: 'Jack'
    },
    {
        id: 4,
        name: 'Jill'
    }
]

// Print the array
console.log(arr)
/*
Output:
[
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' }
]
*/

// find and replace the object with id some id (example id=3)
const index = arr.findIndex(item => item.id === 3)
arr[index] = {
    id: 3,
    name: 'Jackie'
}
console.log(arr);
/*
Output:
[
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jackie' },
    { id: 4, name: 'Jill' }
]
*/

// Change each element in the array
arr.forEach((item, index) => {
    item.name = 'John Doe'
})
console.log(arr)
/*
Output:
[
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'John Doe' },
    { id: 4, name: 'John Doe' }
]
*/
```

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

************Answer:************

```jsx
import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
					props.setName("LearningX");
        }}
      >
        Rename Parent
      </button>
      <div>{props.parentName}</div>
    </div>
  );
}

function Parent2(props) {
  return (
    <Child parentName={props.parentName} setName={props.setName} />
  );
}

function Parent() {
  const [name, setName] = useState("Sparta");
  return <Parent2 parentName={name} setName={setName} />;
}

function App() {
  return <Parent />;
}

export default App;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4328007-d514-477e-8260-47ff260dd06a/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5e5f001-0669-4cbb-abdc-638e8b301a7b/Untitled.png)

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

**************Answer:**************

Two-way binding is a method of connecting the model with the view. For example, if we change our model, the views connected to the model will also change. Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s) and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model. When app data changes, so do the UI, and conversely. for example, we have a parent component a and component b as a child. if we change the value of child b then component a will also change.

<aside>
🔐 Event listener should be removed when it’s called out.
When the component is disappeared(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

**************Answer:**************

Any registered event should be cleaned up when not needed anymore. There are several reasons for that. First, events can easily cause memory leaks if the browser is not handled it properly. Modern browsers will garbage collect event handlers of removed DOM elements but it is not true in cases of legacy browses like IE which will create memory leaks. Second, it is also simple to create incorrect code with events. On React JS we can use componentWillUnmount method to clean the event but when we cant use the lifecycle method we can use the alternative method which is removeEventListener method.

<aside>
🔐 We usually use `ref` to approach DOM in react. Why do we use `ref` instead of `document.getElementsByClassName`?

</aside>

**************Answer:**************

Because in general, refs is better than document.getElementByClassName, because it is more in line with the rest of your react code. In react, every component class can have multiple component instances. In react, every component class can have multiple component instances, another advantage to using refs is that by design, you can only access the refs in the context where you define them. This forces you to use props and state (and possibly stores) if you need to access info outside of this context and this is an advantage because there is less/ no chance of you breaking your unidirectional data flow, which would make your code less manageable.

<aside>
🔐 Explain SPA and MPA.

</aside>

**************Answer:**************

- Single Page Application (SPA) is a term for a web-based application, which uses only one web page as the display of the application. All clicks or data presentations will not reload the whole page, but only a few are updated from the server or from the results of the application process on the client side. As a result of using this technology, the web that is made becomes lighter and faster when used.
- A Multi-page Application (MPA) is a web application consisting of a large number of pages completely refreshed every time when data changes on them. Any data change or data transfer to the server leads to a new page displayed in the browser. Its a completely opposite of single page application which has just one page and update the data dynamically without changing the page.

<aside>
🔐 Why there’s an error when you move to a page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to the s3 bucket?

</aside>

**************Answer:**************

When you try to access your project on s3 bucket with URL public, and then you got the error message that is showing “**Access Denied**”, so there are these following reasons why:

- Objects in the bucket must be publicly accessible.
- S3 bucket policy must allow access to the s3:GetObject action.
- The AWS account that owns the bucket must also own the object.
- Objects can't be encrypted by AWS Key Management Service (AWS KMS).
- Objects that are requested must exist in the S3 bucket.
- Amazon S3 Block Public Access must be disabled on the bucket and account levels.
- Checking “Block All Public Access”

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. How to create state?

A1. **When creating a state, use useState().**

**Look at the code below.**

In the GrandFather component, the existing `const name = “Thomas ”` code is `const [name, setName] = useState("Halah Kim");` It has been changed to an unfamiliar code.

```jsx
import React, { useState } from 'react';

function GrandFather() {
  const [name, setName] = useState("Thomas"); // This is state!
  return <Mother grandFatherName={name} />;
}

// .. omitted
```

We will create a state using a function called `useState` from now on. `useState` is a feature provided by React that creates a state. So, it is a concept and function that exists only in React. And from now on, we will refer to this as a “`hook`” rather than a “`feature`”.

**This is how to use a useState hook.** 

```jsx
const [ value, setValue ] = useState( initial value 
```

First, declare as `const` and create an `empty array [ ],` put the name of this state in the first place of the array, and put `set`and give the name of the state in the second place. Thus, put the `desired initial value` of this state in the argument of `useState( )`.

```jsx
const [name, setName] = useState("Thomas");
```

We created a state called `name`, and set the initial value of the name state to “Thomas”. How is it? We call the initial value the `initial state.` Like the definition of state, the concept of an `initial value`exists because it is a value that can change at any time.

Q2. What is a primitive data type?

A2. ********Definition********

**Primitive data type:** The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

There are five types of primitive data types in Javascript:

- **Number:** Number data type in javascript can be used to hold decimal values as well as values without decimals.
    
    ```jsx
    let x = 250;
    let y = 40.5;
    console.log("Value of x=" + x); //250
    console.log("Value of y=" + y); //40.5
    ```
    
- **String:** The string data type in javascript represents a sequence of characters that are surrounded by single or double quotes.
    
    ```jsx
    let str = 'Hello All';
    let str1 = "Welcome to my new house";
    console.log("Value of str=" + str); //Hello All
    console.log("Value of str1=" + str1); //Welcome to my new house
    ```
    
- **Undefined:** The meaning of undefined is ‘value is not assigned’.
    
    ```jsx
    console.log("Value of x=" + x); //Undefined
    ```
    
- **Boolean:** The boolean data type can accept only two values i.e. true and false.
    
    ```jsx
    console.log("value of bool=" + bool); //True
    ```
    
- **Null:** This data type can hold only one possible value that is null.
    
    ```jsx
    let x = null;
    console.log("Value of x=" + x); //null
    ```
    

Q3. What is the map method?
A3. The map is **a collection of elements where each element is stored as a Key, value pair**
. Map objects can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key, and value pair in the same order as inserted.

# Team 3

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

1. Array things ✨

a) basically array is a collection of data, it could be a number, string, or anything else. for example : **`var`** `myArr = [1, 2, 3, 4, 5];`

b) if the array is a collection of data, so the array of the object is? YES, the array of objects, so it fills with a collection of objects. for example :
**`var`** `myObject = {jhon: {name: 'jhon',age: 12,gender: 'male'},`

`rita: {name: 'rita',age: 32,gender: 'male'}};`

c) can u change the element in an array-like object? Absolutely!! The map() method can be used to loop across an object array of objects to update an object’s property. Determine if the current object is the one that has to be modified on each iteration. If so, change the item and send back the modified version; if not, send back the original object. Example :const arr1 = [{id: 1, name: ‘Alice’},{id: 1, name: ‘Bob’},{id: 3, name: ‘Charlie’},];const newArr = arr1.map(obj => {if (obj.id === 1) {return {…obj, name: ‘Alfred’};}

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

Changing the child??First things first

We’re gonna create a component with a name attribute in state. This component will render that name first.

```
class Bootcamp extends React.Component {
 state = {
 name: “Sparta”
 };
 };
 render() {
 return <div>{this.state.name}</div>;
 }
}
```

Now let’s create a function changeName() in the Bootcamp component. This function will change the name in state to the actual name of the Bootcamp.

```
class Bootcamp extends React.Component {state = {name: "Sparta"};changeName = () => {this.setState({name: "Learning X"});};render() {return <div>{this.state.name}</div>;}}
```

After that create the App component which will render this Bootcamp component and a button. When we click the button it gonna changes the state. We have added a function handleClick() which will get called when the user clicks the button. We need to figure out a way to update the state of the child component, that is the Bootcamp component.

We have created a function changeName() in the Bootcamp component. This function will show the next change of Bootcamp. If we can call this function from the App component, our work is done. So we will call this function. And then we can refs, let’s create a ref of the Bootcamp component in the App component using React.createRef() method and attached the ref to the Bootcamp component using the ref attribute.

Now we will be able to refer the Bootcamp node using this.bootcampELement.current. We will also be able to call the changeName() function in the Bootcamp component using this.bootcampElement.current.changeName().

Let’s update our handleClick() function in our App component to call the changeName() function.

and then voila,

```
const Bootcamp= forwardRef((_, ref) => {const [bootcamp, setBootcamp] = useState("Sparta");const changeName = () => {setBootcamp("LearningX");};useImperativeHandle(ref, () => ({changeName: changeName}));return <div>{bootcamp}</div>;});const FunctionApp = () => {const bootcampElement= useRef();const handleClick = () => {bootcampElement.current.changeName();};return (<div className="App"><Bootcamp ref={bootcampElement} /><button onClick={handleClick}>Change!</button></div>);};
```

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

Using props and state, we may bind data in React from one component to another. As a result, React components can exchange information and instantly update when the data changes. For example: state gets updated, the value is pushed to the history

![https://miro.medium.com/proxy/0*JA55Ht33B1jhcYZg.jpeg](https://miro.medium.com/proxy/0*JA55Ht33B1jhcYZg.jpeg)

and then when a history entry is selected, this entry is written back to the state.

![https://miro.medium.com/max/700/0*Y_N6tBR7iI7bJh9I.jpeg](https://miro.medium.com/max/700/0*Y_N6tBR7iI7bJh9I.jpeg)

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

Add the event listener in the useEffect hook and then return a function from the useEffect hook.After that, when the component unmounts, use the removeEventListener function to remove the event listener.

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassName`?

</aside>

because there’s a lot of class name, afraid that will call the wrong class. if using ref it would be specified. The fact that I can only access refs by design in the context where specify them is another benefit of utilizing refs. Therefore, if need to access information outside of this context, must use props, state, and possibly storage.

And this is good because it reduces or eliminates the possibility that would break your unidirectional data flow, which would make code more difficult to manage.

<aside>
🔐 Explain SPA and MPA.

</aside>

**SPA**
Basically, the shortcomings of MPA have been overcome by the existence of SPA. Various other benefits are the application of the MVC method into the UI design interface process, so that project maintenance becomes better and structured. Save resources so that the interconnection load on the user can be reduced, fully responsive and Mobile view oriented that can be applied easily.

The drawback of the SPA method is the difficulty of SEO optimization. So most SPA methods are applied in applications that require intra-only access. This problem can be solved by using Nuxt.js, which we will discuss in a future article. SPA is also very dependent on the browser used by the client, so the optimization of the use of this method depends on the type and version of the browser.

**MPA**

Arguing about which of these two types of approaches is good and bad, will be endless, unfortunately. This is what is happening out there. In my opinion, determining which approach to use is wiser than being strict with just one kind of approach. To see which one fits the application needs, it is necessary to look at the advantages and disadvantages of these 2 types of implementation.

MPA / traditional web approach , is more profitable on the side of Search Engine Optimization . This is because on each page, all elements or sections are updated and adjusted based on what is viewed and the content and content of the page. Another advantage of this method is that the development process tends to be faster but not necessarily organized. In addition, MPA has a good dependency advantage, where MPA does not depend on the client browser in the process of providing content because almost all page content is generated from the server side to be provided to the client.

However, MPA has several weaknesses that have serious implications in many ways. The highlight is the unstoppable management of Resources. Websites will tend to be slower, not optimal in long-term website development, and lack of efficiency in UI/UX interface maintenance.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

S3 static website endpoint supports only publicly accessible content. To verify whether an object in your S3 bucket is publicly accessible, open the object's URL in a web browser. Or, you can run a cURL command on the URL.

The following is an example URL of an S3 object:

http://doc-example-bucket.s3-website-us-east-1.amazonaws.com/index.html

If an Access Denied error is returned by the web browser or cURL command, then the object isn't publicly accessible.

</aside>

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. What is the difference between yarn and npm?

A1.  NPM stands for **Node Package Manager** It is a Javascript package manager and the default for the runtime environment NodeJS. NPM is installed when NodeJS is installed on a machine. It comes with a command line interface (CLI) which is used to interact with the online database of NPM. **This database is called the NPM Registry** and it hosts public and private 'packages'. To add or update packages, we use the NPM CLI to interact with this database.

Q2. What is the Map method and the difference of Map method beside other iteration method in Javascript?. Give example of Map methods too !

A2. Map() is a method to iterates across an array and applies a callback on each element, returning the resulting elements in a *new* array.

- reduce(): metod to *reducing a vector to a scalar (a list of values, to a single one). This can be summing all values in an array, finding the average, minimum or maximum, or in any other way reducing a longer set of data to a smaller one (stem). Map() method not stem the set of data
- *filter()*: Filter out items from a list with iteration that meets specification/condition. Map method iterate all items in array
- forEach(): The main distinction between these two methods is that the map() function returns *a new array, whilst the forEach() method does not - it alters the original array.
    
    Example : calculating square root of every value in array
    
    const numbers = [9, 36, 64, 144];
    let squareRoots = numbers.map((number) => {
    return Math.sqrt(number);
    });
    console.log(squareRoots); // Output :  [3,6,8,12]
    

Q3. What is a default argument?
A3. In computer programming, a default argument is an argument to a function that a programmer is not required to specify. In most programming languages, functions may take one or more arguments. Usually, each argument must be specified in full (this is the case in the C programming language[1]). Later languages (for example, in C++) allow the programmer to specify default arguments that always have a value, even if one is not specified when calling the function.

**Point to remember for default argument**
With regrds to the default argument, the following points must  be kept in mind.

a. there is a difference between default argument and constant argument. This is because change cannot take place in the constant arguments while overwriting of default argument is possible.

b. The overwriting of arguments take place when the calling function provides values for them. For example, calling of function sum(10, 15, 25, 30) facilitates overwriting of the value of z and w to 25 and 30 respectively.

c. Once the use of default value takes place for an argument in the function definition, all subsequent arguments to it must have a default value. Furthermore, one can also state it as the assignment of default arguments takes place from right to left.

# Team 4

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

Arrays store data in ordered collections where data can be accessed using numeric indexes. arrays are the best to use when working with the same variable or value type. whereas An array-like object is an object, which you can iterate over using a loop index and a regular number. if you are working with information about multiple real world elements with varying properties, Array-like objects is best to use.

There are the ways to change each element in an array-like object :

1. using spread operator 

(Example: [...array_like_obj])

2. Using Array.from() method 

(Example: Array.from(array_like_obj))

3. Using for...of loop 

(Example: for(var i of array_like_obj) //this is just used to iterate to each elements not directly convert to array)

4. Using Object.values() method 

(Example: Object.values(array_like_obj))

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

Alright, the lifecycle of how the values is shown on the screen when component A’s state is changed to B’s component state { name: “LearningX”}. So, if we can imagine that the flow would be when we open the page, it shows B’s component like {name: “LearningX”}, which actually the parent component is A’s component {name: “Sparta”}, but it has changed immediately. 

First thing first, we can start with using “useState” to help us to create a state function for A’s component as a parent and B’s component as a child, then set a name value to each of the component.

After that, we can create a button to help us more easier to see the change in specifically when A’s component and B’s component are getting trigger to change the value to be changed and displayed on the screen.

Last but not least, the most important thing we have to pay attention is to add a “return”, so that the state feature can run smootly !

Notes : useState is a feature provided by React

Here’s the code structure in the code snippet below :

 

```jsx
import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
					props.setName("LearningX"); // to change a Value of A's Component to B's Component
        }}
      >
        Change!
      </button>
      <div>{props.grandFatherName}</div>
    </div>
  );
}

function Mother(props) {
  return (
    <Child grandFatherName={props.grandFatherName} setName={props.setName} /> //Component B
  );
}

function GrandFather() {
  const [name, setName] = useState("Sparta"); // Component A
  return <Mother grandFatherName={name} setName={setName} />; 
}

function App() {
  return <GrandFather />;
}

export default App;
```

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s), and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model. When app data changes, so does the UI, and conversely.
Its just means that when properties in the model get updated, so does the UI and when UI elements get updated, the changes get propagated back to the model. React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically. for example, when we make changes to parent component A, those changes will appear in child component B

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

To remove event listener in functional component, so we can’t use the lifecycle method. First thing first, we can add the event listener in the useEffect() hook, after that we can return a function from the useEffect() hook. Then, when the component unmounts, use the **`removeEventListener`** method to remove the event listener in the component function to remove the event listener. 

So, the code structure might be like in the code snippet below :

```jsx
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect starts")
    window.addEventListener('click', myFunction)
		return () => window.removeEventListener('click', myFunction)
  }, [state])

  const myFunction = () => {
    setState(state + 1);
    console.log(state)
  }
  return (
    <div className="App">
      <h1>A component</h1>
			Num : {state}
    </div>
  )
}

export default App;
```

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `document.getElementsByClassName`?

</aside>

At the most basic level, a ref is an object with a “current” property that does not reset with re-renders. On the DOM level, a ref is an attribute on an element that allows you to refer to that particular element at a point in the typical lifecycle. For our purposes, refs are React's equivalent to the vanillaJS “document.getElementsByClassName”. We use refs because of React, JSX, and the lifecycle pipeline. When people refer to the React ecosystem, these are parts of that ecosystem. Refs make working within that ecosystem a little more smooth. In React, you typically interact with elements when there is a data change, which causes our typical lifecycle events like mounting and unmounting. “document.getElementsByClassName” happens outside of that lifecycle, making what it returns unreliable, while refs happen within it.

<aside>
🔐 Explain SPA and MPA.

</aside>

A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The SPA only sends what user need with each click, and browser renders that information. This is different than a traditional page load where the server rerenders a full page with every click user make and sends it to browser. This piece-by-piece, client-side method makes load times much faster for users. It also lessens the amount of information a server has to send and makes the whole process a lot more cost-efficient — a win-win scenario for users and businesses.

A Multi-page Application is a web application consisting of a large number of pages completely refreshed every time when data changes on them. Any data change or data transfer to the server leads to a new page displayed in the browser. Multi-page Application is considered a more classical approach to app development. The multi-page design pattern requires a page reload every time the content changes. It’s a preferred option for large companies with extensive product portfolios, such as e-commerce businesses.Single-page applications have already taken their place on the web development market. An SPA is great for projects that value speed, the user experience, and a short time to market. As the name suggests, a multi-page application (MPA) is an app that has more than one page. It works in a traditional way, requiring the app to reload entirely every time a user interacts with it.

Single-page applications have already taken their place on the web development market. An SPA is great for projects that value speed, the user experience, and a short time to market. As the name suggests, a multi-page application (MPA) is an app that has more than one page. It works in a traditional way, requiring the app to reload entirely every time a user interacts with it.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?.

</aside>

S3 static website endpoint supports only publicly accessible content. To verify whether an object in your S3 bucket is publicly accessible, open the object's URL in a web browser. Or, you can run a cURL command on the URL.

The following is an example URL of an S3 object:

http://doc-example-bucket.s3-website-us-east-1.amazonaws.com/index.html

If an Access Denied error is returned by the web browser or cURL command, then the object isn't publicly accessible.

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. What is ‘React’?

A1. React is a declarative, efficient and flexible JavaScript library for building user interfaces. React helps construct complex UIs using small, isolated fragments of code called “components”. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.

Q2.What is Props?

A2. Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function. props are data received from the parent component, We use props to exchange information between components. 

Q3.Describe how to use State !
A3. State means a value that can be changed inside a component. A state is a JavaScript object that stores the dynamic data of a component and allows it to follow changes between renderings. It's a combination of all those different states. For instance, if the user is not authenticated, is the modal open. When creating a state, use useState(). This is how to use a useState hook: **const [ value, setValue ] = useState( initial value )**

# Team 5

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

The different between array and array-like object in JS can be seen below:

- When the type of the elements are number, we can use array. But, if the elements have string type, we can use array-like object.
- The data inside an array is known as Elements. But the data inside array-like object are known as properties which is consist a key and a value.
- Both of iterating in array and array-like object is possible to use For..in, For..of, and ForEach(). But, we can use For loop in array, not in array-like object.Write down your answer.

> For example
> 

```jsx
// Array of objects
        var myObject = {
            jhon: {
                name: 'jhon',
                age: 12,
                gender: 'male'
            },
            rita: {
                name: 'rita',
                age: 32,
                gender: 'male'
            }
        };

 //Array
		   var myArr = [1, 2, 3, 4, 5];
```

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

Write down your answer.

```jsx
const App = () => {
		//Here is parent component
  		return <div>
  		  <CompA />
 		 </div>;
}

	const CompA = () => {
  		const [name, setName] = useState('Sparta')
 		 const changeName = () => {
   			 if (name == 'Sparta') {
     				 setName('Learning X')
   			 } else {
      				setName('Sparta')
   		}
 	}
  	return (
   		 <>
        			<CompB label = {name} />
        			<button onClick={changeName} >Change</button>
    		</>
  	)
}

	const CompB = (props) => {
    		const {label} = props
  		return (
   			 <div> {label} </div>
 		 )
}
```

![2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bff1b4d0-c7c6-4219-8f95-b829d3d5db89/2.png)

**Mounting methods**
A component mounts when it is created and inserted for the first time in the DOM.

**Updation**

The updating lifecycle methods give us control over when and how this updating should take place.

**Unmounting**

In many cases components need to be removed from the DOM, this happens because of changes to the state.

## **Mounting methods**

A component mounts when it is created and inserted for the first time in the DOM.

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

Write down your answer.

![WhatsApp Image 2022-10-24 at 23.44.23.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0744f45e-6c4c-46e6-b012-86198f3d643c/WhatsApp_Image_2022-10-24_at_23.44.23.jpeg)

- In one-way binding, the flow is one-directional. This means that the flow of code is from the ts file to the Html file.
- In two-way binding, the flow is two-directional. This means that the flow of code is from the ts file to the Html file and from the Html file to the ts file.

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

It can be done using React Hooks Effect useEffect(). The method is quite similar with lifecycle method. So it can be used to remove event listener when we cannot use lifecycle method.

Example : 

```jsx
useEffect(()⇒{

//some variables

return ()⇒{

// remove event listener

}

},[])
```

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassName`?

</aside>

In general, refs are preferable to documents. getElementById, because it is more consistent with the rest of the react code.

Every component class in react can have multiple component instances.

Using id is risky because react does not prevent you from having multiple forms on a single page, and the DOM then contains multiple inputs with the same ID. That is not permitted.

Another advantage of using refs is that they are only accessible in the context in which they are defined. If we need to access information outside of this context, we must use props and state (and possibly stores).

And this is a benefit because there is less/no chance of breaking our unidirectional data flow, which would make our code more difficult to manage.

<aside>
🔐 Explain SPA and MPA.

</aside>

A single-page application (SPA) is a web-based application that uses only one web page to display the application. All clicks or data presentations do not reload the entire page, but only a few are updated from the server or from the client-side application process results. Because of the use of this technology, the web created is lighter and faster to use.

A Multi-page Application (MPA) is a web application made up of a large number of pages that are completely refreshed whenever data on them changes. Any change or transfer of data to the server results in a new page being displayed in the browser. It is the polar opposite of a single page application, which has only one page and dynamically updates data without changing the page.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

If you're trying to [host a static website using Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html) (spartacodingclu.com), but you're getting an **Access Denied** error, check the following requirements:

- Objects in the bucket must be publicly accessible.
- S3 bucket policy must allow access to the **s3:GetObect** action.
- The AWS account that owns the bucket must also own the object.
- Objects can't be encrypted by AWS Key Management Service (AWS KMS).
- Objects that are requested must exist in the S3 bucket.
- Amazon S3 Block Public Access must be disabled on the bucket and account level.The S3 bucket is correctly configured for website hosting.

Because the page [http://spartacodingclub.com/login](http://spartacodingclub.com/loging) not publicly accessible it can be caused an error. Beside that the acces to the s3:GetObject not allowed, or objects can’t be encrypted

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. What is naming requirements to create components in react

A1. When creating a component, the first letter must be **capitalized.** Folders are written with a camel case that starts with a lowercase letter, and files that create components are named with a camel case that starts with an uppercase letter.

Q2. What is the Map method and the difference of Map method beside other iteration method in Javascript?. Give example of Map methods too !

A2. Map() is a method to iterates across an array and applies a callback on each element, returning the resulting elements in a **new** array.

- **reduce()**: metod to *reducing* a vector to a scalar (a list of values, to a single one). This can be summing all values in an array, finding the average, minimum or maximum, or in any other way reducing a longer set of data to a smaller one (stem). Map() method not stem the set of data
- **filter()**: Filter out items from a list  with iteration that meets specification/condition. Map method iterate all items in array
- **forEach()**: The main distinction between these two methods is that the map() function returns *a new array*, whilst the forEach() method does not - it *alters the original array*.
    
    Example : calculating square root of every value in array
    
    ```jsx
    const numbers = [9, 36, 64, 144];
    let squareRoots = numbers.map((number) => {
        return Math.sqrt(number);
    });
    console.log(squareRoots); // Output :  [3,6,8,12]
    ```
    

Q3. What is some function of JSX do in React?
A3. Some function of JSX is :

- Embedding Expressions
- Specifying Attributes
- Create Expression
- Specifying Children
- Prevents Injection Attacks
- Represent Objects

# Team 6

<aside>
🔐 What’s the difference between array and array-like object in JavaScript.
How can you change each element in an array-like object?

</aside>

An object is a non-primitive data type in javascript that we use to store data in a key-value format. The majority of objects in javascript are derived from the Object prototype. There are various object forms in javascript, depending on the acts of accessing and manipulating the properties, expressed as internal methods; As per ECMAScript documentation, an ordinary object requires specific criteria of the default action for the primary internal methods while an exotic object might not have a default action for a few of its internal methods. object is an array like if it satisfies the criteria: index should start at 0, index should be incremented in the same way as that of an array. should have a length property and return a non-negative integer, and it’s value should be equal to the number of integer index keys

Array is a list of numerically indexed values in the order of their entry; In JavaScript, it’s an exotic object which maintains array-index property keys called an element and a non-configurable property called length, and each array is derived from this Array object inheriting all of its properties like push, pop, slice, map, shift, and many more.

the difference between array and array-like object is:
1. the index range of an array-like object is 0≤I≤2^53–1, whereas the index range of an array is 0≤ I <2^32–1
2. an array-like object is not derived from the array.prototype object. therefore, we cannot perform traversing and remodeling operations like push, pop, foreach and many more.

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

In React, component can communicate with each other, parent component can pass some props to child component, but child component can’t pass props parent component. Component use *props* to communicate with child component. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3522cb9-34c2-45ff-bf30-028f6eed5d41/Untitled.png)

Component A pass props {name: ‘some value’} to child component (in this case Component B). now the Component B can read the property {name: ‘some value’} from Component A, in the Component B can call property name from Component A by props.Name. every value of props.Name at Component B always be same of Name props in Component A.

```jsx
const B = (props) => {
	return <p> {props.name} </p>
}

const A = () =>{
	return (
		<div>
			<B name= 'Sparta'/>
		</div>
	);
}
```

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

First, we need to know what data binding is. Data Binding is the process of connecting view (UI) and data in the element/program/model.

In React, data flows one way or we often called it by “one-way data binding.” The data can flow from component to UI (any change in component data would get reflected in the view) or from the view to component but it is in one direction only.

However, there are lots of applications that require us to not only just send data from element/program to view but also read some data from view and flow it back into our program. For example, when developing forms, we’ll often want to update some React state when we receive user input. This process is done using two-way data binding.

So, two-way binding just means that:
1. When properties in the model get updated, so does the UI
2. When UI elements get updated, the changes get propagated back to the model

Here’s the diagram that represents two-way binding:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cdeb867b-a94d-45df-8ed0-992d65e0e247/Untitled.png)

How is the re-rendering done using two-way binding? Lets assume there are parent component A and child component B. Lets say the parent component A responsible for reading data given by the user and then pass that data to the child component B using a property. When the user made a change on the view, that change made by user will update the component A state. This change of state are immediately take effect on the change of component B state that will be seen by the change of view.

<aside>
🔐 Explain SPA and MPA.

</aside>

The difference between SPA and MPA is that MPAs secure each page to its core. it takes more timee and effort to maintain the security, hence, it will take more time to loading the page.

SPAs secure endpoints faster, but the security level is low. SPAs generally rely in javascripts. This makes them vulnerable to being attacked by cybercriminals because of the data not being compiled for security. SPAs are considered more “modern” and attuned to today’s agile development needs.

However, this doesn’t mean that MPAs don’t work out. Amazon is an MPA and this effectively means that whenever you request new content, the page has to reload all over again. this is considered conventional architecture, but it’s still highly valuable and is used with great results.

MPAs are best suited for complex websites that do not require a continuation of approach. For e.g. on amazon you don’t require your page to stay the same when you want to view a product or category. so if you are thinking of building let’s say a very large ecommerce site, then you should opt for an MPA architecture.

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappeared(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

In class components, we have lifecycle methods to perform actions in a specific lifecycle stage of our component (`componentDidMount` to mount component, `shouldComponentUpdate`
 and `componentDidUpdate` to update component, and `componentWillUnmount` to unmount component). To perform something similar in functional component, React provide t he `useEffect` hook. 

Here’s the step used when we want to remove event listener in functional component:
1. Add the event listener in the **`useEffect`** hook.
2. Return a function from the **`useEffect`** hook.
3. Use the **`removeEventListener`** method to remove the event listener when the component unmounts.

Here’s the code example:

```jsx
import {useRef, useEffect} from 'react';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    // 👇️ remove the event listener when component unmounts
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button ref={ref}>Click</button>
    </div>
  );
};

export default App;

// Source code: https://bobbyhadz.com/blog/react-remove-event-listener
```

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `document.getElementsByClassName`?

</aside>

React framework is reactive. Its means that when there are state changes, it will render the UI. Because of this, it will be better if we avoid to use normal JavaScript syntax or jQuery syntax like “`document.getElementsByClassName`". This syntax may have issues and doesn’t match with react timing (whenever there are state changes). As an alternative to this syntax, React provide `ref` to approach DOM. 

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

When you configure an Amazon S3 bucket for website hosting, you must give the bucket the same name as the record that you want to use to route traffic to the bucket. For example, if you want to route traffic for [`spartacodingclub.com/`](http://spartacodingclub.com/loging) to an S3 bucket that is configured for website hosting, the name of the bucket must be [`spartacodingclub.com/`](http://spartacodingclub.com/loging). 
If you want to route traffic to an S3 bucket that is configured for website hosting but the name of the bucket doesn't appear in the **Alias Target** list in the Amazon Route 53 console, or if you're trying to create an alias record programmatically and you're getting an InvalidInput error from the Route 53 API, one of the AWS SDKs, the AWS CLI, or AWS Tools for Windows PowerShell, check the following:
• The name of the bucket exactly matches the name of the record
• The S3 bucket is correctly configured for website hosting.

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. What is a `default argument`?

A1. Default props are a way of providing default values for props that are not required by the component. For example, if you have a component that accepts a user’s name, you could use a default prop to provide a name if one is not available for that user:

```jsx
const UserName = ({ name = 'User' }) => return (<h3 className="username">{name}</h3>);
```

Default props can be used to define any props that you want to be set for a component, whether or not a value is actually passed in from the parent component. When using default props, you can still override the values specified in the default props object when you pass in values from the parent component. For example, `<UserName name="John Doe" />`will render `John Doe`, even though the default value is specified as `User`. The value passed from the parent component is prioritized over the default value.

Q2. What is a `object literal`?

A2. Object literal is the notation we used to define an object. In JavaScript, an object is a collection of properties, and a property is an association between a key and a value. For example: `{name="John Doe", age=23}`. A property's value can be a function, in which case the property is known as a method.

Q3. What is a **`React Hook`** ? What is the example of Hook?
A3. Based on React documentation, Hook let we use state and other React feature without writing a class. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. Some examples of hook are useState, useEffect, and useContext.

# Team 7

<aside>
🔐 What’s the difference between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

Arrays are indexed collections that can hold data of any type. They are created with ‘[ ]’. Example:

```jsx
let array1 = [1, 2, 'capscode', true, null, ,12]
```

Array-like objects are objects which have indexed access to the elements and a non-negative length property to know the number of elements in it. These are the only similarities it has with an array. It doesn't have any of the Array methods like push, pop, join, map, etc.

```jsx
var arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};
```

To change value of each element in array-like object, put a new value into the statement like below and press Enter.

```jsx
arr_like[1] = 'am not an';
```

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

```jsx
const Child = (props) => {
    return (
			
			<h1> I am a {props.motherName}</h1>
		)
}

const Mother = () => {
    const [name, setName] = useState("Sparta");
    return( 
    <div> 
        <h4>HAAAI I am Sparta</h4>
        <Child motherName={name} />
				<button onClick={() => setName("LearningX")}> ubah </button>
    </div> 
);
}

const App = () => {
    return <Mother />;
}

export default App;
```

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

Two-way binding is mechanism that allow parent and child component to receive and send information to each other. To do two-way binding we can use props and state. 

This is the example how we use two-way binding. We declare state named myName in function A and we pass myName state and setName() to the child using props.

```jsx
// src/App.js

import React, { useState } from "react";

function B(props) {
  return (
    <div>
      <button
        onClick={() => {
					props.setName("My name is B"); 
        }}
      >
      </button>
      <div>{props.myName}</div>
    </div>
  );
}

function A() {
  const [name, setName] = useState("My name is A");
  return <B myName={name} setName={setName} />;
}

function App() {
  return <A />;
}

export default App;
```

Whenever we click button inside the B component, we set myName state value to “My name is B”. So, it will re-rendering value of myName state from “My Name is A” to “My Name is B” on screen. This how we can send information from child component to parent component. 

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappeared(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

Answer:

By using the **`removeEventListener`** method to remove the event listener in the component.

```jsx
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect starts")
    window.addEventListener('click', myFunction)
		return () => window.removeEventListener('click', myFunction)
  }, [state])

  const myFunction = () => {
    setState(state + 1);
    console.log(state)
  }
  return (
    <div className="App">
      <h1>A component</h1>
			Num : {state}
    </div>
  )
}

export default App
```

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassName`?

</aside>

`document.getElementsByClassName` is a JavaScript and JQuery syntax that doesn’t run well in React. It can give unexpected results if there are multiple elements that match with the ‘class name’. It’s because React has a different concept. React uses the state to update data on the screen by re-rendering the component. So, instead of using `document.getElementsByClassName` we use ref whenever there are situations where we need to deal with the DOM properties directly. Because refs are provided by the React framework, refs are aware of to react component lifecycle, so react would make sure that refs are updated to null when the component unmounts.

<aside>
🔐 Explain SPA and MPA.

</aside>

Single Page Application (SPA) is a web application that does not use the default method of loading new pages completely. The opposite of SPA is a Multi-Page Application (MPA), which reloads each time the user opens a new page in the browser.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

It is because React is Single Page Application (SPA) and routing controlled by React. Direct routing like  [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) doesn’t work because actually the application only have one index.html which can be accessed using domain name or `spartacodingclub.com` 

React doesn’t have a built-in solution for routing. If we want to implement dynamic routing in the application, we can use library such as React Router and React Router DOM

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. What are the differences between Functional Components vs Class Components in React?

A1.

**Functional components** are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.

React **class-based components** are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All **class-based components** are child classes for the Component class of ReactJS.

|  Functional Components                  | Class Components  |
| --- | --- |
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | A class component requires you to extend from React. Component and create a render function that returns a React element. |
| There is no render method used in functional components. | It must have the render() method returning JSX (which is syntactically similar to HTML) |
| Functional components run from top to bottom and once the function is returned it can't be kept alive. | A class component is instantiated and different life cycle method is kept alive and being run and invoked depending on the phase of the class component. |
| Also known as Stateless components as they simply accept data and display them in some form, and they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
| React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |
| Hooks can be easily used in functional components to make them stateful. Example:
const [name,SetName]= React.useState(‘ ‘) | It requires different syntax inside a class component to implement hooks. Example:
constructor(props) { super(props);
this.state = { name: ‘ ‘
}} |
| Constructors are not used. | Constructors are used as it needs to store state.  |

Q2. What’s the Virtual Documentation Object Model (DOM)?
What does it have to do with Real DOM?

A2. As stated by the react team, **virtual DOM** is a concept where **a virtual representation** of the real DOM is kept inside the memory and **is synced with the real DOM** by a library such as ReactDOM.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ec7d106-1a42-441b-834e-336dfe795308/Untitled.png)

DOM manipulation is an integral part of any web application, but **DOM manipulation is quite slow** when compared to other operations in JavaScript. The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.

For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, **the entire list gets rendered** again instead of just rendering the item that was changed/updated. This is called **inefficient updating.**

To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4451d76d-fde1-4c97-af1d-0af22fb88555/Untitled.png)

For every DOM object, there is a corresponding virtual DOM object (copy), which has the same properties. **The main difference** between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. Consider a virtual DOM object as a blueprint of the real DOM object. Whenever a JSX element gets rendered, every virtual DOM object gets updated.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever **the virtual DOM gets updated**, react compares the two virtual DOMs and gets to know which virtual DOM objects were updated. After knowing which objects were updated, **react renders only those objects inside the real DOM** instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

Q3. What is **Prop Drilling**?
A3. Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and **keep passing the prop to the next component in the hierarchy till we reach the deeply nested component**. That’s what Prop Drilling means.

The **disadvantage** of using prop drilling is that the components that should otherwise be not aware of the data have access to the data.

# Team 8

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

Array is a special variable where you can put several items in it. It uses automatic index with number starting from 0 without any negative.  It will use square bracket [] and comma to separate other items inside the array.

- Array example
    
    ```jsx
    const my_array = ['item_one','item_two','item_three']
    ```
    

Array-like object is also an object. Before we talk about array-like object, we must know what object is. Object is similar with array, but it has flexible index or key name. Object also use parentheses {}.

- Object example
    
    ```jsx
    const my_object = {key_one:'value_one', key_two:'value_two', key_three:'value_three'} 
    ```
    

array-like object will use specific key name. Instead of string, we will use zero and positive number. Array-like object is technically an object, so it still uses parentheses. 

- Array-like object example
    
    ```jsx
    const my_array_like_object = {0:'value_one', 1:'value_two', 2:'value_three'}
    ```
    

Since array-like object is fundamentally an object, any method to change any object value will works.

- Change value in object
    
    ```jsx
    var my_array_like_object = {0:'value_one', 1:'value_two', 2:'value_three'};
    // Assign a new value to index 0.
    my_array_like_object[0]='new_value_one'
    ```
    

In case we want to change the key name, there are no specific way to do that. However, we can find another way with copying existing key-value pair and then delete the older one.

- Change key in object
    
    ```jsx
    var my_array_like_object = {0:'value_one', 1:'value_two', 2:'value_three'};
    // Change key name to a different one.
    my_array_like_object['3'] = my_array_like_object['0']; 
    // {0: 'value_one', 1: 'value_two', 2: 'value_three', 3: 'value_one'}
    delete my_array_like_object['0']; 
    // {1: 'value_two', 2: 'value_three', 3: 'value_one'}
    ```
    

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

![WhatsApp Image 2022-10-24 at 20.51.07.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b67a8b3-13f0-4995-9927-23a23790b65e/WhatsApp_Image_2022-10-24_at_20.51.07.jpeg)

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

👉🏻We can define two-way binding like a strategy to simplify synchronization between JavaScript references and HTML element values and otherwise. it means that any change inside the self-property value is reflected inside the value of the HTML element, and any change inside the value of the HTML element is propagated back to the self.

- 🦋**Text Input example**
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0bb8940-f00d-4a4d-a303-449fb25fa867/Untitled.png)
    
    Just clicked the **Update button** and you can get teks “**New value**”
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/647f1be9-68a7-41c9-ab1f-b1c02221efbe/Untitled.png)
    

❓Why we don't use some examples of using two-way binding to better understand.

- 🦋**Checkbox example**
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ee6c54a-9ea0-4781-b573-6453809c34bd/Untitled.png)
    
    📌The email will return false if we uncheck the email box.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40828bd9-ec1a-4682-932a-2d27687dd216/Untitled.png)
    
- 🦋**Radio example**
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d7f0b63-b472-4d33-bdb6-0ae6ff239776/Untitled.png)
    
    If we click **“Get”** we got this text-box.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc8ebe5e-9908-49f9-9227-a73179807cce/Untitled.png)
    
    and then if we click **“Set (Oranges)”** the fill the radio in Apples can move automatically to the radio in Oranges.
    

### 📌How the re-rendering is done when using two-way binding ❓ ❔

We can synchronization between JavaScript references and HTML element values and otherwise. As we have already seen, **self-property** value is reflected inside the value of the HTML element. In case self.input = ‘New value’ on text input example we can assume parent component A is **input: “assiva@123.com”** and then child component B is **self.input.**

If we analyze the input:“assiva@123.com” is affect the self.input, and if we update the self.input, input: “assiva@123.com” will adjust self.input. This is how beautiful thing if we use the **two-way binding**. 🥂

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

As we know, we can use the lifecycle method to unmount or delete something by typing. 

```jsx
componentWillUnmount() {}
```

For example.

```jsx
componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

But if we can’t use the lifecycle method, we can try this function. 

```jsx
window.removeEventListener();
```

By using the **useEffect** hook will help remove the EventListener with an optional return value in the callback function. Also we can return a function on the useEffect callback and it will run when the component is dissapered(unmount). 

- 📌Example code.
    
    ```jsx
    const App = (props) => { 
      const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode);
      };
    
      React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        // cleanup this component
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    
      return (
        <div className='container'>
          <h1>Welcome to the Keydown Listening Component</h1>
        </div>
      );
    };
    ```
    

---

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassName`?

</aside>

ReactJS Framework works in different way than normal JavaScript or jQuery. JavaScript and jQuery normally only run when the user does something and call functions. After that JavaScript will execute that function based on what user put in the parameters. The situation is different with ReactJS Framework, React will keep updating new user interface whenever the user does something and change the state.

To have better understanding, we must learn about ReactJS lifecycle first. There are 3 cycles:

- Mount, React will render whole code and return JSx from the component.
- Update, whenever user does something, like pressing a button, write a letter to an input box, move some element, react will consider it as changing state and render a new UI right away.
- Un-Mount, this phase for deleting unnecessary part and managing memory.

if we use getElementsByClassName, it may cause some error since React may re-rendering pages with its own timing and JavaScript will has different timing.

<aside>
🔐 Explain SPA and MPA.

![Simple Illustration about SP App VS MP App](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/334d80b8-6507-4c41-8b6a-ce152ccd6648/Untitled.png)

Simple Illustration about SP App VS MP App

</aside>

### 📱 **SPA (Single Page Application)**

A SPA is an application that allows you to work inside a browser and does not require any reload for the page when a user is using it. Many of the application that we use every day are SPA, for example Navigation apps, Social Media, or Email Providers.

SPAs, due to the presence of their HTML shells, can easily be converted to progressive web applications (PWA) leading to a more seamless experience for the user. Likewise, their JavaScript-dependent shell also allows it to be able to load preloaded pages while offline. Known as offline caching, this allows users to never lose track of their data while on the app. The SPA only needs you to send one request, store all data, and then can freely access all of this data while offline

### 📱📱M**PA (Multi-Page Application)**

Multi-page applications, or MPAs, request rendering each time for a new page from the server in the browser. They’re perfect for applications larger than SPAs, and due to the amount of content, they have different levels of UI. They are often known as the “traditional” way of app development, and though there are multiple levels of UI, this has recently been resolved due to the developments of AJAX.

AJAX allows the transfer of a large amount of complex data between the servers and browsers, however; this also brings some problems. With its ability to transfer data, there’s a new layer of complexity that often challenges JavaScript developers.

### ❔What is differences between SPA & MPA ?

The obvious and most notable difference between the two is speed. SPAs have the advantage of being preloaded, and though they usually have some initial delays when retrieving the data, the requests after are much faster due to the cache. However, in a single-page app versus a multi-page app, MPAs have to request data for each page the user accesses and have much slower apps.

SPAs also have the advantage of their versatile back-end code which can be reused for various mediums including mobile apps. Due to its decoupled front and back ends, this technology can also be developed and adjusted simultaneously.

MPAs require each page to be secured so it takes more effort and time to maintain security. SPAs, however, can make secure endpoints faster but they are not necessarily safer. SPAs run on JavaScript which makes them more prone to hacker attacks because it does not compile data for security. Some inexperienced or rushed developers use Cross-Site Scripting (XSS) in SPAs. Attackers can insert client-side scripts into web applications by other users, making poorly-designed SPAs less secure. Of course, most reputable vendors will not use XSS in a SPA so be sure to discuss it with your development team.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

React framework is a Single Pages Application (SPA). In SPA, the pages are rendered when needed and removed when we already used it or we don’t need it anymore. So instead of moving from one URL to another URL, login pages will be rendered when needed. Maybe when the user accesses the login pages with a button, the current page will be removed (Un-Mount) and then the login pages will be rendered (Mount). 

This process applied to any different pages, not only login. Like for example register pages, same processes as removing current pages, rendering new pages. Later register page will be removed after the user done with the registration process.

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. Please make an example of declaration the array-like object except the example. 

A1. 

```jsx
const scc = {0:'sparta', 1:'coding', 2:'club'}
```

Q2. Explain the main advantages of using the **SPA** architecture

A2. 

> **High speed.** Since SPA doesn't update the entire page, but only the necessary part, it significantly improves the speed of work.
> 

> **High speed development.** Ready-made libraries and frameworks provide powerful tools for developing web applications. The project can work in parallel back-end and front-end developers. Thanks to a clear separation they will not interfere with each other.
> 

> **Mobile applications.** SPA allows you to easily develop mobile apps based on the finished code.
> 

Q3. How unmounting and mounting works ? give an example.
A3.

For example, when we open  [www.youtube.com](http://www.youtube.com/) and then click one of the videos on youtube. We can see that the header on youtube does not refresh when switching pages, if we press the back button and return to home, the header will not load. The changes made are only the body on the website, and when we switch pages, the video that has been watched before will go through the unmounting process and then the video we just watched will go through the mounting process.

# Team 9

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

**Write down your answer.**

First we must know what **Array** is, **Array** is a collection of data and a data structure that is stored in a **sequence of memory** locations. One can access the elements of an array by calling the index number such as 0, 1, 2, 3, …, etc. The array can store data types like **Integer, Float, String, and Boolean** all the **primitive data types** can be stored in an array. For example, this is an example of array code.

```jsx
var myArr = [1, 2, 3, 4, 5];

// Iterating through loop
for(var i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);
}

// Pop an element from array
myArr.pop();
console.log("after using pop()"+ myArr);
```

output:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f1970f7-060b-4bd9-8ce1-ee910b9db472/Untitled.png)

**Array-like objects** it can ****stores multiple values in a **single** variable. The object can contain anything in the real world such as person names, cars, game characters. Objects are very easy to use in some situations if you know where the data is being processed. The character set of objects are known as **Properties**. Properties of an object can be called by using **DOT notation** and **[] notation**. For example, this is an example of array-like object in code. 

```jsx
var myObject = {
	jhon: {
		name: 'jhon',
		age: 12,
		gender: 'male'
	},
	rita: {
		name: 'rita',
		age: 32,
		gender: 'male'
	}
};

// Using DOT notation
console.log('using DOT:' + myObject.jhon.gender);

// Using [] notation
console.log('using []:' + myObject.rita['age']);

// Using delete keyword
delete myObject.rita;

// Iterating using for..in loop
for (var key in myObject) {
	console.log(myObject[key]); // logs values in myObject
}
```

output:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/870d0b4e-b448-421a-a627-513679a777ca/Untitled.png)

**Difference between Array and Array-like objects:**

| Array | Array-like Object |
| --- | --- |
| Arrays are best to use when the elements are numbers. | objects are best to use when the elements strings (text). |
| The data inside an array is known as Elements. | The data inside objects are known as Properties 
that consist of a key 
and a value. |
| The elements can be manipulated using []. | The properties can be manipulated using 
both .DOT notation and []. |
| The elements can be popped out of an array using the pop() function. | The keys or properties can be deleted by using the delete keyword. |
| Iterating through an array is possible using For loop, For..in, For..of, and ForEach(). | Iterating through an array-like objects is possible using For..in, For..of, and ForEach(). |

<aside>
🔐 There are parent component A and child component B. Component A has {name: “Sparta"} as its state and pass down the name value to component B. Then, component B shows the name value on the screen. 
Please draw the lifecycle of how the value is shown on the screen when component A’s state is changed to {name: "LearningX"}.

</aside>

**Write down your answer.**

To make it easier for us to answer this question, we will just put it into practice.

Look at the code snippet below:

```jsx
import { useState } from 'react';

const A = () => {
  const [name, setName] = useState("Sparta");
  const handleClick = () => {
    if (name === "Sparta") {
      setName("LearningX")
    } else if (name === "LearningX") {
      setName("Sparta")
    }
  }
  return (
    <div>
      <h3>Hallo this is from A component</h3>
      <p>This component has a name value that is <b>{name}</b> </p>
      <button onClick={handleClick}>Click here to change the value</button>
      <B name={name}/>
    </div>
  );
};

const B = (props) => {
  return (
    <div>
      <h3>Hallo this is from B component</h3>
      <p>This component get the value from component A, and the value is <b>{props.name}</b> </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <A/>
    </div>
  );
}

export default App;
```

As you can see here we created 2 components named component "A" and also component "B" as requested from the question.  At first we initialize the variable "name" with "Sparta" in component "A", then we pass the variable "name" into components "B", component "B" then receive data sent from component "A" using props.

To change "name" to "LearningX" we use the useState function, this function is one of the functions in React. Here we use the useState function on a button that has been given an onClick event, when the button is pressed it will call the handleClick function which will change the "name" using setName. Here we provide a condition when a state that has the value "name" "Sparta" then when the button is pressed the state will change to "LearningX" and vice versa.

To make it clearer, you can see the image below:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65b72124-50d3-4574-a1d2-c239cf88c908/Untitled.png)

And this is the result of the code above

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/66733aff-e7a6-4118-b54d-bea4caa3bb4d/Untitled.png)

<aside>
🔐 What is two-way binding? Explain how the re-rendering is done when using two-way binding. 
(Assume that there are parent component A and child component B.)

</aside>

**Write down your answer.**

Two-way data binding refers to **sharing data between a component class and its template.** If you change data in one place, it will automatically reflate at the other end. For example, if you change the value of the input box, then it will also update the value of the attached property in a component class.

![c1.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75322ad4-29a8-4fe4-8a3f-124dd8a10acd/c1.jpg)

<aside>
🔐 Event listener should be removed when it’s called out.
When component is disappered(=unmount) from the screen in class component, event listener is removed in `componentWillUnmount`.
Then, how do you remove event listener in functional component where you can’t use the lifecycle method?

</aside>

**Write down your answer.**

From what I see on the internet this is one of the way on how we remove event listener in functional component where you can’t use the lifecycle method.

![c3.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d7c44ef-ba7b-4962-8f5f-db5cad9a9b3d/c3.jpg)

![c4.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19ae6979-89cb-400c-a176-bfcf8e33ffcd/c4.jpg)

<aside>
🔐 We usually use `ref` to approach to DOM in react. Why do we use `ref` instead of `domcument.getElementsByClassName`?

</aside>

**Write down your answer.**

In order to access DOM methods in react, you have to call this piece of code inside `useEffect`
hook.

This is how the code looks like.

```jsx
useEffect(()=>{
	const desc_object=document.getElementByClassName("singlePostDesc");
	if (desc_object){
		// now you can access it here
	}
}
```

<aside>
🔐 Explain SPA and MPA.

</aside>

**Write down your answer.**

SPA is Single-Page Application. It means that navigation between different screens of the website is done without loading a different page. The clear example of SPA is Gmail.

MPA is Multi-Page Application. It means that navigation between different screens of the website is done with loading a different page. The clear example of MPA is Amazon.

<aside>
🔐 Why there’s an error when you move to the page like [`spartacodingclub.com/login`](http://spartacodingclub.com/loging) instead of `spartacodingclub.com` after deploying to s3 bucket?

</aside>

**Write down your answer.**

From what I see the Question is talking about “ Why there’s an error after We deploying  to s3 bucket”?

So, When we tried to create the zip folder, make sure you zip the contents of your build output and not the top-level folder. For example, if your build output generates a folder named “build” or “public”, first navigate into that folder, select all of the contents, and zip it from there. If you do not do this, you will see an “Access Denied” **error because the site's root directory will not be initialized properly.**

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1.  Is CRA the only way to create React projects?

A1.  CRA is not the only way to create React project 

  But, It’s the easiest way to create the Project

Q2.  What is a class component?

A2.   Class component is actually an older way Creating Component in React, It has more less Filter,    

   and It is not the most updated and Modern version.

Q3. What is Props Drilling?
A3.  Props drilling is the Act/Process of some Property/Data, It is a high Component and seperated 

  into the smallest part of the component Parent/Child like; (From Grand to Grand Child)
