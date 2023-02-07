import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCartComponent } from './part-cart.component';

describe('PartCartComponent', () => {
  let component: PartCartComponent;
  let fixture: ComponentFixture<PartCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
