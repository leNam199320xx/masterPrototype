import { Component } from '@angular/core';
import { NamLoginService } from '../service/login.service';

@Component({
    selector: 'nam-friend',
    styleUrls: ['friend.scss'],
    templateUrl: 'friend.component.html'
})
export class NamFriendComponent {
    constructor(public loginService: NamLoginService) {

    }
}
