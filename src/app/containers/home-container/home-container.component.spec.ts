import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MockComponents } from 'ng-mocks';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { MembersComponent } from '../../components/members/members.component';
import { SoloistsAndExMembersComponent } from '../../components/soloists-and-ex-members/soloists-and-ex-members.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

import { HomeContainerComponent } from './home-container.component';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [
        HomeContainerComponent,
        MockComponents(AboutUsComponent, HeroSectionComponent, MembersComponent, SoloistsAndExMembersComponent, TestimonialsComponent),
      ],
      providers: [{ provide: MatDialog, useValue: spy }],
    }).compileComponents();

    TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
