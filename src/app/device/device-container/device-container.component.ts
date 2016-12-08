import { Component, OnInit } from '@angular/core';
import { BtnNavService } from 'services/btn-nav/btn-nav.service';

@Component({
  selector: 'app-device-container',
  templateUrl: './device-container.component.html',
  styleUrls: ['./device-container.component.scss']
})
export class DeviceContainerComponent implements OnInit {
  // tell service which btn info we'll use for deep routing
  private _btnNavData: Object = {
    NoBtn: { // used for pages without button
      routerLink: '',
      disabled: false,
      text: ''
    },
    DeviceInfo: {
      routerLink: '/DeviceOptions',
      disabled: false,
      text: 'Next'
    },
    DeviceConfig: {
      routerLink: '/DeviceOptions/DeviceConfig',
      disabled: true,
      text: 'Next'
    },
    DeviceCustomize: {
      routerLink: '/DeviceOptions/DeviceConfig',
      disabled: true,
      text: 'Add to Cart'
    }
  };
  constructor(public btnNavService: BtnNavService) { }

  ngOnInit() {
    this.btnNavService.setBtnNavData(this._btnNavData);
  }

}
