import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'nam-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.scss']
})
export class NamButtonComponent {
    @Input() title: string;
    @Input() btnSelected: boolean;
    @Input() hasBorder = true;
    @Input() className: NamButtonSize;
    @Input() width: string;
    @Output() btnClick: EventEmitter<any> = new EventEmitter();
}

export enum NamButtonSize {
    large = 'large',
    small = 'small',
    normal = '',
    real = 'real'
}
