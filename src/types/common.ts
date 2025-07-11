export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  participants: User[];
  startTime: string;
  endTime?: string;
  createdAt: string;
  updatedAt: string;
} 