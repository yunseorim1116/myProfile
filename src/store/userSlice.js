import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
  },

  reducers: {
    userNameFun: (state) => {
      console.log("하이");
    },
  },
});

export const { userNameFun } = userSlice.actions;
export default userSlice.reducer;
