import React, { useState } from "react";
import DynamicFilterRenderer from "../../../sharedComponents/dynamicFilter/DynamicFilter";
import { CONSTANT_NAME, USER_ROLE } from "../../../utils/propertyResolver";
import { useSelector } from "react-redux";

export default function UserManagementFilter({
  handleApply,
  filterState,
  handleReset,
}) {
  const { loginUserDetails } = useSelector((state) => state.user);

  const filterConfig = [
    {
      type: "multi",
      label: "Roles",
      key: "role",
      value: filterState?.role,
      options: CONSTANT_NAME.USER_ROLE_LIST?.filter(
        (item) =>
          !(
            loginUserDetails?.role_id === USER_ROLE.ADMIN &&
            item?.label === "Admin"
          )
      ),
      isSearchable: false,
    },
    {
      type: "multi",
      label: "Status",
      key: "status",
      value: filterState?.status,
      options: CONSTANT_NAME.USER_STATUS_LIST,
      isSearchable: false,
    },
    {
      type: "input",
      label: "Search",
      key: "search",
      value: filterState?.search,
      placeholder: "Search by user name / email",
    },
    {
      type: "reset",
      label: "Reset",
    },
  ];

  return (
    <>
      <DynamicFilterRenderer
        configList={filterConfig}
        handleApply={handleApply}
        handleReset={handleReset}
      />
    </>
  );
}
