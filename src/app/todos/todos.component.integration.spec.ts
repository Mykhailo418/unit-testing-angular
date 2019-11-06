import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {TodosComponent} from './todos.component';
import {TodosService} from './todos.service';
import {of, Observable, empty} from 'rxjs';

class RouterStub {
  navigate(params){}
}

class ActivatedRouteStub {
  private obser: Observable<any> = of({});

  push(value: Observable<any>){
    this.obser = value;
  }

  get params(){
    return this.obser;
  }

  //params: Observable<any> = empty();
}

describe('TodosComponent - Integration Tests', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [HttpClientModule],
      providers: [
        TodosService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.debugElement.componentInstance;
    //fixture.detectChanges(); // delete this line because it couse run ngOnInit of component before spy methods run
  });

  it('should loads toods from the service', () => {
    let service = TestBed.get(TodosService);
    //let service = fixture.debugElement.injector.get(TodosService);
    const todosFake = [1, 2];
    spyOn(service, 'getTodos').and.returnValue(of(todosFake));
    fixture.detectChanges();
    expect(component.todos).toBe(todosFake);
  });
  it('should run navigation method', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.navigateTodo();
    expect(spy).toHaveBeenCalledWith(['todos']);
  });
  it('should navigate to no-found page if id is 0 or invalid', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push(of({id: 0}));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
