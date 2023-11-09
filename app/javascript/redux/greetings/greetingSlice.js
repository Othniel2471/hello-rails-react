import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const response = await fetch('/api/v1/random_greeting');
      const greeting = await response.json();
      return greeting;
    } catch (error) {
      return error.message;
    }
  }
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    message: [],
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'completed';
        const message = action.payload.message;
        state.message = message;
        state.error = '';
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
  },
});

export default greetingSlice.reducer;
