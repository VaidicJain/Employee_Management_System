// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchEmployees = createAsyncThunk('employees/fetch', async (_, { rejectWithValue }) => {
//   const res = await fetch('/api/employees');
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Failed to fetch');
//   return result;
// });

// const employeeSlice = createSlice({
//   name: 'employees',
//   initialState: { list: [], status: 'idle', error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       });
//   },
// });

// export default employeeSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchEmployees = createAsyncThunk('employees/fetch', async (_, { rejectWithValue }) => {
//   const res = await fetch('/api/employees');
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Failed to fetch');
//   return result;
// });

// const employeeSlice = createSlice({
//   name: 'employees',
//   initialState: { list: [], status: 'idle', error: null as string | null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       });
//   },
// });

// export default employeeSlice.reducer;












import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk('employees/fetch', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('/api/employees');
    const result = await res.json();
    if (!res.ok) return rejectWithValue(result.error || 'Failed to fetch employees');
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message || 'Network error');
  }
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { list: [], status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default employeeSlice.reducer;
