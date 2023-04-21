import api from '$lib/api'
export interface Todo {
  todoID?: string;
  description: string;
  checked: boolean;

}

export type Todos = Todo[];

export class TodoClient {


  addTodo(todo: Todo) {
    const ctx = $api.createContext()

    return this.api.action.createAction(todo)
  }

  listTodos() {
    return this.api.action.getAction()

  }

  patchTodo(id: string, checked: boolean) {
    return this.api.updateAction({id,checked})
  }

  deleteTodo(id: string) {
    return this.api.deleteAction({id})

  }

  logout() {
    return this.api.logoutAction()

  }
}
