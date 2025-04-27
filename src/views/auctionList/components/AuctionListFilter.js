import React, { useEffect, useState } from "react";
import filterIcon from "../../../assets/icons/filter.svg";
import upArrowIcon from "../../../assets/icons/arrow_up.svg";
import downArrowIcon from "../../../assets/icons/arrow_down.svg";
import CustomDropDown from "../../../sharedComponents/customDropDown/CustomDropDown";
import { useDispatch, useSelector } from "react-redux";
import { getAuctionCategoryLIst } from "../../../redux/slices/auctionSlice";
import { mapToSelectOptions } from "../../../utils/commonFunction";
import { PAGINATION_CONSTANT } from "../../../utils/propertyResolver";

export default function AuctionListFilter({
  filterState,
  setFilterState,
  setPage,
}) {
  const [localCategory, setLocalCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const dispatch = useDispatch();
  const { auctionCategoryList } = useSelector((state) => state.auction);
  useEffect(() => {
    dispatch(getAuctionCategoryLIst());
  }, []);

  const handleApplyFilter = () => {
    setFilterState({
      ...filterState,
      selectedCategory: localCategory,
      rangeValue: [0, 0],
    });
    setPage(PAGINATION_CONSTANT.PAGE_ONE);
  };
  const handleResetFilter = () => {
    setLocalCategory("");
    setFilterState({
      ...filterState,
      selectedCategory: "",
      rangeValue: [0, 0],
    });
    setPage(PAGINATION_CONSTANT.PAGE_ONE);
  };
  return (
    <div className="auction-filter-wrapper">
      {/* Filter header */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="heading-text">Filter</h1>
        <img src={filterIcon} alt="filter icon" />
      </div>
      <hr className="m-0 mb-3" />
      {/* Price Collapse */}

      {/* Category Collapse */}
      <div
        className="collapse-card mt-3"
        onClick={() => setCategoryOpen(!categoryOpen)}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Category</h5>
          <img
            src={categoryOpen ? upArrowIcon : downArrowIcon}
            alt="filter icon"
            width={20}
          />
        </div>
      </div>
      {categoryOpen && (
        <div className="my-3">
          <CustomDropDown
            label=""
            name="category"
            value={localCategory}
            onChange={(item) => setLocalCategory(item)}
            placeholder="Choose a category"
            options={mapToSelectOptions(auctionCategoryList, "name", "id")}
          />
        </div>
      )}

      {/* Filter buttons */}
      <div className="filter-btn mt-4">
        <button onClick={handleApplyFilter}>Apply Filter</button>
        <button onClick={handleResetFilter}>Reset Filter</button>
      </div>
    </div>
  );
}
