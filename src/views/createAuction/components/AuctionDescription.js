import React from "react";
import { Col, Row } from "reactstrap";
import CustomInput from "../../../sharedComponents/customInput/CustomInput";
import CustomDropDown from "../../../sharedComponents/customDropDown/CustomDropDown";

export default function AuctionDescription({
  createAuctionState,
  setCreateAuctionState,
  handleChange,
  auctionCategoryList,
}) {
  const handleCategoryChange = (value) => {
    setCreateAuctionState((prevState) => ({
      ...prevState,
      category: value,
    }));
  };
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
      <Row className="mt-4">
        <Col md={6}>
          <CustomDropDown
            label="Select a Category"
            name="category"
            value={createAuctionState?.category}
            onChange={handleCategoryChange}
            placeholder="Choose a category"
            required
            options={auctionCategoryList || []}
          />
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  );
}
