import { createSlice } from "@reduxjs/toolkit"
import { fetchUser, loginUser } from "./authThunk"

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;


            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;


            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;