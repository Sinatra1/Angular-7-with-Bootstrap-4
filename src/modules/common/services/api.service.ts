import {Injectable} from '@angular/core';
import {AppConfig} from '../../../app/app-config';
import {HttpClient} from '@angular/common/http';
import {encodeUriQuery} from '@angular/router/src/url_tree';
import {Promise} from 'q';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static POST = 'POST';
  private static GET = 'GET';
  private static DELETE = 'DELETE';
  private http: HttpClient;

  constructor() {
  }

  public post(method: string, data): Observable<any> {
    return this.request(ApiService.POST, method, data);
  }

  private request(httpMethod: string, method: string, data): Observable<any> {
    const url = this.getUrl(httpMethod, method, data);
    const req: Observable<any> = this.http.request(httpMethod, url, {
      params: data,
      withCredentials: true
    });
    req.subscribe((value => {}), (error => {}));
    return req;
  }

  private getUrl(httpMethod: string, method: string, data): string {
    let url: string = AppConfig.API_URL;

    url += method;

    if (httpMethod === ApiService.GET || httpMethod === ApiService.DELETE) {
      let delimiter = '?';
      for (const [key, value] of data) {
        if (url.indexOf(delimiter) !== -1) {
          delimiter = '&';
        }

        url += delimiter + key + '=' + encodeUriQuery(data[key]);
      }

      return url;
    }
  }
}
