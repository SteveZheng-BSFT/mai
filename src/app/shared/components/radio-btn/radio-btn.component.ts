import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-radio-btn',
    templateUrl: './radio-btn.component.html',
    styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent implements OnInit {
    @Input() options: Object[];
    @Input() group: string;
    @Input() model: string;

    @Output() modelChange: EventEmitter<{}>;

    constructor() {
        this.modelChange = new EventEmitter();
    }

    // will output when checked
    get_selected(value): void {
        this.model = value;
        this.modelChange.emit(value);
    }

    ngOnInit() {
    }
}
