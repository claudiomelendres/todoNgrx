import { Action, createReducer, on} from '@ngrx/store';
import {borrarCompletados, crear, editar, eliminar, todos, toggle} from "./todo.actions";
import {Todo} from "./models/todo.model";


export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Ganar Musculo'),
  new Todo('dejar la Coca'),
  new Todo('alistar las maletas'),

] ;

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

  on(todos, (state, {estado}) =>
    state.map( todo => {
        return {
          ...todo,
          completado : estado
        }

    })
  ),

  on(borrarCompletados, (state) => {
    return state.filter(todo => !todo.completado )
  })

);


// @ts-ignore
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
