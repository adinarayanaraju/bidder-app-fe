import React, { useState } from "react";
import "./placeBid.scss";

export default function PlaceBid() {
  const [bidAmtArr, setBidAmtArr] = useState([141, 414, 5547]);
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
        {/* custom input */}
        <button disabled>Place bid</button>
      </div>
    </div>
  );
}
