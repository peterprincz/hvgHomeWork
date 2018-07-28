import { DataService } from './services/data.service';
import { Component, OnInit, AfterViewChecked, HostListener } from '@angular/core';
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
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
  visitedPages = [];
  isUserScrolling: boolean;
  ScrollTimer: any;

  constructor(private dataService: DataService, private sortService: SortService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.selectedPage = 1;
    this.selectedSortAspect = 'title';
    this.selectedSortOrder = 'asc';
    this.isUserScrolling = false;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isUserScrolling = true;
    clearTimeout(this.ScrollTimer);
    this.ScrollTimer = setTimeout(() => {
      this.isUserScrolling = false;
    }, 600);
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

  getImage(subscriptionType: SubscriptionType): any {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0),
                            rgba(16, 16, 23, 0.5)),
                            url(${subscriptionType.image})`);
  }

  changePage(page: number): void {
    if (page > 0 && !this.isPageEmpty(page)) {
      this.visitedPages.push(this.selectedPage);
      this.selectedPage = page;
    }
  }

  changeToPreviousPage(): void {
    if (this.visitedPages.length > 0) {
      this.selectedPage = this.visitedPages.pop();
    }
  }

  isPageEmpty(page: number): boolean {
    return this.dataService.subscriptionTypes.length - (4 * (page - 1)) < 1;
  }
}
