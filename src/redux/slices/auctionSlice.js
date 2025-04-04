import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET, POST } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { showToast } from "../../sharedComponents/toast/showTaost";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../utils/propertyResolver";

const auctionInitialState = {
  isLoading: false,
  error: null,
  auctionOnHome: [],
  auctionDetail: null,
};

export const getAuctionListForHome = createAsyncThunk(
  "auction/auctionListForHome",
  async (_, thunkApi) => {
    try {
      const response = await GET(
        `${API_END_POINT.GET_AUCTION_LIST}?page=1&limit=8`
      );
      if (response?.status === 200) {
        return response?.response?.data?.data?.auctions;
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

export const getAuctionDetailById = createAsyncThunk(
  "auction/getAuctionDetailById",
  async (auction_id, thunkApi) => {
    try {
      const response = await GET(
        `${API_END_POINT.GET_AUCTION_DETAIL_BY_ID}/${auction_id}`
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

export const placeBid = createAsyncThunk(
  "auction/placeBid",
  async (payload, thunkApi) => {
    try {
      const response = await POST(API_END_POINT.BID_APPLY, payload);
      if (response?.status === 200) {
        showToast(
          response?.response?.data?.message || SUCCESS_MESSAGE.BID_PLACE
        );
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

export const auctionSlice = createSlice({
  name: "auction",
  initialState: auctionInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuctionListForHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuctionListForHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auctionOnHome = action.payload || [];
      })
      .addCase(getAuctionListForHome.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.auctionOnHome = [];
      })
      .addCase(getAuctionDetailById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuctionDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auctionDetail = action.payload;
      })
      .addCase(getAuctionDetailById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.auctionDetail = null;
      })
      .addCase(placeBid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(placeBid.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(placeBid.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default auctionSlice.reducer;
