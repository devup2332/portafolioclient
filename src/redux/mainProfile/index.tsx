import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

export interface MainProfile {
  id?: string;
  about_me?: string;
  fullname?: string;
  username?: string;
  email?: string;
  projects?: any[];
  links?: {
    id?: string;
    linkedin?: string;
    youtube?: string;
    facebook?: string;
    github?: string;
    created_at?: string;
  };
  phone?: number | string;
}
const initialState: { mainProfile: MainProfile } = {
  mainProfile: {},
};

export const mainProfileSlice = createSlice({
  name: "mainProfile",
  initialState,
  reducers: {
    getMainProfileAction: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export type MainProfileDispatch = typeof store.dispatch;

export const { getMainProfileAction } = mainProfileSlice.actions;

export default mainProfileSlice.reducer;
