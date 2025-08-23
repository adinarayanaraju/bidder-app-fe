import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { GET } from "../../services/axiosRequestHandler";
import { ERROR_MESSAGE } from "../../utils/propertyResolver";
import { showToast } from "../../sharedComponents/toast/showTaost";

const userInitialState = {
  isLoading: false,
  error: null,
  loginUserDetails: {},
  userDetailById:{}
};

export const getLoginUserDetail = createAsyncThunk(
  "auction/getLoginUserDetail",
  async (_, thunkApi) => {
    try {
      const response = await GET(API_END_POINT.USER_DETAIL);
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

export const getUserDetailById = createAsyncThunk(
  "auction/getUserDetailById",
  async (userId, thunkApi) => {
    try {
      const response = await GET(
        `${API_END_POINT.GET_USER_DETAIL_BY_ID}/${userId}`
      );
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

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginUserDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoginUserDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginUserDetails = action.payload;
      })
      .addCase(getLoginUserDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.loginUserDetails = {};
      })
      .addCase(getUserDetailById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetailById = action.payload;
      })
      .addCase(getUserDetailById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userDetailById = {};
      });
  },
});

export default userSlice.reducer;
