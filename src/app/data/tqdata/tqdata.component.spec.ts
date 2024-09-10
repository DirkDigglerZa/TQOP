import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqdataComponent } from './tqdata.component';

describe('TqdataComponent', () => {
  let component: TqdataComponent;
  let fixture: ComponentFixture<TqdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqdataComponent]
    });
    fixture = TestBed.createComponent(TqdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
