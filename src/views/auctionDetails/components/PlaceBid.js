import React, { useState } from "react";
import "./placeBid.scss";
import CustomInput from "../../../sharedComponents/customInput/CustomInput";

export default function PlaceBid() {
  const [bidAmtArr, setBidAmtArr] = useState([141, 414, 5547]);
  const [bidValue, setBidValue] = useState("");
  const [error, setError] = useState("");

  const handleBidChange = (e) => {
    setBidValue(e.target.value);
  };
  return (
    <div className="place-bid-wrapper">
      <div className="heading">
        <p>Time left 4d 20h (stat, 2.39PM)</p>
      </div>
      <div className="bid-price-btn">
        {bidAmtArr?.map((item) => (
          <button key={item}>Bid INR: {item}</button>
        ))}
      </div>
      <div className="divider"></div>
      <div className="bid-form">
        <CustomInput
          label="Your max bid"
          name="your-bid"
          value={bidValue}
          placeholder="Enter your bid"
          required={true}
          onChange={handleBidChange}
          error={error}
        />
        <button disabled className="mt-3">
          Place bid
        </button>
      </div>
    </div>
  );
}
