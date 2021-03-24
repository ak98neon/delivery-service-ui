import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuComponentComponent } from './manu-component.component';

describe('ManuComponentComponent', () => {
  let component: ManuComponentComponent;
  let fixture: ComponentFixture<ManuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
