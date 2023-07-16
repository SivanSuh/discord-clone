import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AUTH_API;

interface ChatProps {
  message: string;
  from: string;
  to: string;
}
const initialState = {
  content: {} as ChatProps,
  error:false
};
export const AddMessage = createAsyncThunk(
  "sendMessage",
  async (values: Object) => {
    const response = await axios.post(`${BASE_URL}/chats/add`, values);
    console.log("response",response)
    sessionStorage.setItem("sends",JSON.stringify(values))
    return response.data;
  }
);

export const getMessage = createAsyncThunk("getMessages", async (values:Object) => {
    const response = await axios.post(`${BASE_URL}/chats/getMessage`,values)
    sessionStorage.setItem("getMessage",JSON.stringify(response.data))
    console.log("response gelen",response.data)
    return response.data
})
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers(builder) {
    /// add message
    builder.addCase(AddMessage.fulfilled, (state, action) => {
      state.content = action.payload;
    });
    builder.addCase(AddMessage.rejected, (state, action) => {
      state.error = true
    });
  },
});

export default chatSlice.reducer;
