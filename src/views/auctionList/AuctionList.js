import React from "react";
import "./auctionList.scss";
import InfiniteScroller from "../../sharedComponents/infintiScroller/InfiniteScroller";
import { Col, Row } from "reactstrap";
import AuctionCard from "../../sharedComponents/auctionCard/AuctionCard";
import CustomBreadCrumb from "../../sharedComponents/customBreadCrumb/CustomBreadCrumb";
import { routeConstants } from "../../utils/routeConstant";
import AuctionListFilter from "./components/AuctionListFilter";

export default function AuctionList() {
  const auctionListInfo = {
    totalCount: 0,
    data: [
      {
        id: 3,
        item_name: "Vintage Clock 1",
        base_price: 200,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T06:59:09.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 5,
        item_name: "Vintage Clock 3",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T06:59:28.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 7,
        item_name: "Vintage Clock 5",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T06:59:38.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 8,
        item_name: "Vintage Clock 6",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T06:59:42.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 9,
        item_name: "Vintage Clock 7",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:02.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 10,
        item_name: "Vintage Clock 8",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:07.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 11,
        item_name: "Vintage Clock 9",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:12.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 12,
        item_name: "Vintage Clock 10",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:17.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 13,
        item_name: "Vintage Clock 11",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:21.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 14,
        item_name: "Vintage Clock 12",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:27.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 15,
        item_name: "Vintage Clock 13",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:32.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 16,
        item_name: "Vintage Clock 14",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:36.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 17,
        item_name: "Vintage Clock 15",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:40.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 18,
        item_name: "Vintage Clock 16",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:45.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
      {
        id: 19,
        item_name: "Vintage Clock 17",
        base_price: 150.75,
        description: "An antique vintage clock in excellent condition.",
        start_date: "2024-09-01T10:00:00.000Z",
        end_date: "2025-09-10T10:00:00.000Z",
        images: [
          "https://example.com/images/clock1.jpg",
          "https://example.com/images/clock2.jpg",
        ],
        updated_at: null,
        created_at: "2024-12-20T14:49:49.000Z",
        creator: {
          id: 6,
          first_name: "vivek",
          last_name: "verma",
          email: "apnicoding2@gmail.com",
          dob: null,
        },
        category: {
          id: 1,
          name: "test name",
          description: "category description",
          icon: "category icon",
        },
      },
    ],
    hasMore: false,
  };

  const fetchMoreData = () => {};
  return (
    <div className="auction-list-wrapper p-4">
      <CustomBreadCrumb
        items={[
          { name: "Home", route: routeConstants.HOME_PAGE },
          { name: "Ongoing Auction", route: routeConstants.AUCTION_LIST },
        ]}
      />
      <Row className="mt-4">
        
        {/* Filter section */}
        <Col lg={2} md={4} sm={12}>
          <AuctionListFilter />
        </Col>

        {/* Auction Card and Sorting */}
        <Col lg={10} md={8} sm={12}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="ongoing-heading">Ongoing Auction</h2>
            <div className="d-flex">
              <label className="me-2">Sort by:</label>
              {/* Replace this with an actual dropdown */}
              <div className="auction-sort-dropdown">
                <select>
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                </select>
              </div>
            </div>
          </div>
          {auctionListInfo?.data?.length > 0 && (
            <InfiniteScroller
              dataLength={auctionListInfo?.data?.length}
              nextFetch={fetchMoreData}
              hashMore={auctionListInfo?.hasMore}
            >
              <Row>
                {auctionListInfo?.data?.map((item, index) => (
                  <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                    <AuctionCard data={item} />
                  </Col>
                ))}
              </Row>
            </InfiniteScroller>
          )}
        </Col>
      </Row>
    </div>
  );
}
