import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
  
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
