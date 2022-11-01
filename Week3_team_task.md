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
