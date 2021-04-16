import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class PeopleService {

  constructor(private _httpClientService: HttpClient) { }

  getPeopleList(SearchValue: string) { // get People List with input search Form
    let url = API_URL + `users?name=${SearchValue}`; // this api just for test not for real objects or value or queryParams
    return this._httpClientService.get(url);
  }

}
