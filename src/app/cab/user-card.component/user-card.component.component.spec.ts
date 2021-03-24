import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCard.ComponentComponent } from './user-card.component.component';

describe('UserCard.ComponentComponent', () => {
  let component: UserCard.ComponentComponent;
  let fixture: ComponentFixture<UserCard.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCard.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCard.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
