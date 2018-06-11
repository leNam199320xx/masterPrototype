import { NamNavItemModel } from '../nav/nav.model';

export class NamCreaterPanelModel {
    type: NamPanelType;
    name: string;
    width: string;
    position: string;
}

export class NamCreaterNavModel {
    type: NamNavItemType;
    tabs: NamNavItemModel[];
}

export enum NamNavItemType {
    type1 = 1,
    type2 = 2,
    type3 = 3
}

export enum NamPanelType {
    nav = 1,
    banner = 2,
    listType = 3,
    footer = 4
}
