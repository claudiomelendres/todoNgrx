import {createAction, props} from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear Todo',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
);

export const eliminar = createAction(
  '[TODO] eliminar Todo',
  props<{id: number}>()
);

export const todos = createAction(
  '[TODO] eliminar Todo',
  props<{estado: boolean}>()
);

export const borrarCompletados = createAction(
  '[TODO] borrar Completatos'
);
