import {Injectable, Output, EventEmitter} from '@angular/core';
import {Session} from '../models/session';
import {AppConfig} from '../../../app/app-config';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {BookService} from '../../books/services/book.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  protected static SESSION_KEY_NAME = 'fields';

  protected session: Session;
  protected authorized: boolean = null;
  @Output() authorizedEvent = new EventEmitter();
  @Output() unauthorizedEvent = new EventEmitter();

  constructor(private cookieService: CookieService, private router: Router) {
    this.session = new Session();
  }

  public setAuthorizedState(session: Session) {
    if (!session.access_token || !session.id) {
      return;
    }

    this.setSession(session);

    if (this.authorized !== true) {
      this.authorizedEvent.emit();
    }
  }

  public setUnauthorizedState() {
    this.removeSession();

    this.unauthorizedEvent.emit();

    this.router.navigate([AppConfig.PRELOGIN]);
  }

  public isAuth(): boolean {
    if (this.authorized === true) {
      return true;
    }

    if (this.getSession().access_token) {
      this.authorized = true;
      return this.authorized;
    }

    this.authorized = false;

    return this.authorized;
  }

  protected setSession(session: Session) {
    if (!session.access_token || !session.id) {
      return;
    }

    this.session = session;
    this.authorized = true;

    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + AppConfig.TOKEN_EXPIRES_DELAY_SEC);
    this.cookieService.set(AuthService.SESSION_KEY_NAME, JSON.stringify(this.session), expireDate);
  }

  protected removeSession(): boolean {
    this.session = new Session();
    this.authorized = false;

    this.cookieService.delete(AuthService.SESSION_KEY_NAME);

    return true;
  }

  public getSession(): Session {
    if (this.session.access_token) {
      this.authorized = true;
      return this.session;
    }

    const sessionJson = this.cookieService.get(AuthService.SESSION_KEY_NAME);

    if (!sessionJson) {
      this.session = new Session();
      return this.session;
    }

    this.session = JSON.parse(sessionJson);

    if (typeof this.session !== 'object') {
      this.session = new Session();
    }

    if (this.session.access_token) {
      this.authorized = true;
      this.authorizedEvent.emit();
    }

    return this.session;
  }
}
