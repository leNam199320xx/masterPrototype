import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'nam-button',
    templateUrl: 'button.component.html'
})
export class NamButtonComponent {
    @Input() title: string;
    @Input() btnSelected: boolean;
    @Input() hasBorder = true;
    @Input() className: NamButtonSize = NamButtonSize.normal;
    @Input() hasBackground = false;
    @Input() width: string;
}

export enum NamButtonSize {
    large = 'large',
    small = 'small',
    normal = 'normal',
    real = 'real'
}
