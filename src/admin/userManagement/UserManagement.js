import React, { useEffect, useState } from "react";
import {
  PAGINATION_CONSTANT,
  USER_ROLE_LABEL,
} from "../../utils/propertyResolver";
import CustomTable from "../../sharedComponents/customTable/CustomTable";
import { capitalizeFirstChar, formatDate } from "../../utils/commonFunction";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUserList } from "../../redux/slices/admin/adminUserSlice";
import CustomBadge from "../../sharedComponents/customBadge/CustomBadge";
import Loader from "../../sharedComponents/loader/Loader";
import UserManagementFilter from "./components/UserManagementFilter";
import { useNavigate } from "react-router-dom";
import { routeConstants } from "../../utils/routeConstant";

export default function UserManagement() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );
  const [filterState, setFilterState] = useState({
    role: [],
    status: [],
    search: "",
  });

  const { userList, isLoading } = useSelector((state) => state.adminUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getAdminUserList({
        page: page,
        limit: perPageLimit,
        search: filterState?.search || "",
        role_ids: filterState?.role?.map((item) => item?.value) || [],
        is_active: filterState?.status?.map((item) => item?.value) || [],
      })
    );
  }, [page, perPageLimit, filterState]);

  const columns = [
    {
      text: "User Id",
      dataField: "id",
    },
    {
      text: "Name",
      dataField: "first_name",
      formatter: (cell, row) => {
        return capitalizeFirstChar(`${row.first_name} ${row.last_name}`);
      },
    },
    {
      text: "Email",
      dataField: "email",
    },
    {
      text: "Role",
      dataField: "role_id",
      formatter: (cell) => USER_ROLE_LABEL[cell],
    },
    {
      text: "Status",
      dataField: "is_active",
      formatter: (cell) => (
        <CustomBadge
          title={cell ? "Active" : "De-Active"}
          colorCode={cell ? "green" : "red"}
        />
      ),
    },
    {
      text: "Created At",
      dataField: "created_at",
      formatter: (cell) => formatDate(cell, "DD/MM/YYYY hh:mm A"),
    },
    {
      text: "Action",
      dataField: "action",
      isDummyField: true,
      formatter: (_, row) => {
        return (
          <div className="d-flex  gap-4">
            <p
              className="action-link"
              onClick={() => {
                navigate(`${routeConstants.ADMIN_USER_VIEW}/${row?.id}`);
              }}
            >
              View
            </p>
            <p
              className={`action-link`}
              onClick={() => {
                navigate(`${routeConstants.ADMIN_USER_EDIT}/${row?.id}`);
              }}
            >
              Edit
            </p>
            <p className="action-link" onClick={() => {}}>
              Delete
            </p>
          </div>
        );
      },
    },
  ];

  const onTableChange = (type, { page, sizePerPage, sortField, sortOrder }) => {
    if (type === "sort") {
      setPage(PAGINATION_CONSTANT.PAGE_ONE);
    }
    //  If the per page limit changes, reset the page 1
    if (sizePerPage !== perPageLimit) {
      setPage(PAGINATION_CONSTANT.PAGE_ONE);
    } else {
      setPage(page);
    }
    setPerPageLimit(sizePerPage);
  };

  const handleFilterApply = (value, key) => {
    setPage(PAGINATION_CONSTANT.PAGE_ONE);
    setFilterState((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilter = () => {
    setPage(PAGINATION_CONSTANT.PAGE_ONE);
    setFilterState({
      role: [],
      status: [],
      search: "",
    });
  };

  return (
    <div className="user-management-wrapper  light-grey-bg h-100 p-3">
      {isLoading && <Loader />}
      <div className="table-card-wrapper">
        <UserManagementFilter
          filterState={filterState}
          handleApply={handleFilterApply}
          handleReset={handleResetFilter}
        />
        <CustomTable
          columnData={columns}
          dataTable={userList?.data || []}
          page={page}
          size={perPageLimit}
          totalRecords={userList?.totalRecord || 0}
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
