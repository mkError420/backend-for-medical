export interface PaginationOptions {
    page?: number;
    limit?: number;
    search?: string;
}
export interface PaginationResult {
    page: number;
    limit: number;
    total: number;
    pages: number;
}
export declare const getPaginationParams: (query: any) => {
    page: number;
    limit: number;
    skip: number;
};
export declare const createPaginationResult: (page: number, limit: number, total: number) => PaginationResult;
export declare const createSearchQuery: (search: string, fields: string[]) => any;
//# sourceMappingURL=pagination.d.ts.map