# Team 8

<aside>
🔐 What’s the differenece between array and array-like object in javascript.
How can you change each element in an array-like object?

</aside>

Array is a special variable where you can put several items in it. It uses automatic index with number starting from 0 without any negative. It will use square bracket [] and comma to separate other items inside the array.

- Array example
  ```jsx
  const my_array = ["item_one", "item_two", "item_three"];
  ```

Array-like object is also an object. Before we talk about array-like object, we must know what object is. Object is similar with array, but it has flexible index or key name. Object also use parentheses {}.

- Object example
  ```jsx
  const my_object = {
    key_one: "value_one",
    key_two: "value_two",
    key_three: "value_three",
  };
  ```

array-like object will use specific key name. Instead of string, we will use zero and positive number. Array-like object is technically an object, so it still uses parentheses.

- Array-like object example
  ```jsx
  const my_array_like_object = {
    0: "value_one",
    1: "value_two",
    2: "value_three",
  };
  ```

Since array-like object is fundamentally an object, any method to change any object value will works.

- Change value in object
  ```jsx
  var my_array_like_object = {
    0: "value_one",
    1: "value_two",
    2: "value_three",
  };
  // Assign a new value to index 0.
  my_array_like_object[0] = "new_value_one";
  ```

In case we want to change the key name, there are no specific way to do that. However, we can find another way with copying existing key-value pair and then delete the older one.

- Change key in object
  ```jsx
  var my_array_like_object = {
    0: "value_one",
    1: "value_two",
    2: "value_three",
  };
  // Change key name to a different one.
  my_array_like_object["3"] = my_array_like_object["0"];
  // {0: 'value_one', 1: 'value_two', 2: 'value_three', 3: 'value_one'}
  delete my_array_like_object["0"];
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
      console.log("A key was pressed", event.keyCode);
    };

    React.useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);

      // cleanup this component
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    return (
      <div className="container">
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

Write down your answer.

# DIY Section

<aside>
🔑 Choose three main keywords of Week 2, create questions based on the keywords and answer them!

</aside>

Q1. Please make an example of declaration the array-like object except the example.

A1.

```jsx
const scc = { 0: "sparta", 1: "coding", 2: "club" };
```

Q2. Explain the main advantages of using the **SPA** architecture

A2.

> **High speed.** Since SPA doesn't update the entire page, but only the necessary part, it significantly improves the speed of work.

> **High speed development.** Ready-made libraries and frameworks provide powerful tools for developing web applications. The project can work in parallel back-end and front-end developers. Thanks to a clear separation they will not interfere with each other.

> **Mobile applications.** SPA allows you to easily develop mobile apps based on the finished code.

Q3.
A3.
