import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
 private todos: any[] = [];

 constructor(private http: HttpClient){}

  getTodos(){
    return of(this.todos);
  }
  add(item){
    this.todos.push(item);
    return this.getTodos();
  }
  delete(id){
    this.todos.splice(id, 1);
    return this.getTodos();
  }
}
