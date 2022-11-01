# React Mastery_Personal Task

<aside>
💡 **Goal : To re-make My Todo List**

</aside>

- Let’s make My Todo List one more time, but this time using `react-router-dom`, `styled-components`, `redux`!
- If you don’t remember the task last week, here is the quick link:

<aside>
⚙ **Features: These are the features that you must make**

</aside>

- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

<aside>
📌 **Requirements : These are the requirements**

</aside>

- General
  - **Manage Global State for todo data, using Redux.**
  - Implement todo module with `**Ducks pattern**`.
  - Feel free to implement component structure as you like, but you must explain the reason why in `README`.
- Main Page
  - Feel free to put your artistic touch on design and layout ✨
  - **Divide Todo status into two** - “Done” and “On-going”. It doesn’t have to be a vertical layout as in the example, you can be as creative as you want!
    - Example video
      [화면 기록 2022-06-27 오후 8.20.14.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d5a8f8-6e73-41e3-a7c8-0f83e2cdb16e/화면_기록_2022-06-27_오후_8.20.14.mov)
  - Make sure that title `input` and content `input` **returns to blank** when Todo is added.
    - Example video
      [화면 기록 2022-06-27 오후 8.16.44.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6c4b646-58d7-43ee-b942-15046363cb1c/화면_기록_2022-06-27_오후_8.16.44.mov)
  - When you move to page detail when there is an `input` value, make sure it resets when you return to the main page.
    - Example video
      [화면 기록 2022-07-27 오전 1.15.52.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6bc8bc8-96d0-46d1-9070-f5e030495cab/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.15.52.mov)
  - If the status of Todo content is `true`, it should show “**cancel**”, and if the status of Todo content is `false`, it should show “**done**”.
  - Limit the screen size to maximum **`1200px`** and minimum `**800px**`. Align the contents in the center of the page.
    - Example Image
      ![Untitled (11).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d74ea8be-0c78-4305-94b6-2322dcb924b2/Untitled_(11).png>)
  - When you click `page detail`, move to the page detail of Todo. Refer to next toggle to see what should be shown in the page detail.
    - Example video
      [화면 기록 2022-07-03 오후 11.33.01.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/061877e5-7299-4c29-8c92-6279f079814c/화면_기록_2022-07-03_오후_11.33.01.mov)
- Page Detail
  ![Untitled (10).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5ffc7f9-1130-4215-a7bb-4980d84e114a/Untitled_(10).png>)
  - Feel free to make a design/ layout as you like - but must show the following components:
    - Todo ID
    - Todo Title
    - Todo Content
    - `go back` button
      - Implement `go back` button. When you click the button, you return to the main list page.
- 🚫 Not allowed

  - When using a map, you must include a key.
  - You are NOT ALLOWED to use an index in `map`.
  - DO NOT use `todos.length` when creating a Todo ID. Think about what problems may be caused when using `todos.length`

- Example video - English translation key
  ![스크린샷 2022-10-28 오후 6.53.17.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff17cc0e-a028-49f8-b411-d89e535f7cac/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.53.17.png)

<aside>
🔔 N**otices**

</aside>

- It is optional to have `initialState` of todos module. **In the example video, Todo exists as `initialState`.**

```jsx
const initialState = [
  {
    id: 1, // all id must be unique.
    title: "watch react lectures",
    body: "chapter 1 - chapter 12",
    isDone: false,
  },
  {
    id: 2, // all id must be unique.
    title: "eat lunch",
    body: "what should I eat..?",
    isDone: false,
  },
];
```

<aside>
🔑 **Hint : Is it too difficult?**

</aside>

- Hint
  - There are 4 action creators that are created in the example.
    - `addTodo`, `deleteTodo`, `toggleStatusTodo`, `getTodoById`
  - flex is used for center alignment.
- Example website : [http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/](http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/)

<aside>
☝ **Submit GitHub link**

</aside>
