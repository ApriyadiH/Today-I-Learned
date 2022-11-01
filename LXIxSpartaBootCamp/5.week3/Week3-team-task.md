# Team 5

<aside>
🔐 Q1. Component A is subscribing Redux store. 
If the data saved in Redux has changed, (Let’s say that the variable that A is subscribing has changed) in what process does component A go through to get the changed variable? Demonstrate the flow (use pictures, presentation slides, hand-drawn, etc)

</aside>

Answer;

This question is basically asking about the flow of Redux itself. So this is the flow of redux:

- The flow of data in a React-Redux application begins at the component level when the user interacts with the application UI. This interaction leads to the action creators dispatching an action.
- When an action is dispatched, it is received by the root reducer of the application and is passed on to all the reducers. Thus, it becomes the reducer’s task to determine if it needs to update the state based on the dispatched action.
- This is checked by using a simple switch statement to filter out the required actions. Each (smaller) reducer in the application accepts the dispatched action and if the type of the dispatched action matches, it returns a newly updated state.
- It is essential to note here that the state never actually changes in redux. Instead, the reducer always generates a new state which is a copy of the old state, but with some modifications.
- The store then informs the component about the new state which in turn retrieves the updated state and re-renders the component.
- Another important observation here is that flow of data in a React-Redux application is unidirectional, i.e., it only goes in one direction.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/837c23ee-5e78-4d99-bb4b-624cda13b5d7/Untitled.png)

There are four fundamental concepts that govern the flow of data in React-Redux applications.

1. **Redux store:** The Redux store, simply put, is an object that holds the application state. A redux store can consist of small state objects which are combined into one large object. Any component in the application can easily access this state (store) by hooking up to it through the connect method.
2. **Action creators:** Action creators, as the name suggests, are functions that return actions (objects). Action creators are invoked when the user interacts with the application through its UI (button click, form submission, etc) or at certain points in a component’s lifecycle (component mounts, component un-mounts, etc).
3. **Actions:** Actions are simple objects which conventionally have two properties- type and payload. The type property is usually a string that specifies and identifies the action, and the payload is an optional property that contains some data that is required to perform any particular task. The main function of the action is to send data from the application to the Redux store.
4. **Reducers:** Reducers are pure functions that update the state of the application in response to actions. Reducers take a previous state and an action as the input and return a modified version of the state. Since the state is immutable, a reducer always returns a new state, which is an updated version of the previous state.

<aside>
🔐 Q2. What is optional chaining? In what circumstance do we use it?

</aside>

Answer here!

Working with data in JavaScript frequently involves situations where we aren’t sure that something exists. Optional Chaining `?.` is a way to read property values located deep in chained objects using the reference operator `?` followed by the chaining operator `.` without having to validate every reference in the chain is valid. The `?.` operator functions similarly to the chaining operator `.`, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

Example:

Take a look at the source code below!

```jsx
const learningXTeam = {
  team: "5",
  members: [
    {
      idMember: "1",
      name: "Roi",
      vehicle: { fourWheeler: ["Honda S660"] },
    },
    {
      idMember: "2",
      name: "Ulhaq",
    },
    {
      idMember: "3",
      name: "Faris",
      vehicle: { twoWheeler: ["PCX 160"] },
    },
    {
      idMember: "4",
      name: "Sella",
      vehicle: {
        fourWheeler: ["Hyundai Creta"],
        twoWheeler: ["BeAT CBS-ISS Series"],
      },
    },
  ],
};

learningXTeam.members.map((member, idx) => {
  console.log(member.name + "'s 4 Wheeler(s): " + member.vehicle.fourWheeler);
});
```

What happens when this source code is run? of course it will return a `TypeError` because we are accessing a nullish property (null or undefined). Then how to solve it briefly without having to validate by using the Optional Chaining Operator `?.`

```jsx
learningXTeam.members.map((member, idx) => {
  console.log(member.name + "'s 4 Wheeler(s): " + member.vehicle?.fourWheeler);
});
```

When the source code is rerun, the application will not get an error but an undefined value

