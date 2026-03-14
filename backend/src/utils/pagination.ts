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

export const getPaginationParams = (query: any): { page: number; limit: number; skip: number } => {
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 10;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const createPaginationResult = (
  page: number,
  limit: number,
  total: number
): PaginationResult => {
  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  };
};

export const createSearchQuery = (search: string, fields: string[]): any => {
  if (!search || fields.length === 0) return {};

  const searchFields = fields.map(field => ({
    [field]: { $regex: search, $options: 'i' }
  }));

  return { $or: searchFields };
};
