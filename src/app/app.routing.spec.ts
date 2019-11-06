import {routes} from './app-routing.module';
import { TodosComponent } from './todos/todos.component';

describe('App Routing', () => {
  it('should includes todos router', () => {
    expect(routes).toContain({path: 'todos', component: TodosComponent});
  });
});