<aside>
🔐 Q3. If you use <button type="submit"> when you use <form>, Redux data is initialized. Explain why.

</aside>

<button type=”submit”> inside the <form> will submit the form when user click the button, and causing the page to refresh, unless we use function like preventDefault(). The state of application is stored in the store and when the page is refreshed, the memory is cleared and the redux data will be initialized. It is because state in redux is stored in memory.

<aside>
🔐 Q4. What method do you have to use to maintain the data within Redux after refreshing?

</aside>

Redux Persist is a tool used to seamlessly save the application’s Redux state object to AsyncStorage. Redux persist is one of the many libraries from the redux family that are useful for saving your state and will automatically rehydrate when the application is run again. By default, applications built using redux as state management will reset the original state when the application is run again.

![Screenshot (196).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d173c52d-1e02-49ff-a4e9-7f3a9d236145/Screenshot_(196).png>)

# DIY Section

<aside>
🔑 Q1. What is `css nesting`?

</aside>

**Answer:**

CSS nesting **provides the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule**. Similar behavior previously required a CSS pre-processor.

Style rules can be nested inside of other styles’ rules. These nested style rules act exactly like ordinary style rules—associating properties with elements via selectors—but they "inherit" their parent rule’s selector context, allowing them to further build on the parent’s selector without having to repeat it, possibly multiple times.

There are two closely-related syntaxes for creating nested style rules:

- Direct nesting, where the nested style rule is written normally inside the parent rule, but with the requirement that the nested style rule’s selector is nest-prefixed.
  ```css
  table.colortable {
    & td {
      text-align: center;
      &.c {
        text-transform: uppercase;
      }
      &:first-child,
      &:first-child + td {
        border: 1px solid black;
      }
    }
    & th {
      text-align: center;
      background: black;
      color: white;
    }
  }
  ```
- The @nest rule imposes fewer constraints on the nested style rule’s selector.
  ```css
  .foo {
    color: blue;
    @nest .bar & {
      color: red;
      &.baz {
        color: green;
      }
    }
  }
  /* equivalent to
    .foo { color: blue; }
    .bar .foo { color: red; }
    .bar .foo.baz { color: green; }
  ```

Aside from the slight difference in how they’re written, both methods are exactly equivalent in functionality.

<aside>
🔑 Q2. What are the differences between `useNavigate`, `useLocation`, and `Link`?

</aside>

**Answer:**

`useNavigate()` is hooks from `react-router-dom` that helps us to move to other page. We usually use this function in the button onClick. However, `useNavigate()` also can be used in component's click event handler.

```jsx
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/page");
      }}
    >
      Click to move
    </button>
  );
};

export default App;
```

We can also add this code to redirect to the previous or next page in history

```jsx
function handleClick() {
  navigate(-1);
}
```

```jsx
function handleClick() {
  navigate(1);
}
```

`useLocation` used to give information about pages that we currently on.

<aside>
🔑 Q3. What is `strict mode`?

</aside>

`StrictMode`is a tool for highlighting potential problems in an application. Like `Fragment` , `StrictMode`does not render any visible UI. It activates additional checks and warnings for its descendants.

You can enable strict mode for any part of your application. For example:

```jsx
import React from "react";

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```

In the above example, strict mode checks will *not* be run against the `Header` and `Footer` components. However, `ComponentOne` and `ComponentTwo`, as well as all of their descendants, will have the checks.

`StrictMode` currently helps with:

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API
- Ensuring reusable state

Additional functionality will be added with future releases of React.

<aside>
🔑 Q4. What is **Props Drilling?**

</aside>

**Answer:**

Prop drilling is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. The problem with this approach is that most of the components through which this data is passed have no actual need for this data. They are simply used as mediums for transporting this data to its destination component.

This is where the term “drilling” comes in, as these components are forced to take in unrelated data and pass it to the next component, which in turn passes it, and so on until it reaches its destination.

<aside>
🔑 Q5. How do you style React components?

</aside>

Answer:

There are several ways to style the components:

Inline Styling

Javascript Object

