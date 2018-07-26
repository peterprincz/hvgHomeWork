import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from './model/SubscriptionType';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  subsciptionTypes: SubscriptionType[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subsciptionTypes = this.dataService.getSubscriptionTypes();
  }

  getFirstTwosbt(): SubscriptionType[] {
    return [this.subsciptionTypes[0], this.subsciptionTypes[1]];
  }
  getsecondTwosbt(): SubscriptionType[] {
    return [this.subsciptionTypes[0], this.subsciptionTypes[1]];
  }



}
