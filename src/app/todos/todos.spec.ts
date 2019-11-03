import {TodosComponent} from './todos.component';
import {TodosService} from './todos.service';
import {of, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodosService;

  beforeEach(() => {
    service = new TodosService(null);
    component = new TodosComponent(service);
  });

  it('should set todos from the service', () => {
    const todosFake = [1, 2];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todosFake);
    });
    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todosFake);
  });
  it('should call add todo method', () => {
    let spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });
    component.addTodo(null);
    expect(spy).toHaveBeenCalled();
  });
  it('should add the new todo', () => {
    const todo = 99;
    let spy = spyOn(service, 'add').and.returnValue(of([todo]));
    component.addTodo(todo);
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  it('should save error message', () => {
    const errMsg = 'this is an error';
    let spy = spyOn(service, 'add').and.returnValue(throwError(errMsg));
    component.addTodo(null);
    expect(component.error).toBe(errMsg);
  });
});
