import { Injectable } from '@angular/core';
import { SubscriptionType } from '../model/SubscriptionType';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subscriptionTypes: SubscriptionType[];

  constructor(private http: HttpClient) {
    this.subscriptionTypes = [];
    this.getData();
  }

  public getData() {
    const promise: Promise<SubscriptionType[]> = new Promise((resolve, reject) => {
      this.http.get('assets/hvg_feladat_json.json').toPromise().then((data: any) => {
        const hvgProducts = data['HVG termékek'];
        const hvgSubscriptions = hvgProducts['HVG Előfizetés'];
        for (let key in hvgSubscriptions) {
          if (hvgSubscriptions.hasOwnProperty(key)) {
              this.subscriptionTypes.push(hvgSubscriptions[key]);
          }
        }
        resolve();
    });
  });
  return promise;
  }
}
