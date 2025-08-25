import React from 'react'
import './home.scss';
import OngoingAuction from './components/OngoingAuction';
import AuctionBids from '../auctionBids/AuctionBids';

export default function Home() {
  return (
    <div className='home-page-wrapper'>
      {/* <OngoingAuction /> */}
      <AuctionBids />
    </div>
  )
}
