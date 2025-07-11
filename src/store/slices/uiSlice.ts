import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  // Loading states
  isLoading: boolean;
  loadingMessage: string;

  // Modal states
  isModalOpen: boolean;
  modalType: string | null;
  modalData: unknown;

  // Sidebar states
  isSidebarOpen: boolean;

  // Toast notifications
  toasts: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
  }>;

  // Theme and appearance
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;

  // Search and filters
  searchTerm: string;
  activeFilters: Record<string, unknown>;
}

const initialState: UIState = {
  isLoading: false,
  loadingMessage: '',
  isModalOpen: false,
  modalType: null,
  modalData: null,
  isSidebarOpen: false,
  toasts: [],
  theme: 'light',
  sidebarCollapsed: false,
  searchTerm: '',
  activeFilters: {},
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Loading actions
    setLoading: (state, action: PayloadAction<{ isLoading: boolean; message?: string }>) => {
      state.isLoading = action.payload.isLoading;
      state.loadingMessage = action.payload.message || '';
    },

    // Modal actions
    openModal: (state, action: PayloadAction<{ type: string; data?: unknown }>) => {
      state.isModalOpen = true;
      state.modalType = action.payload.type;
      state.modalData = action.payload.data;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.modalData = null;
    },

    // Sidebar actions
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },

    // Toast actions
    addToast: (state, action: PayloadAction<{
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
      duration?: number;
    }>) => {
      const toast = {
        id: Date.now().toString(),
        ...action.payload,
        duration: action.payload.duration || 5000,
      };
      state.toasts.push(toast);
    },

    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },

    clearToasts: (state) => {
      state.toasts = [];
    },

    // Theme actions
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },

    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },

    // Sidebar collapse
    toggleSidebarCollapsed: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },

    // Search and filters
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    setActiveFilters: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.activeFilters = { ...state.activeFilters, ...action.payload };
    },

    clearFilters: (state) => {
      state.activeFilters = {};
      state.searchTerm = '';
    },
  },
});

export const {
  setLoading,
  openModal,
  closeModal,
  toggleSidebar,
  setSidebarOpen,
  addToast,
  removeToast,
  clearToasts,
  toggleTheme,
  setTheme,
  toggleSidebarCollapsed,
  setSearchTerm,
  setActiveFilters,
  clearFilters,
} = uiSlice.actions;

export default uiSlice.reducer; 