CSS Stylesheet

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d13ebc98-c055-4eaf-9654-56835009b52a/Untitled.png)

# Team 6

<aside>
🔐 Q1. Component A is subscribing Redux store. 
If the data saved in Redux has changed, (Let’s say that the variable that A is subscribing has changed) in what process does component A go through to get the changed variable? Demonstrate the flow (use pictures, presentation slides, hand-drawn, etc)

</aside>

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/658be612-4945-4d14-b507-09e6f9a33a70/Untitled.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

So when we put an example like “A” in view then give an action like click button on action and will trigger a state that changing “A” to “B”. That’s how the data flow works.

<aside>
🔐 Q2. What is optional chaining? In what circumstance do we use it?

</aside>

The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

In what circumstance do we use it?

- Optional chaining with function calls, Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an exception if the method isn't found

`const result = someInterface.customMethod?.();`

- Optional chaining with expressions, use the optional chaining operator with bracket notation, which allows passing an expression as the property name

`const nestedProp = obj?.["prop" + "Name"];`

- Optional chaining not valid on the left-hand side of an assignment, using optional chaining with expressions, if the left operand is null or undefined, the expression will not be evaluated.

```
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

<aside>
🔐 Q3. If you use <button type="submit"> when you use <form>, Redux data is initialised. Explain why.

</aside>

Imagine a form inside a React-Redux application. Every time the user fills one of the fields in the form, Redux state is changed. Submit button sends HTTP POST request to the server and redirects to the next screen. Unfortunately, occasionally the submit button causes the application to go back to the login page, instead.

The answer was unexpectedly in the `network`
 tab of the DevTools. When clicking on the submit didn’t result with the expected behavior, the HTTP POST request was cancelled (appears in the network tab in red), and instead a GET request was sent with the form data in the URL.

This is how `<form>`
 works from before the days of Ajax. On submit, an http call is invoked, by default — it’s GET. When this happened before the [Axios](https://github.com/axios/axios/tree/14057dc0bd9811a9fda773588f66de9f4aa0f617)
 HTTP call, it caused the cancellation of the Axios call, and the server responded in a way that caused the app to reset. When the Axios call happened first — the app worked as expected.

<aside>
🔐 Q4. What method do you have to use to maintain the data within Redux after refreshing?

</aside>

To maintain the data in Redux, we can use Redux middleware called redux persist to store it in local storage. To add the data in local storage through redux persist, we will be adding both the reducers in the combineReducers function and pass to the redux persist. To persist the redux store, we have to define the persistConfig, where we determine the key as an id, storage for various types of storage, and some other configurations.

[10/31] team presentation screenshot

Upload here by 9:30!

# DIY Section

<aside>
🔑 Q1. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

what is **one-way data flow?**

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/658be612-4945-4d14-b507-09e6f9a33a70/Untitled.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

<aside>
🔑 Q2. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

What is reducer function?

A **reducer**
 is a function that receives the current `state`
 and an `action`
 object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`
. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

Reducers must *always* follow some specific rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make *immutable updates*, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
  - If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

<aside>
🔑 Q3. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

What is Props Drilling?
Props drilling is the Act/Process of some Property/Data, It is a high Component and seperated into the smallest part of the component Parent/Child like; (From Grand to Grand Child)

<aside>
🔑 Q4. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

Is CRA the only way to create React projects?

CRA is not the only way to create React project

But, It’s the easiest way to create the Project

<aside>
🔑 Q5. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

What is a class component?

Class component is actually an older way Creating Component in React, It has more less Filter,

and It is not the most updated and Modern version.

# Team 7

<aside>
🔐 Q1. Component A is subscribing Redux store. 
If the data saved in Redux has changed, (Let’s say that the variable that A is subscribing has changed) in what process does component A go through to get the changed variable? Demonstrate the flow (use pictures, presentation slides, hand-drawn, etc)

</aside>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8aaf53d-f08f-4893-8081-9c71e6d8ca11/Untitled.png)

