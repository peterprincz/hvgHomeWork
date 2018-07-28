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
import { SortService } from './services/sort.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('easeIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({opacity: 0}),
        animate('1000ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  selectedSortAspect: string;
  selectedSortOrder: string;
  selectedPage: number;

  constructor(private dataService: DataService, private sortService: SortService) {
    this.selectedPage = 1;
  }

  ngOnInit() {
    this.selectedSortAspect = 'title';
    this.selectedSortOrder = 'asc';
  }

  getSubscriptions(): SubscriptionType[] {
    let subscriptionTypes: SubscriptionType[];
    subscriptionTypes = this.dataService.subscriptionTypes.slice();
    return this.sortService.sortSubscriptions(
                      subscriptionTypes,
                      this.selectedSortAspect,
                      this.selectedSortOrder)
                      .slice((this.selectedPage - 1) * 4, this.selectedPage * 4);
  }

  setAspect(aspect: string): void {
    if (aspect === this.selectedSortAspect) {
      if (this.selectedSortOrder === 'asc') {
        this.selectedSortOrder = 'desc';
      } else {
        this.selectedSortOrder = 'asc';
      }
    } else {
      this.selectedSortAspect = aspect;
      this.selectedSortOrder = 'asc';
    }
  }

  changePage(value: number): void {
    this.selectedPage = value;
  }
}
