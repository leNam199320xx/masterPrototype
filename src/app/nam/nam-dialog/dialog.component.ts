import {
    Component, Input, Output, EventEmitter, Directive, ViewContainerRef,
    ViewChild, ComponentFactoryResolver, OnChanges, OnInit, AfterViewInit, Type
} from '@angular/core';
import { NamPosition } from '../nam.define';

@Directive({
    selector: '[namDialogDirective]'
})
export class NamDialogDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}

@Component({
    selector: 'nam-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.css']
})

export class NamDialogComponent implements OnChanges {
    @Input() position: NamPosition = NamPosition.default;
    @Input() enabled = false;
    @Input() dialogContentComponent: NamDialogContentComponent;

    @Output() openDialog: EventEmitter<any> = new EventEmitter();
    @Output() closeDialog: EventEmitter<any> = new EventEmitter();

    @ViewChild(NamDialogDirective) contentDialog: NamDialogDirective;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }
    // Event

    close() {
        this.closeDialog.emit();
    }

    ngOnChanges() {
        this.push();
    }

    // functions
    push() {
        if (this.dialogContentComponent && this.contentDialog) {
            this.contentDialog.viewContainerRef.clear();
            this.contentDialog.viewContainerRef.createComponent(
                this.componentFactoryResolver.resolveComponentFactory(this.dialogContentComponent.component)
            );
        } else {
            this.close();
        }
    }
}

export class NamDialogContentComponent {
    constructor(public component: Type<any>, public data: any) { }
}
