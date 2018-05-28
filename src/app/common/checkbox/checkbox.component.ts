import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nam-checkbox',
    templateUrl: 'checkbox.component.html'
})
export class NamCheckboxComponent {
    @Input() checkboxes: NamCheckboxModel[] = [];
    @Output() changeValue: EventEmitter<any> = new EventEmitter();
    checkboxesChange(chk: NamCheckboxModel) {
        chk.value = !chk.value;
    }
}

export class NamCheckboxModel {
    text: string;
    value: boolean;
}
