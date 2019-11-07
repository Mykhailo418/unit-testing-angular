import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  template: '',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  error: string;

  constructor(private service: TodosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.service.getTodos().subscribe(todos => this.todos = todos);
    if (this.route){
      this.route.params.subscribe(p => {
        if (p['id'] === 0)
          this.router.navigate(['not-found']);
      });
    }
  }

  addTodo(item){
    this.service.add(item).subscribe(
      todos => this.todos = todos,
      err => this.error = err
    );
  }
  deleteTodo(id){
    if (confirm('Delete?'))
      this.service.delete(id).subscribe(todos => this.todos = todos);
  }
  navigateTodo(){
    this.router.navigate(['todos']);
  }
  getTodosAsync(){
    this.service.getTodosPromise().then(todos => this.todos = todos);
  }
}
