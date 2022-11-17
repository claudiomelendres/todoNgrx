import { Component, OnInit } from '@angular/core';
import * as actions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;

  newTodos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe((filtro) => {
      console.log('filtro-->:', filtro);
    });
  }

  toggleAll() {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(actions.todos({ estado: this.completado }));
  }

  addTasks() {
    // console.log('add tasks');
    // console.log(this.newTodos);
    this.newTodos = [
      new Todo('Caminar'),
      new Todo('Bailar'),
      new Todo('Cantar'),
      new Todo('Beber'),
    ];
    this.store.dispatch(actions.fill({ newTodos: this.newTodos }));
  }

  selectRandom() {
    this.store.dispatch(actions.selectRandom({ position: 1 }));
  }
}
