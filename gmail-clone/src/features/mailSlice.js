import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
  
});

export const { selectedMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectMail = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
