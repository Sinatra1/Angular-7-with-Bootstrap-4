import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMenuComponent } from './app.MenuComponent';

describe('AppMenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppMenuComponent
      ],
    }).compileComponents();
  }));
});
