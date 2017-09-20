import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavigationService {
  isOpen: boolean;
  selectedElement: any; // todo
  elements: Array<any>; // todo types


  constructor(private http: Http) { }

  getNavigationElements() {
    return this.http
      .get('assets/api/menu.json')
      .map((response: Response) => {
        return <any[]>response.json().menu;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
