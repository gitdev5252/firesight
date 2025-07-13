export interface Occupation {
  id: string;
  category: string;
  core_occupation: string;
  substi_sco: number | null;
  overall_salary_avg: string | null;
  salary_normal: number | null;
  auto_avg: number | null;
  free_com_sco: number | null;
  occ_cat_sco_com: number | null;
  occ_cat_sco_ai: number | null;
  lab_type_sco: number | null;
  com_index: number | null;
  ai_index: number | null;
  thermometer: number | null;
  ranking?: number;
  totalOccupations?: number;
}

export interface OccupationCategory {
  id: string;
  name: string;
  description?: string;
  occupationCount: number;
}

export interface OccupationFilters {
  category?: string;
  searchTerm?: string;
  sortBy?: 'ranking' | 'core_occupation' | 'ai_index' | 'com_index';
  sortOrder?: 'asc' | 'desc';
}

export interface OccupationResponse {
  data: Occupation[];
  total: number;
  page: number;
  limit: number;
} 