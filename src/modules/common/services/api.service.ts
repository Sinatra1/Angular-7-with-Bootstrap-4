import {Injectable} from '@angular/core';
import {AppConfig} from '../../../app/app-config';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {AuthService} from '../../auths/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static POST = 'POST';
  private static PUT = 'PUT';
  private static GET = 'GET';
  private static DELETE = 'DELETE';
  protected subjectData: Subject<any>;
  protected observableData: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public post(method: string, data): Observable<any> {
    return this.request(ApiService.POST, method, data);
  }

  public put(method: string, data): Observable<any> {
    return this.request(ApiService.PUT, method, data);
  }

  public get(method: string, data): Observable<any> {
    return this.request(ApiService.GET, method, data);
  }

  public delete(method: string, data): Observable<any> {
    return this.request(ApiService.DELETE, method, data);
  }

  private request(httpMethod: string, method: string, data): Observable<any> {
    const url = this.getUrl(method);
    const options = this.getOptions(httpMethod, data);
    const req: Observable<any> = this.http.request(httpMethod, url, options);

    const subjectData = new ReplaySubject(1);
    const observableData = subjectData.asObservable();

    req.subscribe((value => {
      subjectData.next(value);
    }), (error => {
      subjectData.error(error);
    }));

    return observableData;
  }

  private getOptions(httpMethod: string, data) {
    const options = {body: null, headers: {},  params: null, withCredentials: true};

    if (httpMethod === ApiService.GET || httpMethod === ApiService.DELETE) {
      options.params = data;
    } else {
      options.body = data;
    }

    const session = this.authService.getSession();

    if (!!session.access_token) {
      options.headers = {Authorization: session.access_token};
    }

    return options;
  }

  private getUrl(method: string): string {
    const url: string = AppConfig.API_URL + method;
    return url;
  }
}
