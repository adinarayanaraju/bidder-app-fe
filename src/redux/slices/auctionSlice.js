import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";
import { showToast } from "../../sharedComponents/toast/showTaost";
import { ERROR_MESSAGE } from "../../utils/propertyResolver";

const auctionInitialState = {
  isLoading: false,
  error: null,
  auctionOnHome: [],
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
      });
  },
});

export default auctionSlice.reducer;

