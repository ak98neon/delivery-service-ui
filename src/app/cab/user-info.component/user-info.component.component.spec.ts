import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfo.ComponentComponent } from './user-info.component.component';

describe('UserInfo.ComponentComponent', () => {
  let component: UserInfo.ComponentComponent;
  let fixture: ComponentFixture<UserInfo.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfo.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfo.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
