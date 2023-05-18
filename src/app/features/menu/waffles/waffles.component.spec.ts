import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WafflesComponent } from './waffles.component';

describe('WafflesComponent', () => {
  let component: WafflesComponent;
  let fixture: ComponentFixture<WafflesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WafflesComponent]
    });
    fixture = TestBed.createComponent(WafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
