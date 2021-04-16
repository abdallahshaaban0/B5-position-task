import { IPeople } from './../shared/interface/people.interface';
import { PeopleService } from './people.service';
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
    this.isLoading = true;
    this._peopleServ.getPeopleList(this.searchVal).subscribe((response: any) => {
      console.log(response);
      this.peopleList = response.data;
      this.isLoading = false;
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.peopleList, event.previousIndex, event.currentIndex);
  }
}
