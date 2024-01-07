interface TodoTask {
    created: string;
    task: string;
    status: boolean;
    id: number;
}
type TodoResponseType = TodoTask[] | string;
interface TodoOperations {
    API_ENDPOINT: string;
    fetchAll(): Promise<TodoResponseType>;
    fetchById(id: number): Promise<TodoResponseType>;
    createNew(task: string, status: boolean): Promise<TodoResponseType>;
    deleteById(id: number): Promise<string>;
    updateById(id: number, task: string, status: boolean): Promise<TodoResponseType>;
}
declare class Todo implements TodoOperations {
    readonly API_ENDPOINT: string;
    constructor();
    fetchAll(): Promise<TodoResponseType>;
    fetchById(id: number): Promise<TodoResponseType>;
    createNew(task: string, status: boolean): Promise<TodoResponseType>;
    deleteById(id: number): Promise<string>;
    updateById(// updates the status and task of an existing todo by specified id
    id: number, task: string, status: boolean): Promise<TodoResponseType>;
}
export default Todo;
