import React, { useEffect } from "react";
import "./auctionDetail.scss";
import { Row, Button, Col } from "reactstrap";
import heartIcon from "../../assets/icons/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAuctionDetailById } from "../../redux/slices/auctionSlice";
import { useParams } from "react-router-dom";
import { formatDate, getTimeLeft } from "../../utils/commonFunction";

export default function AuctionDetails() {
  const dispatch = useDispatch();
  const { auction_id } = useParams();
  const { auctionDetail } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(getAuctionDetailById(auction_id));
  }, [auction_id]);

  return (
    <div className="auction-detail-wrapper">
      <Row>
        <Col md={6}>{/* Slider */}</Col>
        {/* Details take 50% width */}
        <Col md={6}>
          <div className="auction-details">
            <p className="heading">{auctionDetail?.item_name}</p>
            <p className="time-left">
              Time left {getTimeLeft(auctionDetail?.end_date)} (
              {formatDate(auctionDetail?.end_date, "ddd")},{" "}
              {formatDate(auctionDetail?.end_date, "h:mm A")})
            </p>
            <p className="price">RS. {auctionDetail?.base_price}</p>
            <p className="auction-info">{auctionDetail?.description}</p>
            {/* Seller Information Section */}
            <div className="seller-info">
              <h1>Seller Information</h1>
              <p>
                <strong>First Name:</strong>{" "}
                {auctionDetail?.creator?.first_name}
              </p>
              <p>
                <strong>Last Name: </strong>
                {auctionDetail?.creator?.last_name}
              </p>
              <p>
                <strong>Email:</strong> {auctionDetail?.creator?.email}
              </p>
            </div>
            <div className="bid-now-btn">
              <Button>Bid Now</Button>
              <div className="save-draft">
                <img src={heartIcon} alt="save" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
