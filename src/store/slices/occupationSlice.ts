import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Occupation } from "@/types/occupation";

interface OccupationState {
  occupations: Occupation[];
  loading: boolean;
  error: string | null;
}

const initialState: OccupationState = {
  occupations: [],
  loading: false,
  error: null,
};

const occupationSlice = createSlice({
  name: "occupation",
  initialState,
  reducers: {
    setOccupations: (state, action: PayloadAction<Occupation[]>) => {
      state.occupations = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setOccupations, setLoading, setError } = occupationSlice.actions;
export default occupationSlice.reducer;