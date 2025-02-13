import { localDataName } from './../../../constants/appInfor';
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    token: string,
    _id: string,
    name: string,
    rule: number,
}
const initialState = {
    token: '',
    _id: '',
    name: '',
    rule: 0,
}

const authSlice = createSlice({
    name: ' auth',
    initialState: {
        data: initialState
    },
    reducers: {
        addAuth: (state, action) => {
            state.data = action.payload;
        },
        removeAuth: (state, _action) => {
            state.data = initialState;
            syncLocal({});
        }
    }
});

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth } = authSlice.actions;
export const auSelector = (state: any) => state.authReducer.data;
export const syncLocal = (data: {}) => {
    localStorage.setItem(localDataName.authData, JSON.stringify(data))
}

