import { Injectable } from '@angular/core';
import { SubscriptionType } from '../model/SubscriptionType';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subscriptionTypes: SubscriptionType[];

  constructor(private http: HttpClient) {
    this.subscriptionTypes = this.getData();
  }

  /* Hence we are not using a http server, and we would get a CORS error In some browser
  from tring to acces a local file, I just made a function that will return the the JSON file hardcoded
  , but here is the way how I would do this normally

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
  */

  private getData(): any[] {
    return [{
          'title': 'Éves HVG-előfizetés megrendelés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/hvg_12ho_gepida_20180611.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID1YearHVG_Gepida',
          'price': '28500',
          'currency': 'HUF',
          'published': '2018.06.01. 16:28'
        }, {
          'title': 'Féléves HVG-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/hvg_6ho_fuggoagy_20180611.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID6Months_FA',
          'price': '16050',
          'currency': 'HUF',
          'published': '2018.05.30. 14:20'
        }, {
          'title': 'Exkluzív negyedéves HVG-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/negyedeves_hvg_elofizetes_5sz_kedvezmennyel_20180710.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID3Months_FridaKahlo',
          'price': '8460',
          'currency': 'HUF',
          'published': '2018.05.20. 14:00'
        }, {
          'title': 'Féléves HVG-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/4_2018_webid6months_hh_1701_04_feleves_efi_alt_10sz_bolt_fejlec_r02m.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID6Months',
          'price': '16050',
          'currency': 'HUF',
          'published': '2018.05.15. 11:00'
        }, {
          'title': 'Negyedéves HVG-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/5_2018_webid3months2_hh_1705_02_negyedeves_efi_alt_5sz_bolt_fejlec_r04.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID3Months2',
          'price': '8460',
          'currency': 'HUF',
          'published': '2018.06.20. 08:00'
        }, {
          'title': 'HVG- és HVG Extra Pszichológia-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/8_2018_webidhvgpszicho6month_hh_1704_02_6ho_efi_pszicho_bolt_fejlec_r09m.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_WebIDHVGPszicho6month',
          'price': '15240',
          'currency': 'HUF',
          'published': '2018.04.30. 09:01'
        }, {
          'title': 'Negyedéves HVG- és HVG Extra Pszichológia-előfizetés',
          'image': 'https://static.hvgrt.hu/kulcs/2018/negyedeves_hvg_elofizetes+eves_hvg_extra_psziho_20180627.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_WebIDHVGPszicho3month',
          'price': '8990',
          'currency': 'HUF',
          'published': '2018.02.19. 11:50'
        }, {
          'title': 'Negyedéves HVG-előfizetés Feldmár András Ellenállás című könyvével',
          'image': 'https://static.hvgrt.hu/kulcs/2018/negyedeves_hvg_elofizetes+ellenallas_30sz_kedvezmeny_20180627.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID3months_Ellenallas',
          'price': '8265',
          'currency': 'HUF',
          'published': '2018.07.27. 19:44'
        }, {
          'title': 'Exkluzív negyedéves HVG-előfizetés ajándék Power Bank-al',
          'image': 'https://static.hvgrt.hu/kulcs/2018/negyedeves_hvg_elofizetes+ajandek_20180627.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID3Months_POWER_2',
          'price': '8905',
          'currency': 'HUF',
          'published': '2018.06.01. 10:21'
        }, {
          'title': 'Negyedéves HVG-előfizetés + Nyugalomnapló című HVG-könyv',
          'image': 'https://static.hvgrt.hu/kulcs/2018/10_2018_webid3months_nynaplo_hh_1805_07_3ho_efi_nyugalomnaplo_bolt_fejlec_r01m.png',
          'url': 'https://kulcs.hvg.hu/order/hvg/hvgorder.aspx?p=2018_webID3months_NyNaplo',
          'price': '8265',
          'currency': 'HUF',
          'published': '2018.07.21. 09:39'
        }];
    }

}

