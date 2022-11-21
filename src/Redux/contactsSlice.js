import { createSlice } from '@reduxjs/toolkit';

const contactsList = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsList,
    filter: '',
  },

  reducers: {
    updateContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateContacts, deleteContact, filterValue } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
