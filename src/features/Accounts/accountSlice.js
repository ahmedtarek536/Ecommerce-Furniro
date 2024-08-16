import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  image: "",
  isSeller: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login(state, action) {
      const { id, firstName, lastName, email, password, image } =
        action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
      state.image = image;
      state.isSeller = false;
    },
    logout(state) {
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.password = "";
      state.image = "";
      state.isSeller = false;
    },
  },
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
