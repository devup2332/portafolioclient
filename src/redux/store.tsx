import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import mainProfileReducer from "./mainProfile";
import projectsReducer from "./projects";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    mainProfile: mainProfileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
