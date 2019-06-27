import { Injectable } from '@angular/core';
import {User} from '../../../users/models/user';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../../common/services/api.service';
import {Promise} from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiService: ApiService;
  private urlHash = 'auths';
  constructor() {
  }

  login(user: User): Promise {
    return this.apiService.post(this.urlHash, user);
  }
}
