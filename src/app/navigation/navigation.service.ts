import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './shared/menu-item.model';

const ICON_PREFIX = 'gl-icon-';
const THUMB_PATH = '/assets/gl_task_images/';

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

  getThumbFullPath(thumb: string): string {
    return THUMB_PATH.concat(thumb);
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
