import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nam-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.css']
})

export class NameButtonComponent implements OnInit {
    @Input() Title: string;

    @Output() Click: EventEmitter<any> = new EventEmitter();
    @Input() Type: NamButtonType = NamButtonType.default;

    message = '';

    onClick() {
        this.Click.emit({
            message: this.message
        });
    }

    ngOnInit() {
        if (this.Type === NamButtonType.icon) {

        }
    }
}

export enum NamButtonType {
    default = 0,
    circle = 1,
    icon = 2
}
