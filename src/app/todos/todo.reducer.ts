import { Action, createReducer, on} from '@ngrx/store';
import {crear, editar, eliminar, toggle} from "./todo.actions";
import {Todo} from "./models/todo.model";

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Ganar Musculo'),
  new Todo('dejar la Coca'),
  new Todo('alistar las maletas'),

];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(toggle, (state, {id}) => {
    return state.map( todo => {

      if( todo.id === id) {
      return {
        ...todo,
        completado: !todo.completado
      }
      } else {
        return todo;
      }
    })
  }),

  on(editar, (state, {id, texto}) => {
    return state.map( todo => {

      if( todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),


  on(eliminar, (state, {id}) => {
    return state.filter(todo => todo.id != id)
  }),

);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
