import { Component, Input, OnInit } from '@angular/core';
import { UserFacebookModel } from '../../model/user.model';

@Component({
    selector: 'nam-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.scss']
})
export class NamChatComponent implements OnInit {
    @Input() friend: UserFacebookModel;
    isOpen = false;
    ngOnInit() {
    }
    btnOpen() {
        this.isOpen = !this.isOpen;
    }

    inpText(_event: Event) {
        console.log(_event);
    }

    kpsEnter(_event: KeyboardEvent) {
        if (_event.keyCode === 13) {
            console.log('enter');
            this.btnSend();
        }
    }

    btnSend() {

    }
}
