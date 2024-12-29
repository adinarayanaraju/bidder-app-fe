import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { ERROR_MESSAGE } from "../../utils/propertyResolver";
import { showToast } from "../../sharedComponents/toast/showTaost";

const authInitialState = {
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
        showToast(response?.response?.data?.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "error")
        return thunkApi.rejectWithValue(response?.response?.data?.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG);
      }
    } catch (error) {
      showToast(error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "error")
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
      });
  },
});

export default authSlice.reducer;
