import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.NEXT_PUBLIC_AUTH_API;

 interface AllUserProp {
  userName:string;
  img:string
}

interface UserProp {
  formContent: Object | any;
  isLoggin: boolean;
  allUser: any[]
}

export const loginAuth = createAsyncThunk(
  "user/login",
  async (values: Object) => {
    const response = await axios.post(`${API_URL}/auth/login`, values);
    const data = await response.data;
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

export const allUsers = createAsyncThunk("allUser", async () => {
  const response = await axios.get(`${API_URL}/auth/allUser`)
  const data = await response.data
  return data
})


const initialState: UserProp = {
  formContent: {},
  isLoggin: false,
  allUser:[]
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
    builder.addCase(registerAuth.rejected, (state, action) => {
      state.isLoggin = false;
    });
    builder.addCase(registerAuth.fulfilled, (state, action) => {
      state.formContent = action.payload;
      state.isLoggin = true;
    });

    // register finish

    // allUser start 
    builder.addCase(allUsers.pending,(state) => {
      state.isLoggin = true
    })
    builder.addCase(allUsers.fulfilled,(state,action) => {
      state.allUser = action.payload
    })
  },
});

export default authSlice.reducer;
