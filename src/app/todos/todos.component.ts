import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-todos',
  template: '',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(private service: TodosService){}

  ngOnInit(){
    this.service.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(item){
    this.service.add(item).subscribe(todos => this.todos = todos);
  }
  deleteTodo(id){
    this.service.delete(id).subscribe(todos => this.todos = todos);
  }
}
