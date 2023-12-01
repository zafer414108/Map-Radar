import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helper/constant";
import axios from "axios";
/* createAsyncThunk
!hem asenkron işlemleri yapmamızı sağlayan 
! hemde bunların sonucunu storra aktarabilen
! asenkron aksiyonu oluşturmamızı sağlayan method
*/

export const getFlight = createAsyncThunk("flights/getFlight", async () => {
  //api istek
  const res = await axios.request(options);

  //bize gelen dizileri objelere çevirme
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  //veriyi slice gönderme
  return newData;
});