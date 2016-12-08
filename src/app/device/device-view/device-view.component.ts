import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})

export class DeviceViewComponent implements OnInit {

  @Input() device: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}

// to make your component work,
// remember to manually declare this component at your app.module.ts
