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
    login: {
      prepare: (id, firstName, lastName, email, password, image, isSeller) => ({
        payload: {
          id,
          firstName,
          lastName,
          email,
          password,
          image,
          isSeller,
        },
      }),
      reducer: (state, action) => {
        state.id = action.payload.id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.image = action.payload.image;
        state.isSeller = action.payload.isSeller;
      },
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
