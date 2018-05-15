import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NamSize, NamPosition } from '../nam.define';


@Component({
    selector: 'nam-tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.css']
})

export class NamTagComponent implements OnInit {

    @Output() Click: EventEmitter<any> = new EventEmitter();

    @Input() Title: string;
    @Input() Type: NamTagType = NamTagType.default;
    @Input() Size: NamSize = NamSize.default;
    @Input() Position: NamPosition = NamPosition.default;

    message = '';

    onClick() {
        this.Click.emit({
            message: this.message
        });
    }

    ngOnInit() {
    }

    constructor() {
    }
}

export enum NamTagType {
    default = 0,
    circle = 1,
    square = 2
}
