import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { GET, POST } from "../../services/axiosRequestHandler";
import { ERROR_MESSAGE } from "../../utils/propertyResolver";
import { showToast } from "../../sharedComponents/toast/showTaost";

const bidInitialState = {
  isLoading: false,
  error: null,
  myBidList: {
    data: [],
    totalRecord: 0,
  },
};

export const getMyBidList = createAsyncThunk(
  "auction/getMyBidList",
  async (payload, thunkApi) => {
    try {
      const response = await POST(API_END_POINT.GET_MY_BID_LIST, payload);
      if (response?.status === 200) {
        return {
          data: response?.response?.data?.data?.auctions || [],
          totalRecord: response?.response?.data?.data?.pagination?.total,
        };
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

export const bidSlice = createSlice({
  name: "bid",
  initialState: bidInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyBidList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyBidList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myBidList = action.payload;
      })
      .addCase(getMyBidList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.myBidList = {
          data: [],
          totalRecord: 0,
        };
      });
  },
});

export default bidSlice.reducer;
