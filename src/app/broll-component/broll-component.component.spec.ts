import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrollComponentComponent } from './broll-component.component';

describe('BrollComponentComponent', () => {
  let component: BrollComponentComponent;
  let fixture: ComponentFixture<BrollComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrollComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrollComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
