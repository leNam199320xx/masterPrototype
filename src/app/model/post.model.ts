export class NamPostModel {
}

export class PostsFacebookModel {
    data: PostFacebookModel[];
    paging: PagingFabookModel;
}
export class PostFacebookModel {
    id: string;
    message: string;
    created_time: string;
    updated_time: string;
    full_picture: string;
}
export class PagingFabookModel {
    next: string;
    previous: string;
}
