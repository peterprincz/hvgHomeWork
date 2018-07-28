import { DataService } from './services/data.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SubscriptionType } from './model/SubscriptionType';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(200%)'}),
        animate(700)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  selectedSortAspect: string;
  selectedSortOrder: string;

  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.selectedSortAspect = 'title';
    this.selectedSortOrder = 'asc';
  }

  getFirstTwo(): SubscriptionType[] {
    let result: = this.dataService.subscriptionTypes;
    if (this.selectedSortAspect === 'title') {
      result = this.sortsbsByTitle();
    } else {
      result = this.dataService.subscriptionTypes.sort();
    }
    if (this.selectedSortOrder === 'desc') {
      result = result.reverse();
    }
    console.log(result);
    return result;
  }

  sortsbsByTitle(): SubscriptionType[] {
      return this.dataService.subscriptionTypes.sort((a, b) => {
        const key: string = this.selectedSortAspect;
        const left_variable: string = a[key];
        const right_variable: string = b[key];
        return this.HUAlphabetComparer(left_variable, right_variable);
      });
    }

  setAspect(aspect: string): void {
    if (aspect === this.selectedSortAspect) {
      if (this.selectedSortOrder = 'asc') {
        this.selectedSortOrder = 'desc';
      } else {
        this.selectedSortOrder = 'asc';
      }
    } else {
      this.selectedSortAspect = aspect;
      this.selectedSortOrder = 'asc';
    }
  }

  HUAlphabetComparer(wordOne: string, wordTwo: string): number {
    if (wordOne.localeCompare(wordTwo) > 0) {
      return -1;
    }
    return 1;
  }



}
