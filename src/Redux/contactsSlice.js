import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    updateContacts(state, action) {
      state.contacts.push(action.payload);
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

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { updateContacts, deleteContact, filterValue } =
  contactsSlice.actions;
