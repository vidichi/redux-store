// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators, so we dont have to specify each time the type.
// this method does put the right type of action
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any){}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any){}
}

console.log(new AddTodo({}))
