import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child22Component } from './child22.component';

describe('Child22Component', () => {
  let component: Child22Component;
  let fixture: ComponentFixture<Child22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
