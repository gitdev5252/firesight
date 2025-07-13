// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://firesight-backend-3irx.onrender.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: 'FireSight',
  VERSION: '1.0.0',
  DESCRIPTION: 'AI Impact Analysis Platform',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// Session Status
export const SESSION_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
} as const;

// Sort Options
export const SORT_OPTIONS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

// Occupation Sort Fields
export const OCCUPATION_SORT_FIELDS = {
  RANKING: 'ranking',
  CORE_OCCUPATION: 'core_occupation',
  AI_INDEX: 'ai_index',
  COM_INDEX: 'com_index',
} as const;

// Background Images for Occupation Cards
export const OCCUPATION_BG_IMAGES = [
  '/images/tag-back-0.svg',
  '/images/tag-back-1.svg',
  '/images/tag-back-2.svg',
  '/images/tag-back-3.svg',
] as const; 