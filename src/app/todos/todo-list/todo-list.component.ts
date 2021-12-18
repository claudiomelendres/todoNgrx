import { Component, OnInit } from '@angular/core';
import {Todo} from "../models/todo.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {filtrosValidos} from "../../filtro/filtro.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  // @ts-ignore
  filtroActual: filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('todos').subscribe(value => this.todos = value)

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }

}
