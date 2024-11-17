# TODO App

# Task 1

## Backend

### Files
- /repository/todo.js
- /service/todo.js
- server.js

1. Added to addTodo function to the /repository/todo.js. It pushes the new task data added to the exsisting toDoList.
2. Similarly added this to the todoServive in /service/todo.js.
3. In server.js, I added a post request to deal with submitting task data.
  
## Frontend

1. Created form component (AddToDo.js) to allow the user to input their task on to the list.
2. Error handling so the user knows they need to write in the input to add task.
3. User will be able to type in their task and add it to the list.
4. User able to hightlight the task by hovering over it.

I had to create another action called addtodo action to deal with the post request in the frontend.

In the AddToDo.js, I used dispatch to send actions to the Redux store. This was my first experience using dispatch, and it allowed me to understand how to manage state changes in Redux application. 

When a new task is added through the form, the dispatch function is used to send the addTodo action to the Redux store, which then updates the state with the task item. 

## What I learnt

### What I Learned from This Project

- **Creating API Endpoints**:
  - Implemented GET and POST routes to fetch and add todo items.
  - Validated request data and handled errors appropriately in the API.

- **In-Memory Data Storage**:
  - Used an in-memory data structure to store and manage todo items.
  - Understood the importance of data persistence and potential improvements for production environments.

- **Service Layer Abstraction**:
  - Created a service layer to abstract the interaction with the data repository.
  - Ensured clean separation of concerns and improved code maintainability.

- **Using Redux for State Management**:
  - Integrated Redux to manage the application state.
  - Defined actions and reducers to handle fetching and adding todos.

- **Dispatching Actions**:
  - Gained experience in managing state changes and updating the UI accordingly.

- **Form Handling and Validation**:
  - Implemented a form in React to add new todo items.
  - Added validation to ensure that the task input is not empty and meets length requirements.

- **Connecting React Components to Redux**:
  - Connected React components to the Redux store using the `connect` function and hooks like useDispatch

- **Styling Components**:
  - Applied CSS to style the todo list and form components.
  - Improved the visual appearance and user experience of the application.


## Starting the application

- Backend: (In the backend folder)
```shell
npm install
npm start # Start the server in the 9091 port
```

- Frontend: (In the root folder)
```shell
npm install
npm start # Starts the app in http://localhost:3000
```

## Backend

You can find it in the `/backend` directory. It's built in Express and stores the TODO items in memory.

* GET /api/todo

![get todo picture](docs/get_todo_endpoint.png "Get TODO")

## Frontend

You can find it in the `src` folder. It has been build with React and Redux. The list of todos are fetched asynchronously from the backend via Redux-thunk.

You can assume the backend is running under `http://localhost:9091/api/todo`


![get todo FE](docs/get_todo_frontend.png "GET todo frontend")
