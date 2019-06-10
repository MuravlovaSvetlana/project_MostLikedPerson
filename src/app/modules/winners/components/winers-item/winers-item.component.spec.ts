import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinersItemComponent } from './winers-item.component';

describe('WinersItemComponent', () => {
  let component: WinersItemComponent;
  let fixture: ComponentFixture<WinersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
