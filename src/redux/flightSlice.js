import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "./action";
const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFlight.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })

      .addCase(getFlight.rejected, (state) => {
        state.isLoading = false;
        state.isError = "uçuş bilgileri alinirken hata oluştu";
      });
  },
});

export default flightSlice.reducer;

/*
cevaplara karşılık aldığımız eski yöntem 

apidan cevap beklerken
    [getFlight.pending]: (state) => {
      state.isLoading = false;
    },
    cevap doğru şekilde geldiğinde
    [getFlight.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    },
    olumsuz cevap geldiğinde
    [getFlight.rejected]: (state) => {
      isLoading = true;
      isError = "bir hata olluştu ";
    },
*/