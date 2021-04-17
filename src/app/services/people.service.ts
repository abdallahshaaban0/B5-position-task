import { IPeopleService } from '../shared/interface/people.service.interface';
import { IPeopleList } from '../shared/interface/people-list.interface';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class PeopleService{

  constructor(private _httpClientService: HttpClient) { }

  getPeopleList(SearchValue: string): Observable<IPeopleList> { // get People List with input search Form
    let url = API_URL + `users?name=${SearchValue}`; // this api just for test not for real objects or value or queryParams
    return this._httpClientService.get<IPeopleList>(url);
  }

}
