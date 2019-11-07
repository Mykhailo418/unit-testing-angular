import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';

describe('AppComponent - Integration Tests', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TodosComponent],
      imports: [
        BrowserModule, ReactiveFormsModule, RouterTestingModule.withRoutes(routes)
      ],
      //schemas: [NO_ERRORS_SCHEMA] // ignore errors that related to unrecognized components in html
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should render current number', () => {
    component.currentNum = 20;
    component.increment();
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('button.btn'));
    expect(btn.nativeElement.innerText).toContain(21);
  });
  it('should button be green if current number is 1', () => {
    component.currentNum = 1;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('button.btn'));
    expect(btn.classes['btn-success']).toBeTruthy();
  });
  it('should increase current number after clicking on button', () => {
    let btn = fixture.debugElement.query(By.css('button.btn'));
    btn.triggerEventHandler('click', null);
    expect(component.currentNum).toBe(1);
  });
  it('should have a router outlet', () => {
    const el = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(el).not.toBeNull();
  });
  it('should have a router link to todos page', () => {
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = links.findIndex(link => link.properties['href'] === '/todos')
    expect(index).toBeGreaterThan(-1);
  });
});
