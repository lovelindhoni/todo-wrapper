# Todo-Endpoint Wrapper

This module provides a simple high level wrapper accessing the RESTful endpoint of my todo list. For more information visit the repo of [endpoint](https://github.com/lovelindhoni/todo-endpoint).

## Features

- Fetch all todos
- Fetch a todo by ID
- Create a new todo
- Delete a todo by ID
- Update a todo by ID
- Full typescript support

## Methods

| Method Name                                             | Parameters                                | Description                                                          |
| ------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| `fetchAll()`                                            | -                                         | Returns all the todos as an array.                                   |
| `fetchById(id: number)`                                 | id: number                                | Returns the todo matching the specified ID.                          |
| `createNew(task: string, status: boolean)`              | task: string, status: boolean             | Creates a new todo and returns it.                                   |
| `deleteById(id: number)`                                | id: number                                | Deletes an existing todo by the specified ID.                        |
| `updateById(id: number, task: string, status: boolean)` | id: number, task: string, status: boolean | Updates the status and task of an existing todo by the specified ID. |

## Usage

You can import the `Todo` class into your TypeScript file and create a new instance to interact with the todo list.

1. Install the todo-wrapper in your project:

   ```bash
   pnpm add github:lovelindhoni/todo-wrapper
   pnpm -i
   ```

2. Then import the module in your project

```typescript
import Todo from "todo-wrapper";
const todo = new Todo();
todo.fetchAll().then((response) => console.log(response));
todo
  .createNew("Install counter strike 2", false)
  .then((response) => console.log(response));
```


## License

This project is licensed under the MIT License.
