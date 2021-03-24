import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemsComponentComponent } from './favorite-items-component.component';

describe('FavoriteItemsComponentComponent', () => {
  let component: FavoriteItemsComponentComponent;
  let fixture: ComponentFixture<FavoriteItemsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteItemsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
