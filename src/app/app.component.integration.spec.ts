import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent - Integration Tests', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule, ReactiveFormsModule
      ],
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
});
