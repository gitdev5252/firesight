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

export interface OccupationTaskData extends Occupation {
  description?: string;
  firesight_observations?: string;
  core_description?: string;
  task_1?: number;
  task_2?: number;
  task_3?: number;
  task_4?: number;
  task_5?: number;
  task_6?: number;
  task_7?: number;
  task_8?: number;
  task_9?: number;
  task_10?: number;
  task_11?: number;
  task_12?: number;
  task_13?: number;
  task_14?: number;
  task_15?: number;
  task_16?: number;
  task_17?: number;
  task_18?: number;
  task_19?: number;
  task_20?: number;
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