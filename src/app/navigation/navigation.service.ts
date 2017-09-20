import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './shared/menu-item.model';

const ICON_PREFIX = 'gl-icon-';

@Injectable()
export class NavigationService {
  private isOpen: boolean;
  private selectedElement: MenuItem | null;

  // todo return types in functions

  constructor(private http: Http) { }

  getNavigationElements() {
    return this.http
      .get('assets/api/menu.json')
      .map((response: Response) => {
        return <any[]>response.json().menu;
      })
      .catch(this.handleError);
  }

  getElementIconClass(iconName: string) {
    return ICON_PREFIX.concat(iconName.replace('.svg', ''));
  }

  selectElement(element: MenuItem) {
    this.selectedElement = element;
  }

  getSelectedElement(): MenuItem | null {
    return this.selectedElement;
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
