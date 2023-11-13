//* LIB
import { v4 as uuidv4 } from "uuid";
//* IMPORT
import { createSlice } from "@reduxjs/toolkit";
import { ContactDummy } from "../data";

const initialState = {
  contacts: ContactDummy,
  contactDetail: {
    name: "",
    email: "",
    phone: "",
    status: "",
  },
};

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    getDetailContact: (state, action) => {
      state.contactDetail = state.contacts.find(
        (item) => Number(item.id) === Number(action.payload)
      );
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.contacts = [...state.contacts, newData];
    },

    updateContact: (state, action) => {
      state.contacts = state.contacts.map((item) =>
        item.id.toString() === action.payload.id.toString()
          ? action.payload
          : item
      );
    },
  },
});

const ContactReducer = TodoSlice.reducer;

export const { getDetailContact, deleteContact, addContact, updateContact } =
  TodoSlice.actions; // export Cái type ra để xài luôn
export const GetContacts = (state) => state.storeContacts;

export default ContactReducer;
