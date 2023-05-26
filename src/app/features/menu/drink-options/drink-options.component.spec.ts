import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOptionsComponent } from './drink-options.component';

describe('DrinkOptionsComponent', () => {
  let component: DrinkOptionsComponent;
  let fixture: ComponentFixture<DrinkOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkOptionsComponent]
    });
    fixture = TestBed.createComponent(DrinkOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
