import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { IPeopleList } from '../shared/interface/people-list.interface';
describe('PeopleService', () => {
  let service: PeopleService,
    httpTestingController: HttpTestingController,
    baseUrl = "users?name=test",
    people = {
      data: [{
        id: 1,
        avatar: "string",
        email: "string@yahoo.com",
        first_name: "Abdullah",
        last_name: "Shaaban"
      }],
      page: 1,
      per_page: 6,
      support: { url: "test", text: "test" },
      total: 12,
      total_pages: 2
    },
    result: IPeopleList,
    error: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService, HttpClient]
    });
    service = TestBed.inject(PeopleService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should return data", () => {
    service.getPeopleList("test").subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });

    req.flush([people]);

    expect(result).toEqual(people);
  });
  it("should throw error", () => {
    service.getPeopleList("test").subscribe(null, e => {
      error = e;
    });

    let req = httpTestingController.expectOne("baseUrl");
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });

    expect(error.indexOf("Error retrieving People data") >= 0).toBeTruthy();
  });
});
