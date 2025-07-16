# 🚀 Professional Next.js Project Structure with Redux

This document outlines the professional, scalable architecture implemented in your FireSight project.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── ai-impact/         # AI Impact feature pages
│   ├── pulse/             # Pulse feature pages
│   ├── session/           # Session feature pages
│   └── layout.tsx         # Root layout with Redux Provider
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (buttons, inputs, etc.)
│   ├── session/          # Session-specific components
│   ├── impact/           # AI Impact components
│   └── video/            # Video-related components
├── layouts/              # Layout components
├── lib/                  # Third-party library configurations
├── store/                # Redux store (RTK + RTK Query)
│   ├── index.ts          # Store configuration
│   ├── hooks.ts          # Typed Redux hooks
│   ├── api/              # RTK Query API slices
│   │   ├── baseApi.ts    # Base API configuration
│   │   └── occupationApi.ts
│   └── slices/           # Redux Toolkit slices
│       └── uiSlice.ts    # UI state management
├── types/                # TypeScript interfaces & types
│   ├── occupation.ts     # Occupation-related types
│   └── common.ts         # Common types
├── utils/                # Utility functions
│   ├── api.ts            # API utilities
│   └── constants.ts      # App constants
├── hooks/                # Custom React hooks
│   └── useAuth.ts        # Authentication hook
└── services/             # Business logic services
    └── occupationService.ts
```

## 🔧 Key Features

### 1. **Redux Toolkit + RTK Query**

- **Modern Redux**: Using Redux Toolkit for simplified state management
- **RTK Query**: Built-in data fetching, caching, and synchronization
- **Type Safety**: Full TypeScript support with typed hooks

### 2. **Professional Type System**

- **Centralized Types**: All interfaces in `/types` directory
- **Reusable Types**: Common types for API responses, pagination, etc.
- **Strict Typing**: Full TypeScript coverage

### 3. **Service Layer Architecture**

- **Business Logic**: Separated into service classes
- **Reusable Functions**: Utility functions for common operations
- **Clean Components**: Components focus on UI, not business logic

### 4. **API Management**

- **Base API**: Centralized API configuration
- **Error Handling**: Consistent error handling across the app
- **Caching**: Automatic caching and revalidation
- **Type Safety**: Fully typed API responses

## 🛠️ Usage Examples

### Using RTK Query in Components

```tsx
import { useGetOccupationsByCategoryQuery } from "@/store/api/occupationApi";

export default function OccupationPage() {
  const { data, isLoading, error } =
    useGetOccupationsByCategoryQuery("technology");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      {data?.map((occupation) => (
        <OccupationCard key={occupation.id} occupation={occupation} />
      ))}
    </div>
  );
}
```

### Using Redux State

```tsx
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setSearchTerm, addToast } from "@/store/slices/uiSlice";

export default function SearchComponent() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.ui.searchTerm);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term));
    dispatch(addToast({ type: "success", message: "Search updated" }));
  };

  return (
    <input value={searchTerm} onChange={(e) => handleSearch(e.target.value)} />
  );
}
```

### Using Service Layer

```tsx
import { OccupationService } from "@/services/occupationService";

// In your component
const sortedOccupations = OccupationService.sortOccupations(
  occupations,
  "ai_index",
  "desc"
);

const stats = OccupationService.getOccupationStats(occupations);
```

## 🚀 Benefits

### 1. **Scalability**

- Modular architecture allows easy feature additions
- Clear separation of concerns
- Reusable components and utilities

### 2. **Maintainability**

- Type-safe development reduces bugs
- Centralized state management
- Consistent error handling

### 3. **Performance**

- RTK Query provides automatic caching
- Optimistic updates
- Background refetching

### 4. **Developer Experience**

- Hot reloading with Redux DevTools
- TypeScript IntelliSense
- Consistent code patterns

## 📦 Installation & Setup

### 1. Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Environment Variables

```env
NEXT_PUBLIC_API_URL=https://firesight-backend-3irx.onrender.com
```

### 3. Usage in Components

```tsx
// Use RTK Query hooks for data fetching
import { useGetOccupationsByCategoryQuery } from "@/store/api/occupationApi";

// Use typed Redux hooks for state management
import { useAppSelector, useAppDispatch } from "@/store/hooks";

// Use service layer for business logic
import { OccupationService } from "@/services/occupationService";
```

## 🔄 Data Flow

1. **Component** → Calls RTK Query hook
2. **RTK Query** → Fetches data from API
3. **Redux Store** → Caches data and manages state
4. **Component** → Receives data and renders UI
5. **Service Layer** → Handles business logic and data transformation

## 🎯 Best Practices

### 1. **State Management**

- Use RTK Query for server state
- Use Redux slices for client state
- Keep components focused on UI

### 2. **Type Safety**

- Define interfaces for all data structures
- Use typed hooks throughout the app
- Leverage TypeScript for better DX

### 3. **Error Handling**

- Consistent error handling patterns
- User-friendly error messages
- Graceful fallbacks

### 4. **Performance**

- Leverage RTK Query caching
- Use React.memo for expensive components
- Implement proper loading states

## 🔮 Future Enhancements

1. **Authentication Slice**: Add proper auth state management
2. **Session API**: Create RTK Query endpoints for sessions
3. **Persistence**: Add Redux Persist for state persistence
4. **Testing**: Add unit tests for services and slices
5. **Monitoring**: Add error tracking and analytics

---

This structure provides a solid foundation for a professional, scalable Next.js application with modern Redux patterns and best practices.
