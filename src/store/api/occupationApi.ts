import { baseApi } from './baseApi';
import type { Occupation, OccupationCategory, OccupationFilters, OccupationResponse } from '../../types/occupation';
import type { PaginationParams } from '../../types/common';

export const occupationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get occupations by category
    getOccupationsByCategory: builder.query<Occupation[], string>({
      query: (category) => `/categories/occupations?category=${encodeURIComponent(category)}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Occupation' as const, id })),
            { type: 'Occupation', id: 'LIST' }
          ]
          : [{ type: 'Occupation', id: 'LIST' }],
    }),

    // Get all occupations with filters and pagination
    getOccupations: builder.query<OccupationResponse, OccupationFilters & PaginationParams>({
      query: (params) => ({
        url: '/occupations',
        params: {
          page: params.page || 1,
          limit: params.limit || 20,
          category: params.category,
          search: params.searchTerm,
          sortBy: params.sortBy,
          sortOrder: params.sortOrder,
        },
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.data.map(({ id }) => ({ type: 'Occupation' as const, id })),
            { type: 'Occupation', id: 'LIST' }
          ]
          : [{ type: 'Occupation', id: 'LIST' }],
    }),

    // Get occupation by ID
    getOccupationById: builder.query<Occupation, string>({
      query: (id) => `/occupations/${id}`,
      providesTags: (result, error, id) => [{ type: 'Occupation', id }],
    }),

    // Get occupation categories
    getOccupationCategories: builder.query<OccupationCategory[], void>({
      query: () => '/categories',
      providesTags: [{ type: 'Category', id: 'LIST' }],
    }),

    // Search occupations
    searchOccupations: builder.query<Occupation[], string>({
      query: (searchTerm) => `/occupations/search?q=${encodeURIComponent(searchTerm)}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Occupation' as const, id })),
            { type: 'Occupation', id: 'SEARCH' }
          ]
          : [{ type: 'Occupation', id: 'SEARCH' }],
    }),
  }),
});

export const {
  useGetOccupationsByCategoryQuery,
  useGetOccupationsQuery,
  useGetOccupationByIdQuery,
  useGetOccupationCategoriesQuery,
  useSearchOccupationsQuery,
} = occupationApi; 