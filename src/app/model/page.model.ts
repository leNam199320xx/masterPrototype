export class NamPageModel {
    pageIndex: number;
    page: number;
    minPageIndex = 0;
    maxPageIndex: number;
    pageLength: number;
    pageLengths: number[];
    count: number;
    pageSize: number;
    pageLoadeds: boolean[] = [];
    pageData: any[] = [];

    constructor(_count: number, _pageSize = 10, _currentPage = 0) {
        this.page = _currentPage;
        this.pageSize = _pageSize;
        this.count = _count;
        this.pageLength = Math.round(this.count / this.pageSize);
        this.pageIndex = this.page - 1;
        this.maxPageIndex = this.pageLength - 1;
        this.pageLengths = Array.from(Array(this.pageLength).keys());
        this.pageLoadeds = Array(this.pageLength).fill(false);
    }
}
