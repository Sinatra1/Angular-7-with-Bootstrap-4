import { Injectable } from '@angular/core';
import {User} from '../../../users/models/user';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../../common/services/api.service';
import {Promise} from 'q';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlHash = 'auths';
  constructor(private apiService: ApiService) {
  }

  public login(user: User): Observable<any> {
    return this.apiService.post(this.urlHash, user);
  }
}