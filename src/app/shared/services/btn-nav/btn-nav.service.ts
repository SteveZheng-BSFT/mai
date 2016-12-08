import { Injectable } from '@angular/core';

@Injectable()
export class BtnNavService {
  private buttonNavigationData: Object;
  public button: Object = {};

  setBtnNavData(buttonData: Object) {
    this.buttonNavigationData = buttonData;
  }

  // give a proper 'next' btn for different page
  setDesignatedButton(cmp: string): void {
    this.button = this.buttonNavigationData[cmp];
  }

  // setEnabled(name: string, state: boolean) {
  //   let button = this.button.find(function(obj) {
  //     return obj['name'] === name;
  //   });
  //   button['disabled'] = !state;
  // }
  //
  // getEnabled(name: string): boolean {
  //   let button = this.button.find(function(obj) {
  //     return obj['name'] === name;
  //   });
  //
  //   return button['disabled'];
  // }

  constructor() { }
}
