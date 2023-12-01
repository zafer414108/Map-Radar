import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";

export default configureStore({
  reducer: flightReducer,
});