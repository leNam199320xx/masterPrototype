import { Injectable } from '@angular/core';
import { NamUserModel } from '../model/user.model';

@Injectable()
export class NamLoginService {
    user: NamUserModel = new NamUserModel();
}
