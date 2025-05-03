import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGINATION_CONSTANT } from "../../../utils/propertyResolver";
import {
  deleteAuction,
  getAuctionCategoryLIst,
  getMyAuctionList,
} from "../../../redux/slices/auctionSlice";
import CustomTable from "../../../sharedComponents/customTable/CustomTable";
import {
  capitalizeFirstChar,
  formatDate,
  htmlToText,
  mapToSelectOptions,
  truncateText,
} from "../../../utils/commonFunction";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { routeConstants } from "../../../utils/routeConstant";
import Loader from "../../../sharedComponents/loader/Loader";
import NoRecord from "../../../sharedComponents/noRecord/NoRecord";
import ConfirmModal from "../../../sharedComponents/confirmModal/ConfirmModal";
import MultiSelectionFilter from "../../../sharedComponents/multiSelectionFilter/MultiSelectionFilter";
import { Col, Row } from "reactstrap";

export default function MyAuctionList() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );
  const [isConfirmationShow, setIsConfirmationShow] = useState(false);
  const [deleteSelectedRow, setDeleteSelectedRow] = useState("");
  const [filterState, setFilterState] = useState({
    categories: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { myAuctionList, isLoading } = useSelector((state) => state.auction);
  const { auctionCategoryList } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(getAuctionCategoryLIst());
  }, []);
  useEffect(() => {
    fetchMyAuctionList();
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
    {
      text: "Action",
      dataField: "action",
      isDummyField: true,
      align: "center",
      headerAlign: "center",
      formatter: (_, row) => {
        return (
          <div className="d-flex justify-content-between gap-2">
            <FaEye
              className="icon-hover view"
              title="View"
              onClick={() => handleRedirection(row?.id, "view")}
            />
            <FaEdit
              className="icon-hover edit"
              title="Edit"
              onClick={() => handleRedirection(row?.id, "edit")}
            />
            <FaTrash
              className="icon-hover delete"
              title="Delete"
              onClick={() => {
                setIsConfirmationShow(true);
                setDeleteSelectedRow(row);
              }}
            />
          </div>
        );
      },
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

  const handleRedirection = (id, type) => {
    if (type === "view") {
      navigate(`${routeConstants.AUCTION_DETAIL}/${id}`);
    } else {
      navigate(`${routeConstants.AUCTION_UPDATE}/${id}`);
    }
  };

  const fetchMyAuctionList = async () => {
    const payload = {
      page: page,
      limit: perPageLimit,
    };
    dispatch(getMyAuctionList(payload));
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteAuction(deleteSelectedRow?.id)).unwrap();

      //Calculate the new records after delete
      const remainingRecords = myAuctionList?.totalRecord - 1;

      //Total page
      const totalPages = Math.ceil(remainingRecords / perPageLimit);

      if (page > totalPages) {
        setPage((prev) => Math.max(prev - 1, 1));
      } else {
        await fetchMyAuctionList();
      }
      toggleModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleApply = (selectedOption, type) => {
    if (type === "categories") {
      setFilterState({ ...filterState, categories: selectedOption });
    }
  };
console.log(filterState)
  const toggleModal = () => setIsConfirmationShow(!isConfirmationShow);
  return (
    <div>
      {isLoading && <Loader />}
      <div className="content-card">
        <Row className="mb-3">
          <Col md={2}>
            <MultiSelectionFilter
              label="Categories"
              options={mapToSelectOptions(auctionCategoryList, "name", "id")}
              value={filterState?.categories || []}
              onApply={(selected) => handleApply(selected, "categories")}
              disabled={false}
            />
          </Col>
        </Row>
        {myAuctionList?.data?.length > 0 && (
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
        )}

        {myAuctionList?.data?.length === 0 && !isLoading && (
          <div style={{ height: "500px" }}>
            <NoRecord />
          </div>
        )}
      </div>
      {isConfirmationShow && (
        <ConfirmModal
          isOpen={isConfirmationShow}
          toggle={toggleModal}
          title="Confirm Action"
          message={`Are you sure you want to delete "${deleteSelectedRow?.item_name}" record?`}
          isWarningIconShow={true}
          confirmText="Yes, Confirm"
          cancelText="Cancel"
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}
