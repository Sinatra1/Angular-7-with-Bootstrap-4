import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {ApiService} from '../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public static URL_HASH = 'users';
  constructor(private apiService: ApiService) { }

  public create(user: User): Observable<any> {
    return this.apiService.post(UserService.URL_HASH, user);
  }
}
