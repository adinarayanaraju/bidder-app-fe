import React, { useEffect, useState } from "react";
import { PAGINATION_CONSTANT } from "../../utils/propertyResolver";
import {
  capitalizeFirstChar,
  formatDate,
  truncateText,
} from "../../utils/commonFunction";
import CustomTable from "../../sharedComponents/customTable/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAuctionList } from "../../redux/slices/admin/adminAuctionSlice";
import Loader from "../../sharedComponents/loader/Loader";
import { getAuctionCategoryLIst } from "../../redux/slices/auctionSlice";
import MyAuctionFilter from "../../views/userProfile/components/MyAuctionFilter";

export default function AuctionManagement() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );
  const [filterState, setFilterState] = useState({
    categories: [],
    status: [],
    dateRange: [],
    sortBy: null,
    search: "",
  });
  const dispatch = useDispatch();
  const { auctionList, isLoading } = useSelector((state) => state.adminAuction);
  const { auctionCategoryList } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(getAuctionCategoryLIst());
  }, []);

  useEffect(() => {
    fetchAdminAuction();
  }, [page, perPageLimit, filterState]);

  const columns = [
    {
      text: "Item Name",
      dataField: "item_name",
      formatter: (cell) => truncateText(cell, 20),
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
      text: "Auction Status",
      dataField: "status",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
    {
      text: "Category",
      dataField: "category.name",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
    {
      text: "Owner Name",
      dataField: "creator.first_name",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
    {
      text: "Owner Email",
      dataField: "creator.email",
    },
    {
      text: "Bid Count",
      dataField: "totalBids",
      formatter: (cell) => capitalizeFirstChar(cell),
    },
    {
      text: "Created At",
      dataField: "created_at",
      formatter: (cell) => formatDate(cell, "DD/MM/YYYY hh:mm A"),
      sort: true,
    },
    // {
    //   text: "Action",
    //   dataField: "action",
    //   isDummyField: true,
    //   align: "center",
    //   headerAlign: "center",
    //   formatter: (_, row) => {
    //     return (
    //       <div className="d-flex justify-content-between gap-2">
    //         <FaEye
    //           className="icon-hover view"
    //           title="View"
    //           onClick={() => handleRedirection(row?.id, "view")}
    //         />
    //         <FaEdit
    //           className="icon-hover edit"
    //           title="Edit"
    //           onClick={() => handleRedirection(row?.id, "edit")}
    //         />
    //         <FaTrash
    //           className="icon-hover delete"
    //           title="Delete"
    //           onClick={() => {
    //             setIsConfirmationShow(true);
    //             setDeleteSelectedRow(row);
    //           }}
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];

  const fetchAdminAuction = async () => {
    const payload = {
      page: page,
      limit: perPageLimit,
      sortBy: filterState?.sortBy,
      status: filterState?.status?.map((item) => item?.value),
      categoryId: filterState?.categories?.map((item) => item?.value),
      startDate: filterState?.dateRange?.[0],
      endDate: filterState?.dateRange?.[1],
      search: filterState?.search,
    };
    dispatch(getAdminAuctionList(payload));
  };

  const onTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    if (type === "sort") {
      setPage(PAGINATION_CONSTANT.PAGE_ONE);
      if (sortField === "created_at") {
        setFilterState({ ...filterState, sortBy: sortOrder });
      }
      return;
    }
    //  If the per page limit changes, reset the page 1
    if (sizePerPage !== perPageLimit) {
      setPage(PAGINATION_CONSTANT.PAGE_ONE);
    } else {
      setPage(page);
    }

    setPerPageLimit(sizePerPage);
  };

  const handleApply = (selectedOption, type) => {
    setPage(PAGINATION_CONSTANT.PAGE_ONE);
    setFilterState({ ...filterState, [type]: selectedOption });
  };
  return (
    <div className="auction-management-wrapper light-grey-bg h-100 p-3">
      {isLoading && <Loader />}
      <div className="table-card-wrapper">
        <MyAuctionFilter
          filterState={filterState}
          handleApply={handleApply}
          auctionCategoryList={auctionCategoryList}
        />
        <CustomTable
          columnData={columns}
          dataTable={auctionList?.data || []}
          page={page}
          size={perPageLimit}
          totalRecords={auctionList?.totalRecord || 0}
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
