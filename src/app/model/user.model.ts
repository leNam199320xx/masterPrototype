import { NamNewsModel } from '../news/news.model';
import { NamProductModel } from '../product/product.model';
import { PagingFabookModel } from './post.model';

export class UserFacebookModel {
    id: string;
    name: string;
    picture: NamPictureModel;
}

export class UsersFacebookModel {
    data: UserFacebookModel[] = [];
    paging: PagingFabookModel = {} as PagingFabookModel;
}
export class NamPictureModel {
    data: PictureFacebookModel;
}
export class PictureFacebookModel {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}
