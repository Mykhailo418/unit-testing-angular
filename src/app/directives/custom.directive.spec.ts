import { Component } from '@angular/core';
import { CustomDirective } from './custom.directive';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p appCustom="blue">first</p>
    <p appCustom>second</p>
  `
})
class DirectiveHostCompoennt{}

describe('CustomDirective', () => {
  let fixture: ComponentFixture<DirectiveHostCompoennt>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostCompoennt, CustomDirective]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostCompoennt);
    fixture.detectChanges();
  });

  it('first element should be blue ', () => {
    let p = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(p.nativeElement.style.backgroundColor).toBe('blue');
  });
  it('second element should be default color ', () => {
    let p = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = p.injector.get(CustomDirective);
    expect(p.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
