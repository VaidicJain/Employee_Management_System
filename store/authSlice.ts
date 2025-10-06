// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const login = createAsyncThunk('auth/login', async (data: { email: string, password: string }, { rejectWithValue }) => {
//   const res = await fetch('/api/auth/login', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Login failed');
//   return result;
// });

// export const register = createAsyncThunk('auth/register', async (data: { name: string, email: string, position: string, password: string }, { rejectWithValue }) => {
//   const res = await fetch('/api/auth/register', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Register failed');
//   return result;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null, status: 'idle', error: null },
//   reducers: {
//     logout: (state) => { state.user = null; state.token = null; },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.employee;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const login = createAsyncThunk('auth/login', async (data: { email: string, password: string }, { rejectWithValue }) => {
//   const res = await fetch('/api/auth/login', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Login failed');
//   return result;
// });

// export const register = createAsyncThunk('auth/register', async (data: { name: string, email: string, position: string, password: string }, { rejectWithValue }) => {
//   const res = await fetch('/api/auth/register', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const result = await res.json();
//   if (!res.ok) return rejectWithValue(result.error || 'Register failed');
//   return result;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null, status: 'idle', error: null as string | null },
//   reducers: {
//     logout: (state) => { state.user = null; state.token = null; },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.employee;
//         state.status = 'succeeded';
//         state.error = null;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;








import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (data: { email: string, password: string }, { rejectWithValue }) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await res.json();
  if (!res.ok) return rejectWithValue(result.error || 'Login failed');
  return result;
});

export const register = createAsyncThunk('auth/register', async (data: { name: string, email: string, position: string, password: string }, { rejectWithValue }) => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await res.json();
  if (!res.ok) return rejectWithValue(result.error || 'Register failed');
  return result;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null as string | null },
  reducers: {
    logout: (state) => { state.user = null; state.token = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(register.fulfilled, (state, action) => {
        // Fix: unified user field from payload, could be user or employee depending on backend response
        state.user = action.payload.user || action.payload.employee || null;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
