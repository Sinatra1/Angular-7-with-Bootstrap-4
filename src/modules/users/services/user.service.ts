import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {ApiService} from '../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private urlHash = 'users';
  constructor(private apiService: ApiService) { }

  public create(user: User): Observable<any> {
    return this.apiService.post(this.urlHash, user);
  }
}
