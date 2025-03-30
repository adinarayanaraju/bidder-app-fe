import React from "react";
import "./auctionDetail.scss";
import { Row, Button, Col } from "reactstrap";
import heartIcon from "../../assets/icons/heart.svg";

export default function AuctionDetails() {
  return (
    <div className="auction-detail-wrapper">
      <Row>
        <Col md={6}>{/* Slider */}</Col>
        {/* Details take 50% width */}
        <Col md={6}>
          <div className="auction-details">
            <p className="heading">XYZ instrument</p>
            <p className="time-left">Time left 4d 20h (Sat, 2:39PM)</p>
            <p className="price">RS. 192,00</p>
            <p className="auction-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              blanditiis, fugit laborum hic sint earum dignissimos
              exercitationem eligendi quibusdam illo sequi explicabo natus unde
              modi obcaecati eius ad animi iusto!
            </p>
            {/* Seller Information Section */}
            <div className="seller-info">
              <h1>Seller Information</h1>
              <p>
                <strong>First Name:</strong> Vivek
              </p>
              <p>
                <strong>Last Name:</strong> Kumar
              </p>
              <p>
                <strong>Email:</strong> vivek@gmail.com
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
