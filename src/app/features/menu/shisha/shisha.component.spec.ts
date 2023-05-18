import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShishaComponent } from './shisha.component';

describe('ShishaComponent', () => {
  let component: ShishaComponent;
  let fixture: ComponentFixture<ShishaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShishaComponent]
    });
    fixture = TestBed.createComponent(ShishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
