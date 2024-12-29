import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { ERROR_MESSAGE } from "../../utils/propertyResolver";
import { showToast } from "../../sharedComponents/toast/showTaost";

const authInitialState = {
  isUserLogin: false,
  isLoading: false,
  error: null,
};

//Async thunk for Signup user
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkApi) => {
    try {
      const response = await POST(API_END_POINT.CREATE_USER, userData);
      if (response?.status === 200) {
        return response?.response?.data?.data;
      } else {
        showToast(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG,
          "error"
        );
        return thunkApi.rejectWithValue(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG
        );
      }
    } catch (error) {
      showToast(error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "error");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Async thunk for Signin user
export const signinUser = createAsyncThunk(
  "auth/signinUser",
  async (userData, thunkApi) => {
    try {
      const response = await POST(API_END_POINT.LOGIN_USER, userData);
      if (response?.status === 200) {
        // showToast(response?.response?.data?.message , "success")
        localStorage.setItem("token", response?.response?.data?.data);
        return response?.response?.data?.data;
      } else {
        showToast(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG,
          "error"
        );
        return thunkApi.rejectWithValue(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG
        );
      }
    } catch (error) {
      showToast(error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "error");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Async thunk for forgot-password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload, thunkApi) => {
    try {
      const response = await POST(API_END_POINT.FORGOT_PASSWORD, payload);
      if (response?.status === 200) {
        showToast(response?.response?.data?.message, "success");
        return response?.response?.data?.data;
      } else {
        showToast(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG,
          "error"
        );
        return thunkApi.rejectWithValue(
          response?.response?.data?.message ||
            ERROR_MESSAGE.SOMETHING_WENT_WRONG
        );
      }
    } catch (error) {
      showToast(error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "error");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isUserLogin = true;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