component will trigger some event handler like onClick, then in that function we use the useDispatch hook to sent the action function to reducer with payloads and action, in reducer we have determined how to process the payload base on the action type that we get form action function then it will update the state and the component will receive latest state

<aside>
🔐 Q2. What is optional chaining? In what circumstance do we use it?

</aside>

## **Optional Chaining**

[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpVCWLolaNxsMcETsIy8ITPjE9ptvHkb8UQ&usqp=CAU](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpVCWLolaNxsMcETsIy8ITPjE9ptvHkb8UQ&usqp=CAU)

Optional chaining is an _error-proof way_ to access **nested** object properties, even if an intermediate property doesn’t exist. It works similar to Chaining ‘.’ except that it does not report the error, instead it returns a value which is undefined. It also works with function call when we try to make a call to a method which may not exist.

```jsx
const user = {
  dog: {
    name: "Alex",
  },
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);
```

Okey let’s do Optional Chaining Exercise with Function call.

```jsx
let user1 = () => console.log("Alex");
let user2 = {
  dog() {
    console.log("I am Alex");
  },
};
let user3 = {};

user1?.(); // Alex
user2.dog?.(); // I am Alex
user3.dog(); // ERROR - Uncaught TypeError:
// user3.dog is not a function.
user3.dog?.();
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afaa009e-214f-4474-bccf-de771dc623db/Untitled.png)

### **What Optional Chaining Operators Don't Do?**

- Object construction : `new a?.()`
- Literal Template : `a?.`string``
- Constructor or Template Literal in/after Optional Chain: `new a?.b()`, `a?.b`string``
- _Assignment_: `a?.b = c`
- Super: `super?.()`, `super?.foo`

<aside>
🔐 Q3. If you use <button type="submit"> when you use <form>, Redux data is initialised. Explain why.

</aside>

Because we use <button type='submit>, if the button is clicked while it is inside<form>, the input data will be captured by onSubmit. In addition to being captured by onSubmit, the data will also be captured by redux. It’s equal to method .serialize() in javascript to get the entire value from each <input> in <form>, and to call the value we can initialised in local or global component.

<aside>
🔐 Q4. What method do you have to use to maintain the data within Redux after refreshing?

</aside>

If we want to keep the data in Redux, we can use the package (Redux persist). To customize the dispatch function, Redux employs a special add-on. Redux Persist is a popular library for adding persistence to the store. We don't need to write any persistence code in actions or reducers because the library (redux persist) will save the store automatically whenever the status changes.

[redux-persist - npm (npmjs.com)](https://www.npmjs.com/package/redux-persist)

[10/31] team presentation screenshot

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb35d7f6-2ac0-4237-96a7-e8f3659eb2ed/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6b0e64c-2f5c-4590-8c64-3e4124102103/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98cf8d7f-b657-49fb-a9cf-825e9568dcda/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f631c97a-8535-4705-bbad-852cea933df6/Untitled.png)

# DIY Section

<aside>
🔑 Q1. Why we need to use functional update in useState?

</aside>

If the new state is computed using the previous state, you can pass a function to `setState`
. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of `setState`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0588026a-68e3-459a-a477-9659aa0b6afa/Untitled.png)

The ”+” and ”-” buttons use the functional form, because the updated value is based on the previous value. But the “Reset” button uses the normal form, because it always sets the count back to the initial value.

and what is the problem ?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4bb2eac-60d2-498f-837d-96b50eec28a3/Untitled.png)

when we click on that button we expect that each setNumber will executed individually , but is processed as a batch, so it will only processed once. but if we do this

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dda92dc-940a-4a6a-a90f-6e92832ce874/Untitled.png)

it will executed sequentially each setNumber. it can happen if we click the button again before the component re rendered .

<aside>
🔑 Q2. What is the React lifecycle?

</aside>

Each React component has a lifecycle that you can monitor and manipulate through its three major phases. Mounting, updating, and unmounting are the three stages.

<aside>
🔑 Q3. What is query string react?

</aside>

Query strings are commonly used to retrieve information from page URLs. It can then be accessed for further functioning web application functionalities and is a part of the URL or full query. It enables the transmission of data using parameters as key-value pairs.

<aside>
🔑 Q4. What’s the difference between useEffect and useState? And why when we use useState instead of useEffect and it works fine for displaying data? For ex in: `React.useState(() =>getMovies(), [])`

</aside>

To put it simply, both `useState` and `useEffect` enhance functional components to make them do things that classes can but functional components (without hooks) cannot:

- `useState` allows functional components to have **state**, like `this.state` in class components.
- `useEffect` allows functional components to have **lifecycle methods** (such as `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`) in one single API.
- When a function is passed to `useState`, this is signaling to React to use [lazy initialization](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state) - the function will be invoked to calculate the initial value only when the component mounts. If the value to be put into state can be calculated/retrieved *synchronously*, this is probably the best design pattern to use - it's short and doesn't require you to later differentiate between whether the state value is undefined or populated.
- The time to use `useEffect`is when the value to be populated *can't* be computed synchronously, in which case the best approach is to have both `useState` (for the state) and `useEffect`(to indicate that you want to run a function to retrieve the state value just once).

When we implemented `React.useState(() =>getMovies(), [])`, `useEffect`is more suited for the task because it doesn't have a return value (unlike `useState`), and is more flexible, because it does accept a dependency array. `useEffect`much more clearly indicates to readers of the code "This callback should run only when the dependency array changes."

<aside>
🔑 Q5. What is URI (URL, URN)?

</aside>

A Uniform Resource Identifier (URI) is a string of characters that is used on the Internet to identify a name or a resource.

A URI is a string that identifies a resource by its location, name or both. URL and URN are two specializations of URI.

A Uniform Resource Locator (URL) is a subset of a Uniform Resource Identifier (URI) that specifies where an identified resource can be found and how to access it. A URL specifies how to obtain the resource. It does not have to be an HTTP URL (http://), but it can also begin with ftp:/ or smb:/, indicating the protocol used to obtain the resource.

A Uniform Resource Name (URN) is a URI that uses the URN scheme and does not imply that the identified resource is available. URNs (names) and URLs (locators) are both URIs, and the same URI can be both a name and a locator.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7effdd4-9af4-4f1f-b666-fe869b0fc7b7/Untitled.png)

# Team 8

<aside>
🔐 Q1. Component A is subscribing Redux store. 
If the data saved in Redux has changed, (Let’s say that the variable that A is subscribing has changed) in what process does component A go through to get the changed variable? Demonstrate the flow (use pictures, presentation slides, hand-drawn, etc)

</aside>

By using useSelector() method which is a function that takes the current state as an argument and returns whatever data you want from it. In other words, it simply listens to changes in the state. It also allows us to store the return values inside a variable within the scope of functional components instead of passing them down as props.

![Screenshot 2022-10-31 at 20.44.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/929a16b5-7273-4716-a1db-1034ec980210/Screenshot_2022-10-31_at_20.44.37.png)

Back to the question, the process component A goes through to get the changed variable is by allowing Store to pass the state using useSelector() method, by typing:

```jsx
useSelector(*state* => state.store.variable)
```

<aside>
🔐 Q2. What is optional chaining? In what circumstance do we use it?

</aside>

### What is Optional Chaining?

Optional Chaining is actually an operator shown as question mark and a dot (?.) that permits reading of a value property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

### When We Use It?

Optional Chaining used when we want to access a value property located deep within a chain of connected object. By using optional chaining we can speed up the development because it’s so handy and easy to type rather than other method.

<aside>
🔐 Q3. If you use <button type="submit"> when you use <form>, Redux data is initialised. Explain why.

</aside>

It is because value is provided on initialValues prop or reduxForm() config paramater so when the submit button is pressed the value is processed trough the form and the initialValues will initialize the value and loaded into the form state.

<aside>
🔐 Q4. What method do you have to use to maintain the data within Redux after refreshing?

</aside>

The best way to maintain the data within Redux refreshing is you can use Redux Persist as a method, Redux Persist is a library, which developers can save the Redux store in persistent storage, for example, the local storage. Therefore, even after refreshing the browser, the site state will still be preserved. Redux Persist also includes methods that allow us to customize the state that gets persisted and rehydrated, all with an easily understandable API.

`$ yarn i redux-persist` → Install The Redux First

First, we’ll add Redux Persist to our app with the following command:

```
$ npm i redux-persist
```

```jsx
import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import configureStore from "./store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// action creator
function updateText(text) {
  return {
    type: "UPDATE",
    text,
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const { store, persistor } = configureStore();

class App extends React.Component {
  onUpdateText = (e) => {
    this.props.dispatch(updateText(e.nativeEvent.target.value));
  };

  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <input value={this.props.text} onChange={this.onUpdateText} />
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(this.props.foo, undefined, 2)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.form.text,
  foo: state.form.foo,
});

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
```

[10/31] team presentation screenshot

Upload here by 9:30!

![WhatsApp Image 2022-10-31 at 21.50.51.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a250f1f9-be17-451a-8549-ce52ca96de5e/WhatsApp_Image_2022-10-31_at_21.50.51.jpeg)

# DIY Section

<aside>
🔑 Q1. In ReactJS, we can use “CSS-in-JS” solutions when building in modern front-end frameworks like **styled-component**. But what are the differences between the styled-component and the "traditional" CSS stylesheets? (Irfan)

</aside>

One of the characteristics of styled-components that benefits us is no longer having to worry about the selector names existing in a global scope. Other than that, we can also access any props passed to the component, so we can create reusable and customizable components.

On the other hand, CSS is universal and it doesn't really matter how it renders the interface making it great for collaboration that has legacy CSS and is migrating over to a different framework. Also, The global scope in CSS means that every style definition must have a unique selector name.

<aside>
🔑 Q2. what is middleware? How to add multiple middlewares to Redux? (Ferny)

</aside>

Middleware is software that enables one or more kinds of communication or connectivity between two or more applications or application components in a distributed network. By making it easier to connect applications that weren't designed to connect with one another - and providing functionality to connect them in intelligent ways - middleware streamlines application development and speeds time to market.

For adding multiple middlewares to Redux, you can use applyMiddleware by which the developer can pass each piece of middleware as the new or another argument. As per your preferences, you just need to pass every single piece of middleware.

For instance, one can add the Redux Thunk and the logger middleware as the argument just as below:

import { createStore, applyMiddleware } from 'redux'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

<aside>
🔑 Q3. Is keeping all of the component states in the Redux store necessary? What are Redux forms, and how do you use them? What are the main characteristics? (Salsabila)

</aside>

Basically, all component states don’t need to be kept in the Redux store. The necessary one is we need to keep our application state as little as possible. Thus, we should only do it if it makes a difference to us or if it makes using Dev Tools easier.

Redux Forms, which are available in both React and Redux, allow a form in React to use Redux to store all of its states. In HTML5, we can utilise them with raw inputs. Redux forms are compatible with various UI frameworks, including Material UI, React Widgets, React Bootstrap, etc.

The following are the main characteristics of Redux forms:

- The Redux store ensures the persistence of field data.
- Validation and submission (synchronous/asynchronous).
- Field values are formatted, parsed, and normalised.

Notes : Redux is frequently used in conjunction with React. However, we can use the bindings it provides in conjunction with Angular, Vue, Meteor, and other frameworks.

<aside>
🔑 From the lecture notes or even a self research we learned about react js, describe how **event is handled** in react?

</aside>

The event handlers in React will be passed instances of SyntheticEvent to solve cross-browser compatibility issues. As we mentioned earlier, SyntheticEvent is React’s cross-browser wrapper around the browser’s native event. The synthetic events have the same interface as the native ones but they work identically across all browsers.

However, React doesn’t actually attach events to the child nodes themselves. Instead, it uses a single event listener in order to listen to all events at the top level which. Not only is this great for the performance but it also means that React doesn’t have to keep track of the event listeners when updating the DOM.

<aside>
🔑 Q5. In directing users to a certain page using react-router-dom, we usually use “**path**” and “**exact path**” attributes to determine the URL link. What is the main difference between using route path and route exact path? (Irfan)

</aside>

In creating multiple URLs, we may find paths that have similar names. That’s when we should consider using the ‘exact path’. If we have a route that is nested to another route, for example, /post and /post/create routes, the /post route should be written inside the ‘exact path’ attribute. The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an exact match to the current URL.

```jsx
<Routes>
  <Route exact path="/post" element={<Post />} />
  <Route path="/post/create" element={<Create />} />
</Routes>
```

# Team 9

<aside>
🔐 Q1. Component A is subscribing Redux store. 
If the data saved in Redux has changed, (Let’s say that the variable that A is subscribing has changed) in what process does component A go through to get the changed variable? Demonstrate the flow (use pictures, presentation slides, hand-drawn, etc)

</aside>

There are 3 important things you need to know when using Redux. State, Action, reducer, and Store.

State is where you defined your variables

Action will be called when your components want something happened into the state

reducer is something that happened when the action is called. reducer will take the action, execute that single action on the old state and gives us back a new state. when we get back our new state, this state will be stored in state store

Store has one simple task, store our state

![image_2022-10-31_202221792.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f056b7d-d66f-4f50-ba76-7cdb02f6128d/image_2022-10-31_202221792.png)

whenever the state is updated and therefore the new status is passed to the store. The store will automatically send it to the component who subscribe the store and the application (UI) will updated

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/829229d2-ea83-4af8-b6a6-406e079d4e50/Untitled.png)

<aside>
🔐 Q2. What is optional chaining? In what circumstance do we use it?

</aside>

Optional Chaining is a method to check an error from nested object properties.

Nested object properties in simple term are objects that is inside of another object. Like the example below.

- Example Nested object

  ```jsx
  var menu = {
    ayam_goreng: {
      nama: "Ayam Goreng",
  		harga: 7000,
  		tersedia: true
    }
  	lele_goreng : {
  		nama: "ikan lele Goreng",
  		harga: 7000,
  		tersedia: true
  	}
  };

  // In this case, ayam_goreng and lele_goreng are nested object properties.
  ```

Whenever we encounter an error, we will try to look up which part is wrong and which one that works properly. Sometimes we may call a property from an object that may not exist. To check whether that property exists or not, we can use optional chaining. Optional chaining will return undefined if it doesn’t exist or type error if it is different type.

The symbol is “?”, we put the question marks after the object name.

- Example Optional chaining

  ```jsx
  const rumah_makan = {
    ayam: {
      nama: "Ayam Goreng",
    },
  };

  // With optional chaining
  console.log(rumah_makan?.ayam); // {nama : 'Ayam Goreng'}
  console.log(rumah_makan.ayam?.nama); // Ayam Goreng
  console.log(rumah_makan.ayam?.harga); // undefined, no property called "harga" in object "ayam"
  console.log(rumah_makan.ikan?.nama); // undefined, no property called "nama" in object "ikan"

  // Not optional chaining
  console.log(rumah_makan.ikan.nama); // it will return Type script error
  ```

  ![week3-teamtask-q2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c9a3b6b-81a0-4326-acd9-f4772a2c3df5/week3-teamtask-q2.png)

Optional Chaining also works for a function object.

- Example Optional chaining with function call

  ```jsx
  let contoh_fungsi_satu = () => console.log("satu");
  let contoh_fungsi_dua = {
    isi_dua() {
      console.log("dua");
    },
  };
  let contoh_fungsi_tiga = {};

  contoh_fungsi_satu?.(); // satu

  contoh_fungsi_dua.isi_dua?.(); // dua

  contoh_fungsi_tiga.isi_tiga?.(); // No error messages
  contoh_fungsi_tiga.isi_tiga(); // Error because wrong data type.
  // user3.dog is not a function.
  // This one isn't an optional chaining

  contoh_fungsi_empat.isi_empat?.(); // Error because not declared before.
  ```

  ![week3-teamtask-q2b.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cae690b5-d8df-4b07-88a7-043344d27fe1/week3-teamtask-q2b.png)

<aside>
🔐 Q3. If you use <button type="submit"> when you use <form>, Redux data is initialised. Explain why.

</aside>

if we click button type submit, form will be send data to form-handler on the server and also the page will refreshing. so, redux data is initialised

<aside>
🔐 Q4. What method do you have to use to maintain the data within Redux after refreshing?

</aside>

If you want maintain the data within Redux after refreshing, it's best to do this using redux-persist on Redux Middleware. Redux-Persist is a package for persisting redux state when it is connected to the store. redux-persist provides different storage to persist data like local storage, session storage or async storge.

Redux persist will adding data to local storage and the page can load data after refreshing

How to use Redux-persist?

first We need the combineReducers function to group up all the reducers into one so that we can pass it to the redux-persist. after that, We need to create the persist object config that will be stored to the storage. Then combine the reducers and create a persistent reducer. Assign the persist reducer to the reducers. Just like *react-redux* gives us Provider component that will wrap the whole app, similarly we get PersistGate from redux-persist. We need it to wrap around the whole app. The persistStore will configure the store object to become compatible when we pass it to the PersistGate component. Finish, you have maintain the data within Redux after refreshing.

[10/31] team presentation screenshot

![Screenshot (269).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f163176-ec5f-4e0e-929d-3fb6785b1016/Screenshot_(269).png>)

Upload here by 9:30!

# DIY Section

<aside>
🔑 Q1. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

<aside>
💡 Q1. When does useEffect hooks executed? what will happen if you use 2 useEffect with same array inside of the depedency ?

</aside>

useEffect is executed whenever a react component is rendered.

In case when we have duplicates useEffect that works on 2 same array depedency, it will run both of the useEffect.

- Example for 2 useEffect with same array depedency

  ```jsx
  import React, { useEffect, useState } from "react";

  const App = () => {
    const [isi, setIsi] = useState("");

    // First use effect for isi
    useEffect(() => {
      console.log("first useEffect", isi);
      return () => {
        console.log("first useEffect return", isi);
      };
    }, [isi]);

    // Second use effect for isi
    useEffect(() => {
      console.log("second useEffect", isi);
      return () => {
        console.log("second useEffect return", isi);
      };
    }, [isi]);

    return (
      <div>
        <input
          value={isi}
          onChange={(event) => {
            setIsi(event.target.value);
          }}
        />
      </div>
    );
  };

  export default App;
  ```

The results are interesting. The user will input “Ayam Goreng” inside the input field, and these are the results.

![week3-teamtask-q2c.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ffed26f-6007-451d-ba94-27b516147e5e/week3-teamtask-q2c.png)

<aside>
🔑 Q2. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

<aside>
💡 Q2. ReactJS data flow with unidirectional flow (one-way). The other data flow system is Bi-directional. What is it? what are the advantage and the disadvantage from bi-directional flow compared to unidirectional flow.

</aside>

There are other JavaScript frameworks that use different data flow like Angular which use Bi-directional. Bi-directional mean if there is a change in data from one side, other side will quickly capture the newest change and show it on the other side. Unlike unidirectional where it is only works with one way flow, bi-directional can affect each other.

Bi-directional flow will have better and faster data flow. Since any change will be automatically transferred to other side.

However, in a webpage that rely more on front-end, the data flow maybe confusing. Some part is harder to maintain. Whereas unidirectional flow has known flow, we will know for sure how the data move and easily fix an error compared to bi-drectional.

<aside>
🔑 Q3. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

What is Redux Middleware?

Redux middleware is a **snippet of code that provides a third-party extension point between dispatching an action and the moment it reaches the reducers**

Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action. Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.

<aside>
🔑 Q4. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

Q4. What is Redux?

ans: Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.

<aside>
🔑 Q5. Choose a key keyword for this week. Create a question that summarises the keyword and answer the question :-)

</aside>

Q5. Is Redux can only be used with React JS?

No, it is not true that Redux can only be used with React. Redux is being used as a data store for lots of UI layers. There are bindings available in Redux for React, Angular, Angular 2, Vue, etc.
