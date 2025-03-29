import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import "./auctionCard.scss";

export default function AuctionCard({ data }) {
  return (
    <Card className="auction-card p-1 cursor-pointer">
      <div className="image-container">
        <img
          src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
          alt=""
          className="auction-image"
        />
        <Badge className="category-badge" color="red">
          {data?.category?.name}
        </Badge>
      </div>
      <CardBody>
        <CardTitle tag="h5" className="product-name">
          {data?.item_name}
        </CardTitle>
        <CardText className="price-bids d-flex justify-content-between mt-2">
          <div className="d-flex justify-content-center align-items-center">
            <p className="price m-0 ">Rs. {data?.base_price}</p>
            {/* <p className="bids m-0 mx-2">(2 bids)</p> */}
          </div>
          <span className="seller">
            ({data?.creator?.first_name} {data?.creator?.last_name})
          </span>
        </CardText>
        <CardText className="time-left">
          Time left 2hr <p className="end-time m-0">(2d)</p>
        </CardText>
      </CardBody>
    </Card>
  );
}
