import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {
  url: string;

  constructor(private http: Http) {
  }

  getAllRun(){
    return this.http.get(this.url).map(response => {
      response.json();
    })
  }
  findRun(date){
    return this.http.get(this.url + '/search/' + date).map(response => {
      response.json();
    })
  }

}
