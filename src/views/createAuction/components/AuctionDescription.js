import React from "react";
import { Col, Row } from "reactstrap";
import CustomInput from "../../../sharedComponents/customInput/CustomInput";

export default function AuctionDescription({
  createAuctionState,
  setCreateAuctionState,
  handleChange,
}) {
  return (
    <div className="auction-description-wrapper">
      <Row>
        <Col md={6}>
          <CustomInput
            label={"Product Name"}
            name="productName"
            placeholder="Enter product name"
            value={createAuctionState?.productName}
            onChange={handleChange}
            required={true}
          />
        </Col>
        <Col md={6}>
          <CustomInput
            label={"Base Price"}
            name="basePrice"
            placeholder="Enter base price"
            value={createAuctionState?.basePrice}
            onChange={handleChange}
            required={true}
          />
        </Col>
      </Row>
    </div>
  );
}
