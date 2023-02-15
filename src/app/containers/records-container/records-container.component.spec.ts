import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsContainerComponent } from './records-container.component';

describe('RecordsContainerComponent', () => {
  let component: RecordsContainerComponent;
  let fixture: ComponentFixture<RecordsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
