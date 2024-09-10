import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqnavigationComponent } from './tqnavigation.component';

describe('TqnavigationComponent', () => {
  let component: TqnavigationComponent;
  let fixture: ComponentFixture<TqnavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqnavigationComponent]
    });
    fixture = TestBed.createComponent(TqnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
