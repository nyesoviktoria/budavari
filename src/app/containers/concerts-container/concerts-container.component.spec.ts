import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsContainerComponent } from './concerts-container.component';

describe('ConcertsContainerComponent', () => {
  let component: ConcertsContainerComponent;
  let fixture: ComponentFixture<ConcertsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
