import React from "react";
import AuctionCard from "../../../sharedComponents/auctionCard/AuctionCard";
import { Col, Row } from "reactstrap";

export default function OngoingAuction() {
  const auctions = ["test", "test", "test","test","test","test", "test"];
  return (
    <div className="ongoing-auction-wrapper">
      <div className="heading d-flex justify-content-center align-items-center">
        <h1>On Going Auction</h1>
      </div>
      <div className="p-4">
        <Row>
          {auctions.map((item, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mt-4">
              <AuctionCard />
            </Col>
          ))}
        </Row>
      </div>
      <div className="view-all-btn text-center">
        <button>View All</button>
      </div>
    </div>
  );
}
