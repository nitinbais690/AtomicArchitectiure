import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addRecentSearch = createAsyncThunk('auth/addRecentSearch', (data: any) => {
  return data;
});

interface StateI {
  isLoadingRequest: boolean;
  location: {
    home: any;
    work: any;
    places: any;
  };
  status: string;
  error: boolean;
}

const initialState: StateI = {
  isLoadingRequest: false,
  status: 'idle',
  location: {
    home: undefined,
    work: undefined,
    places: [],
  },
  error: false,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    clearError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addRecentSearch.pending, (state: StateI) => {
      state.status = 'loading';
      state.isLoadingRequest = true;
      state.error = false;
    });
    builder.addCase(addRecentSearch.fulfilled, (state: StateI, action: any) => {
      state.status = 'succeeded';
      state.isLoadingRequest = false;
      state.error = false;
      state.location.places = [...state.location.places, action.payload];
    });
    builder.addCase(addRecentSearch.rejected, (state: StateI, action: any) => {
      state.status = 'failed';
      state.isLoadingRequest = false;
      state.error = true;
      state.location = initialState.location;
      const error = action;
      state.error = error;
    });
  },
});

export default locationSlice.reducer;
