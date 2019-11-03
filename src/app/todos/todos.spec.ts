import {TodosComponent} from './todos.component';
import {TodosService} from './todos.service';
import {of} from 'rxjs';

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
});
