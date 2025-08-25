import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Button,
} from "reactstrap";
import "./auctionBids.scss";
import CustomBadge from "../../sharedComponents/customBadge/CustomBadge";
// Dummy bids data (replace with API/state later)
const bids = [
  {
    id: 1,
    bidder: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/60?img=1",
    },
    amount: 250,
    placedAt: "2025-08-23T10:30:00",
    status: "pending",
  },
  {
    id: 2,
    bidder: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://i.pravatar.cc/60?img=2",
    },
    amount: 300,
    placedAt: "2025-08-23T11:00:00",
    status: "approved",
  },
  {
    id: 3,
    bidder: {
      name: "Michael Johnson",
      email: "mike@example.com",
      avatar: "https://i.pravatar.cc/60?img=3",
    },
    amount: 280,
    placedAt: "2025-08-23T12:00:00",
    status: "rejected",
  },
  {
    id: 3,
    bidder: {
      name: "Michael Johnson",
      email: "mike@example.com",
      avatar: "https://i.pravatar.cc/60?img=3",
    },
    amount: 280,
    placedAt: "2025-08-23T12:00:00",
    status: "rejected",
  },
];

export default function AuctionBids() {
  return (
    <div className="auction-bids-wrapper p-4">
      <Col md="12">
        <h4 className="mb-4">Bids for Auction #12345</h4>

        <Row>
          {bids.map((bid) => (
            <Col md="6" lg="3" key={bid.id} className="mb-4">
              <Card className="shadow-sm h-100">
                <CardBody>
                  {/* Bidder Info */}
                  <div className="bidder-info">
                    <img
                      src={bid.bidder.avatar}
                      alt=""
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h6 className="mb-0">{bid.bidder.name}</h6>
                      <small className="text-muted">{bid.bidder.email}</small>
                    </div>
                  </div>

                  {/* Bid Details */}
                  <div className="bid-details">
                    <div>
                      <strong>Bid Amount:</strong> <span>${bid.amount}</span>
                    </div>
                    <div>
                      <strong>Placed At:</strong>{" "}
                      <span>{new Date(bid.placedAt).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-3">
                    <CustomBadge
                      title={bid.status}
                      colorCode={bid.status === "approved" ? "green" : "red"}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons">
                    <Button color="success" size="sm">
                      Approve
                    </Button>
                    <Button color="danger" size="sm">
                      Reject
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}
