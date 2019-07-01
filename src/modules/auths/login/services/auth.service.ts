import {Injectable} from '@angular/core';
import {Session} from '../models/session';
import {AppConfig} from '../../../../app/app-config';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  protected static SESSION_KEY_NAME = 'fields';

  protected session: Session;
  protected authorized: boolean = null;

  constructor(private cookieService: CookieService) {
    this.session = new Session();
  }

  public setAuthorizedState(session: Session) {
    if (!session.access_token || !session.id) {
      return;
    }

    this.setSession(session);
  }

  protected setSession(session: Session) {
    if (!session.access_token || !session.id) {
      return;
    }

    this.session = session;
    this.authorized = true;

    const expireDate = new Date();
    expireDate.time = (expireDate.time + AppConfig.TOKEN_EXPIRES_DELAY_SEC);
    this.cookieService.set(AuthService.SESSION_KEY_NAME, JSON.stringify(this.session), expireDate);
  }

  public removeSession(): boolean {
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

    this.session = JSON.parse(this.cookieService.get(AuthService.SESSION_KEY_NAME));

    if (typeof this.session !== 'object') {
      this.session = new Session();
    }

    if (this.session.access_token) {
      this.authorized = true;
    }

    return this.session;
  }
}
