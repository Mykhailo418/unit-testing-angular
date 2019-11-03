import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent();
  });
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  it('should increment current number', () => {
    // Arrange
    const component = new AppComponent();
    // Act
    component.increment();
    // Assert
    expect(component.currentNum).toBe(1);
  });
  it('should decrement current number', () => {
    component.decrement();
    expect(component.currentNum).toBe(-1);
  });
});
