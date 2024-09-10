import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqfooterComponent } from './tqfooter.component';

describe('TqfooterComponent', () => {
  let component: TqfooterComponent;
  let fixture: ComponentFixture<TqfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqfooterComponent]
    });
    fixture = TestBed.createComponent(TqfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
