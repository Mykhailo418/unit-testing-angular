import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent(new FormBuilder());
  });
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  it('should increment current number', () => {
    // Arrange
    const component = new AppComponent(new FormBuilder());
    // Act
    component.increment();
    // Assert
    expect(component.currentNum).toBe(1);
  });
  it('should decrement current number', () => {
    component.decrement();
    expect(component.currentNum).toBe(-1);
  });
  it('should create form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });
  it('control name should be required', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should get value via Event Emitter', () => {
    let value = null;
    component.valueChanged.subscribe(val => value = val);

    component.increment();
    component.emitValue();

    expect(value).not.toBeNull();
    expect(value).toBe(1);
  })
});
