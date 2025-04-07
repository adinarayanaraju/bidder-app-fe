import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function CustomBreadCrumb({
  parentName,
  parentRoute,
  currentName,
}) {
  return (
    <div className="custom-bread-crumb-wrapper">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={parentRoute}>{parentName}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{currentName}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
