import { Injectable } from '@angular/core';
import { NamPageModel } from '../model/page.model';

@Injectable()
export class NamCommonService {
    isLoadMore = true;
    nextData(_page: NamPageModel) {
        const isOk = (_page.pageIndex < _page.maxPageIndex && _page.pageIndex >= _page.minPageIndex);
        if (isOk) {
            _page.pageIndex++;
        }
        return ({
            status: isOk,
            page: _page
        });
    }
    backData(_page: NamPageModel) {
        const isOk = (_page.pageIndex > _page.minPageIndex && _page.pageIndex <= _page.maxPageIndex);
        if (isOk) {
            _page.pageIndex--;
        }
        return ({
            status: isOk,
            page: _page
        });
    }

    gotoPage(_page: NamPageModel, _pageNumber: number) {
        _page.pageIndex = _pageNumber - 1;
        const isOk = (_page.pageIndex >= _page.minPageIndex && _page.pageIndex <= _page.maxPageIndex);
        return ({
            status: isOk,
            page: _page
        });
    }
}
