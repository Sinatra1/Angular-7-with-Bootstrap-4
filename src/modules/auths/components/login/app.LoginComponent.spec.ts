import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoginComponent } from './app.LoginComponent';

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
