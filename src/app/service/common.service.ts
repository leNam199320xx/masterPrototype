import { Injectable } from '@angular/core';
import { NamPageModel } from '../model/page.model';

@Injectable()
export class NamCommonService {
    isLoadMore = false;
    nextData(_page: NamPageModel) {
        const isOk = (_page.pageIndex < _page.maxPageIndex && _page.pageIndex >= _page.minPageIndex);
        if (isOk) {
            _page.pageIndex++;
        }
        return (isOk);
    }
    backData(_page: NamPageModel) {
        const isOk = (_page.pageIndex > _page.minPageIndex && _page.pageIndex <= _page.maxPageIndex);
        if (isOk) {
            _page.pageIndex--;
        }
        return (isOk);
    }

    gotoPage(_page: NamPageModel, _pageNumber: number) {
        _page.pageIndex = _pageNumber - 1;
        return (_page.pageIndex >= _page.minPageIndex && _page.pageIndex <= _page.maxPageIndex);
    }
}
