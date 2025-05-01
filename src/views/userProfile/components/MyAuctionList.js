import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGINATION_CONSTANT } from "../../../utils/propertyResolver";
import { getMyAuctionList } from "../../../redux/slices/auctionSlice";
import CustomTable from "../../../sharedComponents/customTable/CustomTable";
import {
  capitalizeFirstChar,
  formatDate,
  htmlToText,
  truncateText,
} from "../../../utils/commonFunction";

export default function MyAuctionList() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );
  const dispatch = useDispatch();
  const { myAuctionList } = useSelector((state) => state.auction);

  useEffect(() => {
    const payload = {
      page: page,
      limit: perPageLimit,
    };
    dispatch(getMyAuctionList(payload));
  }, [page, perPageLimit]);

  //Column configuration
  const columns = [
    {
      text: "Item Name",
      dataField: "item_name",
      formatter: (cell) => truncateText(cell, 20),
    },
    {
      text: "Description",
      dataField: "description",
      formatter: (cell) => {
        const text = htmlToText(cell);
        return truncateText(text, 30);
      },
    },
    {
      text: "Base Price",
      dataField: "base_price",
      sort: false,
    },
    {
      text: "Start Date",
      dataField: "start_date",
      formatter: (cell) => formatDate(cell, "DD/MM/YYYY hh:mm A"),
    },
    {
      text: "End Date",
      dataField: "end_date",
      formatter: (cell) => formatDate(cell, "DD/MM/YYYY hh:mm A"),
    },
    {
      text: "Status",
      dataField: "status",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
    {
      text: "Category",
      dataField: "category.name",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
  ];

  const onTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    //  If the per page limit changes, reset the page 1
    if (sizePerPage !== perPageLimit) {
      setPage(PAGINATION_CONSTANT.PAGE_ONE);
    } else {
      setPage(page);
    }

    setPerPageLimit(sizePerPage);
  };
  return (
    <div>
      <div className="content-card">
        <CustomTable
          columnData={columns}
          dataTable={myAuctionList?.data || []}
          page={page}
          size={perPageLimit}
          totalRecords={myAuctionList?.totalRecord || 0}
          showPagination={true}
          sizePerPageDropdown={true}
          cellEdit={false}
          onTableChange={onTableChange}
          sort={true}
        />
      </div>
    </div>
  );
}
