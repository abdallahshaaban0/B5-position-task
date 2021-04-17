import { IPeopleList } from './../shared/interface/people-list.interface';
import { IPeople } from './../shared/interface/people.interface';
import { PeopleService } from '../services/people.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
  searchVal: string = "";
  isLoading: boolean = false;
  peopleList: IPeople[] = [];
  constructor(private _peopleServ: PeopleService) { }

  ngOnInit(): void { }

  searchPeople(): void {
    // this.peopleList = []; can active it temporary for loader showed at top of page or with custom css
    this.isLoading = true;
    this._peopleServ.getPeopleList(this.searchVal).subscribe((response: IPeopleList) => {
      this.isLoading = false;
      if (response && response["data"]["length"] > 0) {
        this.peopleList = response.data;
      } else {
        this.peopleList = [];
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.peopleList, event.previousIndex, event.currentIndex);
  }
}
