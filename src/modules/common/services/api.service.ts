import {Injectable} from '@angular/core';
import {AppConfig} from '../../../app/app-config';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static POST = 'POST';
  private static GET = 'GET';
  private static DELETE = 'DELETE';
  protected subjectData: Subject<any>;
  protected observableData: Observable<any>;

  constructor(private http: HttpClient) {
    this.subjectData = new ReplaySubject(1);
    this.observableData = this.subjectData.asObservable();
  }

  public post(method: string, data): Observable<any> {
    return this.request(ApiService.POST, method, data);
  }

  private request(httpMethod: string, method: string, data): Observable<any> {
    const url = this.getUrl(method);
    const options = this.getOptions(httpMethod, data);
    const req: Observable<any> = this.http.request(httpMethod, url, options);
    req.subscribe((value => {
      this.subjectData.next(value);
    }), (error => {
      this.subjectData.error(error);
    }));
    return this.observableData;
  }

  private getOptions(httpMethod: string, data) {
    const options = {body: null, params: null, withCredentials: true};
    if (httpMethod === ApiService.GET || httpMethod === ApiService.DELETE) {
      options.params = data;
    } else {
      options.body = data;
    }
    return options;
  }

  private getUrl(method: string): string {
    const url: string = AppConfig.API_URL + method;
    return url;
  }
}
