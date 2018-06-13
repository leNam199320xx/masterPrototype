export class NamHeaderModel {
    height: string;
    width: string;
    backgroundColor: string;
    fontSize: string;
    color: string;
    position: string;
    isFixed = true;

    hasLogo = false;
    positionLogo: string;

    hasAccountPanel = true;
    positionAccountPanel: string;
    links: NamHeaderLinkModel[];

    extendClass: string;
}

export class NamHeaderLinkModel {
    text: string;
    value: string;

    hasChild = false;
    positionChild: string;
    childLinks: NamHeaderLinkModel[];

    hasIcon = false;
    sizeIcon: string[];
    iconUrl: string;
    extendClass: string;
}
