import { Injectable } from '@angular/core';
import { SubscriptionType } from '../model/SubscriptionType';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortSbs(subscriptionTypes: SubscriptionType[],
                selectedSortAspect: string,
                selectedSortOrder: string): SubscriptionType[] {
    let result: SubscriptionType[];
      result = subscriptionTypes.sort((a, b) => {
        const key: string = selectedSortAspect;
        const left_variable: string = a[key];
        const right_variable: string = b[key];
        if (selectedSortAspect === 'price') {
          return left_variable.localeCompare(right_variable, undefined, {numeric: true, sensitivity: 'base'});
        } else {
          return left_variable.localeCompare(right_variable);
        }
      });
    if (selectedSortOrder === 'asc') {
      return result;
    } else {
      return result.reverse();
    }
  }
}
