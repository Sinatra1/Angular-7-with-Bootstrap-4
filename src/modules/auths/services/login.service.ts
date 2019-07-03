import {Injectable, OnDestroy} from '@angular/core';
import {User} from '../../users/models/user';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../common/services/api.service';
import {Promise} from 'q';
import {Observable, ReplaySubject, Subscription} from 'rxjs';
import {Session} from '../models/session';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnDestroy {
  public static URL_HASH = 'auths';
  public static URL_HASH_REG = 'reg';
  protected subscriptions: Subscription = new Subscription();

  constructor(private apiService: ApiService, private authService: AuthService) {
  }

  public login(user: User): Observable<Session> {
    return this.apiService.post(LoginService.URL_HASH, user);
  }

  public logout(): Observable<any> {
    const request = this.apiService.delete(LoginService.URL_HASH);

    const subjectData = new ReplaySubject(1);
    const observableData = subjectData.asObservable();

    this.subscriptions.add(request.subscribe(value => {
      this.authService.setUnauthorizedState();

      subjectData.next(value);
    }, error => {
      subjectData.next(error);
    }));

    return observableData;
  }

  public getUrlHashReg(): string {
    return LoginService.URL_HASH_REG;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
