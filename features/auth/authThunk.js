import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const loginUser = createAsyncThunk("auth/loginUser",
    async ({ email, password }) => { 
        const { data } = await api.post('login', { email, password });
        await AsyncStorage.setItem('token', data.token);
        return data;
    }
);

export const fetchUser = createAsyncThunk("auth/fetchUser",
    async () => {
        const { data } = await api.get('user');
        return data;
    }
)