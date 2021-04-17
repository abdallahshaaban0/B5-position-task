import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from '../services/people.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { of } from 'rxjs';
import { delay } from "rxjs/operators";
import { IPeopleList } from '../shared/interface/people-list.interface';
describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PeopleComponent],
      providers: [PeopleService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    let service = TestBed.inject(PeopleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call searchPeople and return []', fakeAsync(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    let _peopleServ = fixture.debugElement.injector.get(PeopleService)
    let stub = spyOn(_peopleServ, "getPeopleList").and.callFake(() => {
      return of();
    })

    component.searchPeople();
    expect(component.isLoading).toEqual(true);
    tick(300);
    expect(component.isLoading).toEqual(false);
    expect(component.peopleList).toEqual([]);
  }));
});
