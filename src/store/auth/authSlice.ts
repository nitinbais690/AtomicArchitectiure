import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginRequest = createAsyncThunk('auth/loginRequest', (data: any) => {
  return data;
});

export const logoutRequest = createAsyncThunk('auth/logoutRequest', ({}) => {
  return true;
});

interface StateI {
  isAuthenticated: boolean;
  isLoadingRequest: boolean;
  data: any;
  statusAddress: string;
  error: boolean;
}

const initialState: StateI = {
  isAuthenticated: false,
  isLoadingRequest: false,
  data: undefined,
  statusAddress: 'idle',
  error: false,
};

const authSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    clearError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state: StateI) => {
      state.statusAddress = 'loading';
      state.isAuthenticated = false;
      state.isLoadingRequest = true;
      state.error = false;
    });
    builder.addCase(loginRequest.fulfilled, (state: StateI, action: any) => {
      state.statusAddress = 'succeeded';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(loginRequest.rejected, (state: StateI, action: any) => {
      state.statusAddress = 'failed';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.error = true;
      state.data = undefined;
      const error = action;
      state.error = error;
    });
    builder.addCase(logoutRequest.fulfilled, (state: StateI) => {
      state.statusAddress = 'succeeded';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.error = false;
      state.data = undefined;
    });
  },
});

export default authSlice.reducer;
