import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface Project {
  id: string;
  description: string;
  user_id: string;
  created_at: Date;
  name: string;
  stacks: any[];
  images: any[];
}
const initialState: { projects: Project[] } = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getProjectsAction: (state, action) => {
      state = { projects: action.payload };
      return state;
    },
    deleteProjectAtion: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export type ProjectsDispatch = typeof store.dispatch;

export const { getProjectsAction, deleteProjectAtion } = projectsSlice.actions;

export default projectsSlice.reducer;
