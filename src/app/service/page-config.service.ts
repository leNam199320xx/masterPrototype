import { Injectable } from '@angular/core';
import { NamHeaderModel } from '../model/header.model';
import { NamFooterModel } from '../model/footer.model';
@Injectable()
export class NamPageConfigService {
    headerConfig: NamHeaderModel;
    footerConfig: NamFooterModel;
    rootHeaderConfig: NamHeaderModel;
    rootFooterConfig: NamFooterModel;
}
