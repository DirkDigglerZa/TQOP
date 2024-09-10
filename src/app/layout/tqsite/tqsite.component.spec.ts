import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqsiteComponent } from './tqsite.component';

describe('TqsiteComponent', () => {
  let component: TqsiteComponent;
  let fixture: ComponentFixture<TqsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqsiteComponent]
    });
    fixture = TestBed.createComponent(TqsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
