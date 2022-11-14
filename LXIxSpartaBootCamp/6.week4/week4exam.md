1.a. High Order Component (HOC) is a feature from react to re-use existing components and we can add extra feature like passing variables, functions, styling, add some logical process. Use "with" Prefix. It feels like adopting a parent component.

1.b. Example code

```
//src/hoc/withColor.jsx

import React from 'react'

const withColor = (WrappedComponent) => {
  // passing a new variable
  const color = 'red'
  // return a new component
  return () => {
    return (
		<div style={{ color }}>
			<WrappedComponent color={color}/>
		</div>
    )
  }
}

export default withColor
```

```
//src/pages/Test.jsx

import withColor from "../hoc/withColor"

const Test = () => {
  return (
    // move these to withColor as WrappedComponent
    <div>
      Ayam
    </div>
  );
}

export default withColor(Test)
```

Normally Test component will show a text "Ayam" with default color black. But if we change "Test" to "withColor(Test)", we will add a new wrapper to the test which give a new div with red color style.

#

2.a. Reconciliation is a smart algorithm to reduce how many stuff re-rendered. React will re-render whenever we have change in an element. For example will re-render when we change "loading..." text to an image. But sometimes we only change text to text. For example "loading..." to "loaded". In this case, instead of changing the whole element, react only change the attribute value.

2.b. Reconciliation has the capabilities to reduce what react re-render. With less rendering, it will take less processing resource and make the application run faster.

#

3.a. Flux is an application architecture. Application will works in specific way and pattern and transfering data in a cycle. First starts from view or user interface. User will send an action from dispatcher to store. Store will do some logical operation and then it will send some feedback to the views. All in circular cycle. Sometimes we add reducer, middleware like thunk in the process.

3.b. MVC stands for Model, View, Controller. Different type of application architecture. in Flux we have clear circular pattern. View->dispatcher->store-> back to View. However in MVC communication may only occur between Controller and View. It will be something like View <--> Controller <--> Model. Controller will manage both view and model. View will display the user interface and send back any input from the user. Model will connect the controller with additional sources for example database.

3.c.

#

4.a. Redux is a react library for storing some data and make it accessible to any components. Without redux we can still transferring data between components with props to children components, however in big structure, it will be hard and lot of unwanted props drilling.

4.b. We use redux when we want to transfer a data from one grandchildren component to another grandchildren component. If we don't use redux, we will put the state in the main component, First it will transferring props to children, then grandchildren. After it receive the change, it will transfer the props to another children and then to that one another grandchildren.

4.c. Redux is far more popular based on the install number on npm trend which mean it will be easier to find help on internet. From several people opinion's, mostly said Redux has more complexity, harder to learn and use more line of code for simple application. However when we are exchanging lot of information, Redux will be better. It also has React Toolkit for maintaining the code.

#

5.a. Thunk is a feature from Redux. We will use it as middle-ware for asynchronous process. While the data is dispatching from user interface, middle-ware will take that data, transfer it directly to stores or process it for example for logging/record, AJAX request, etc.

#

6.a. Split the code to several part. Either with different component or different hooks/custom hooks. It will help for loading process and finding the error.

6.b. From the lecture notes, we already learned about custom hooks, separating button components or even simply make a children from the parent components.

Example
in past practice, we made folder for pages and it will collect the children component.

```jsx
function App() {
  return (
    <Layout>
      <Main>
        <Banner />
        <List>
          <CreateSearch />
        </List>
      </Main>
      <Footer />
    </Layout>
  );
}
```

each children are separated based on the feature. If we found an error, we can easily identify the error location and then works from that part.
