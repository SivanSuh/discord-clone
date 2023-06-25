import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.NEXT_PUBLIC_AUTH_API;

interface UserProp {
  formContent: Object | any;
  isLoggin: boolean;
}

export const loginAuth = createAsyncThunk(
  "user/login",
  async (values: Object) => {
    const response = await axios.post(`${API_URL}/auth/login`, values);
    const data = await response.data;
    console.log("response ", response);
    return data;
  }
);

export const registerAuth = createAsyncThunk(
  "user/logout",
  async (values: Object) => {
    const response = await axios.post(`${API_URL}/auth/register`, values);
    const data = await response.data;
    return data;
  }
);


const initialState: UserProp = {
  formContent: {},
  isLoggin: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // login start
    builder.addCase(loginAuth.pending, (state, action) => {
      state.isLoggin = false;
    });
    builder.addCase(loginAuth.fulfilled, (state, action) => {
      state.formContent = action.payload;
      state.isLoggin = true;
    });
    builder.addCase(loginAuth.rejected, (state, action) => {
      state.isLoggin = false;
    });
    // login finish
    // register start
    builder.addCase(registerAuth.pending, (state, action) => {
      state.isLoggin = false;
    });
    builder.addCase(registerAuth.fulfilled, (state, action) => {
      state.formContent = action.payload;
      state.isLoggin = true;
    });
    builder.addCase(registerAuth.rejected, (state, action) => {
      state.isLoggin = false;
    });
    // register finish
  },
});

export default authSlice.reducer;
