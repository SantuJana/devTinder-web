import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  emailId: string;
  photoUrl: string;
  about: string;
  skills: string[] | null;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  emailId: "",
  photoUrl: "",
  about: "",
  skills: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.emailId = action.payload.emailId;
            state.photoUrl = action.payload.photoUrl;
            state.about = action.payload.about;
            state.skills = action.payload.skills;
        },
    },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;