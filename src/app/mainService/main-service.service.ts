import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {InterfaceData} from '../interface-data';


@Injectable()
export class MainService {

  constructor(private http: HttpClient) {}
getAlbums(): Observable<InterfaceData[]> {
  return this.http.get<InterfaceData[]> ('https://jsonplaceholder.typicode.com/users')
  .do(data => console.log('All: ' + JSON.stringify(data)));
}
}
