import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from 'data/contacts.json';

const contactsSlice = createSlice({
    name: 'contacs', 
    initialState: initialContacts,

    reducers: {
        addContact: (state, action) => {
            console.log(action)
           return [...state,  { id: nanoid(), ...action.payload }]
        },
    
        deleteContact: (state, {payload}) => {
           return state.filter(({id}) => id !== payload)
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

