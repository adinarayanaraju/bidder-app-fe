import React, { useState } from "react";
import { PAGINATION_CONSTANT } from "../../utils/propertyResolver";
import {
  capitalizeFirstChar,
  formatDate,
  truncateText,
} from "../../utils/commonFunction";
import CustomTable from "../../sharedComponents/customTable/CustomTable";

export default function AuctionManagement() {
  const [page, setPage] = useState(PAGINATION_CONSTANT.PAGE_ONE);
  const [perPageLimit, setPerPageLimit] = useState(
    PAGINATION_CONSTANT.PER_PAGE_LIMIT
  );
  const dummyRecord = [
    {
      id: 27,
      item_name: "abc",
      base_price: 22,
      description: "<p>aabbb</p>",
      start_date: "2025-05-15T17:32:13.000Z",
      end_date: "2025-05-28T17:32:19.000Z",
      status: "pending",
      images: [
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746120751536-m97mecndtv.jpg",
          size: 85074,
          fileName: "DL-Convert-PVC-Card.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746120789094-xpbc3x9ic1.jpeg",
          size: 11371,
          fileName: "images.jpeg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746120792850-xmybmbvti3f.png",
          size: 82580,
          fileName: "How-to-Apply-for-a-Personal-Loan-on-Aadhaar-Card_.png",
        },
      ],
      updated_at: null,
      created_at: "2025-05-01T17:33:21.000Z",
      totalBids: 0,
      category: {
        id: 2,
        name: "test name2",
        description: "category description",
        icon: "category icon",
      },
      creator: {
        id: 8,
        first_name: "vivek",
        last_name: "verma",
        email: "apnicoding72@gmail.com",
        dob: null,
      },
    },
    {
      id: 26,
      item_name: "aaa",
      base_price: 22,
      description: "<p>abc</p>",
      start_date: "2025-05-16T06:19:41.000Z",
      end_date: "2025-05-16T06:19:45.000Z",
      status: "pending",
      images: [
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080398652-hxccrun52o.jpg",
          size: 85074,
          fileName: "DL-Convert-PVC-Card.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080419567-m08q6e0avzg.png",
          size: 82580,
          fileName: "How-to-Apply-for-a-Personal-Loan-on-Aadhaar-Card_.png",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080429189-w5yv2mgf2gj.jpg",
          size: 19850,
          fileName: "best-thumbnail-background-for-youtube.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080435174-3ya0un67zes.jpg",
          size: 85074,
          fileName: "DL-Convert-PVC-Card.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080435695-ezz50g6woc.jpeg",
          size: 11371,
          fileName: "images.jpeg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080436046-kr51p0symfm.png",
          size: 82580,
          fileName: "How-to-Apply-for-a-Personal-Loan-on-Aadhaar-Card_.png",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080440139-w233zcf2pu.jpg",
          size: 85074,
          fileName: "DL-Convert-PVC-Card.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080440468-dwvjk5314b6.jpeg",
          size: 11371,
          fileName: "images.jpeg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080440728-9tm08jrmjgq.png",
          size: 82580,
          fileName: "How-to-Apply-for-a-Personal-Loan-on-Aadhaar-Card_.png",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080449381-t6ai39zgwde.jpg",
          size: 85074,
          fileName: "DL-Convert-PVC-Card.jpg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080450103-u3lz3x9sf.jpeg",
          size: 11371,
          fileName: "images.jpeg",
        },
        {
          url: "https://dm8w611fhi3t8.cloudfront.net/upload/1746080450434-j9k23t965o.png",
          size: 82580,
          fileName: "How-to-Apply-for-a-Personal-Loan-on-Aadhaar-Card_.png",
        },
      ],
      updated_at: null,
      created_at: "2025-05-01T06:21:08.000Z",
      totalBids: 0,
      category: {
        id: 3,
        name: "test name3",
        description: "category description",
        icon: "category icon",
      },
      creator: {
        id: 8,
        first_name: "vivek",
        last_name: "verma",
        email: "apnicoding72@gmail.com",
        dob: null,
      },
    },
  ];
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

  const onTableChange = (
    type,
    { page, sizePerPage, sortField, sortOrder }
  ) => {};
  return (
    <div className="auction-management-wrapper light-grey-bg h-100 p-3">
      <div className="table-card-wrapper">
        <CustomTable
          columnData={columns}
          dataTable={dummyRecord || []}
          page={page}
          size={perPageLimit}
          totalRecords={dummyRecord?.length || 0}
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
