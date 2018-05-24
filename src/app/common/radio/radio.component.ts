import { Component } from '@angular/core';
import { NamCheckboxModel } from '../checkbox/checkbox.component';

@Component({
    selector: 'nam-radio',
    styleUrls: ['radio.scss'],
    templateUrl: 'radio.component.html'
})

export class NamRadioComponent {
    radios: NamCheckboxModel[] = [
        { text: 'check 1', value: true },
        { text: 'check 1', value: false },
        { text: 'check 1', value: false },
        { text: 'check 1', value: false },
        { text: 'check 1', value: false }
    ];

    btnCheck(_index: number) {
        for (let i = 0; i < this.radios.length; i++) {
            this.radios[i].value = false;
        }
        this.radios[_index].value = true;
    }
}
