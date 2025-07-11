import type { Occupation, OccupationFilters } from '../types/occupation';
import { OCCUPATION_BG_IMAGES } from '../utils/constants';

export class OccupationService {
  /**
   * Get a random background image for occupation cards
   */
  static getRandomBackgroundImage(): string {
    const randomIndex = Math.floor(Math.random() * OCCUPATION_BG_IMAGES.length);
    return OCCUPATION_BG_IMAGES[randomIndex];
  }

  /**
   * Format occupation data for display
   */
  static formatOccupationData(occupation: Occupation): Occupation {
    return {
      ...occupation,
      core_occupation: occupation.core_occupation.trim(),
      ranking: occupation.ranking || 0,
    };
  }

  /**
   * Sort occupations by a specific field
   */
  static sortOccupations(
    occupations: Occupation[],
    sortBy: keyof Occupation = 'ranking',
    sortOrder: 'asc' | 'desc' = 'asc'
  ): Occupation[] {
    return [...occupations].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }

  /**
   * Filter occupations based on criteria
   */
  static filterOccupations(
    occupations: Occupation[],
    filters: OccupationFilters
  ): Occupation[] {
    return occupations.filter(occupation => {
      // Category filter
      if (filters.category && occupation.category !== filters.category) {
        return false;
      }

      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch =
          occupation.core_occupation.toLowerCase().includes(searchLower) ||
          occupation.category.toLowerCase().includes(searchLower);

        if (!matchesSearch) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Get occupation statistics
   */
  static getOccupationStats(occupations: Occupation[]) {
    const total = occupations.length;
    const withAiIndex = occupations.filter(o => o.ai_index !== null).length;
    const withComIndex = occupations.filter(o => o.com_index !== null).length;
    const avgAiIndex = occupations
      .filter(o => o.ai_index !== null)
      .reduce((sum, o) => sum + (o.ai_index || 0), 0) / withAiIndex || 0;
    const avgComIndex = occupations
      .filter(o => o.com_index !== null)
      .reduce((sum, o) => sum + (o.com_index || 0), 0) / withComIndex || 0;

    return {
      total,
      withAiIndex,
      withComIndex,
      avgAiIndex: Math.round(avgAiIndex * 100) / 100,
      avgComIndex: Math.round(avgComIndex * 100) / 100,
    };
  }

  /**
   * Validate occupation data
   */
  static validateOccupation(occupation: Partial<Occupation>): string[] {
    const errors: string[] = [];

    if (!occupation.core_occupation?.trim()) {
      errors.push('Core occupation is required');
    }

    if (!occupation.category?.trim()) {
      errors.push('Category is required');
    }

    if (occupation.ai_index !== null && occupation.ai_index !== undefined && (occupation.ai_index < 0 || occupation.ai_index > 100)) {
      errors.push('AI index must be between 0 and 100');
    }

    if (occupation.com_index !== null && occupation.com_index !== undefined && (occupation.com_index < 0 || occupation.com_index > 100)) {
      errors.push('Communication index must be between 0 and 100');
    }

    return errors;
  }
} 