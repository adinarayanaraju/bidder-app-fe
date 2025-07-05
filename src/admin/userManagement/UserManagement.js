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

export default function UserManagement() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );

  const { userList, isLoading } = useSelector((state) => state.adminUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAdminUserList({
        page: page,
        limit: perPageLimit,
      })
    );
  }, [page, perPageLimit]);

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

  return (
    <div className="user-management-wrapper  light-grey-bg h-100 p-3">
      {isLoading && <Loader />}
      <div className="table-card-wrapper">
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
