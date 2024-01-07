"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor() {
        this.API_ENDPOINT = "https://todo-endpoint.vercel.app/todos/";
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = (yield fetch(this.API_ENDPOINT).then((response) => response.json()));
                return todos.responseData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todo = (yield fetch(`${this.API_ENDPOINT}${id}`).then((response) => response.json()));
                return todo.responseData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createNew(task, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTodo = (yield fetch(`${this.API_ENDPOINT}create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status, task }),
                }).then((response) => response.json()));
                return newTodo.responseData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedTodo = (yield fetch(`${this.API_ENDPOINT}delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => response.json()));
                return deletedTodo.responseData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateById(// updates the status and task of an existing todo by specified id
    id, task, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedTodo = (yield fetch(`${this.API_ENDPOINT}update/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status, task }),
                }).then((response) => response.json()));
                return updatedTodo.responseData;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Todo;
