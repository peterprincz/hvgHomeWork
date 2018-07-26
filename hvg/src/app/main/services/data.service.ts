import { Injectable } from '@angular/core';
import { SubscriptionType } from '../model/SubscriptionType';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getSubscriptionTypes(): SubscriptionType[] {
    const subscriptionTypes: SubscriptionType[] = [];
    this.http.get('assets/hvg_feladat_json.json')
      .subscribe(function(data: any) {
        const hvgProducts = data['HVG termékek'];
        const hvgSubscriptions = hvgProducts['HVG Előfizetés'];
        for (let key in hvgSubscriptions) {
          if (hvgSubscriptions.hasOwnProperty(key)) {
              subscriptionTypes.push(hvgSubscriptions[key]);
          }
        }
    }
    );
    return subscriptionTypes;
  }
}
