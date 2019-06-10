import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinersListComponent } from './winers-list.component';

describe('WinersListComponent', () => {
  let component: WinersListComponent;
  let fixture: ComponentFixture<WinersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
