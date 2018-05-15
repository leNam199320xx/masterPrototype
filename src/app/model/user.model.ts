import { NamNewsModel } from '../news/news.model';
import { NamProductModel } from '../product/product.model';

export class NamUserModel {
    userId: string;
    userName: string;
    news: NamNewsModel[];
    products: NamProductModel[];


    getProducts() {

    }
}
