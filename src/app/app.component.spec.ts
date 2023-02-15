import { TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { FrameComponent } from './components/frame/frame.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(FrameComponent)],
      providers: [{ provide: TranslateService, useValue: spy }],
    }).compileComponents();

    TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
