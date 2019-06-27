import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoginComponent } from '../modules/auths/login/component/app.LoginComponent';

describe('AppLoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppLoginComponent
      ],
    }).compileComponents();
  }));
});
