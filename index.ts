interface TodoTask { // structure of todo
  created: string;
  task: string;
  status: boolean;
  id: number;
}

interface ApiResponse<T> { // response from endpoint
  isSuccess: boolean;
  responseData: Promise<T>;
}

type TodoResponseType = TodoTask[] | string; 

interface TodoOperations { 
  API_ENDPOINT: string;
  fetchAll(): Promise<TodoResponseType>;
  fetchById(id: number): Promise<TodoResponseType>;
  createNew(
    task: string,
    status: boolean
  ): Promise<TodoResponseType>;
  deleteById(id: number): Promise<string>;
  updateById(
    id: number,
    task: string,
    status: boolean
  ): Promise<TodoResponseType>;
}

class Todo implements TodoOperations {
  readonly API_ENDPOINT: string;
  constructor() {
    this.API_ENDPOINT = "https://todo-endpoint.vercel.app/todos/";
  }
  public async fetchAll() { // returns all the todos as an array
    try {
      const todos = (await fetch(this.API_ENDPOINT).then((response) =>
        response.json()
      )) as ApiResponse<TodoResponseType>;
      return todos.responseData;
    } catch (error: unknown) {
      throw error;
    }
  }
  public async fetchById(id: number) { // return the todo matching the specified the id
    try {
      const todo = (await fetch(`${this.API_ENDPOINT}${id}`).then(
        (response) => response.json()
      )) as ApiResponse<TodoResponseType>;
      return todo.responseData;
    } catch (error: unknown) {
      throw error;
    }
  }
  public async createNew(task: string, status: boolean) { // creates a new todo and return it
    try {
      const newTodo = (await fetch(`${this.API_ENDPOINT}create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, task }),
      }).then((response) => response.json())) as ApiResponse<TodoResponseType>;
      return newTodo.responseData;
    } catch (error: unknown) {
      throw error;
    }
  }
  public async deleteById(id: number) { // deletes an existing todo by specified id
    try {
      const deletedTodo = (await fetch(`${this.API_ENDPOINT}delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())) as ApiResponse<string>;
      return deletedTodo.responseData;
    } catch (error: unknown) {
      throw error;
    }
  }
  public async updateById( // updates the status and task of an existing todo by specified id
    id: number,
    task: string,
    status: boolean
  ) {
    try {
      const updatedTodo = (await fetch(`${this.API_ENDPOINT}update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, task }),
      }).then((response) => response.json())) as ApiResponse<TodoResponseType>;
      return updatedTodo.responseData;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default Todo;
