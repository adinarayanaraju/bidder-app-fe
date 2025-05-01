import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAuctionDetailById } from '../../redux/slices/auctionSlice';
import AuctionIndex from './components/AuctionIndex';

export default function UpdateAuction() {
    const {auction_id} = useParams();
    const dispatch = useDispatch();
    const {auctionDetail} = useSelector((state)=>state.auction);
    
    useEffect(()=>{
        if(auction_id){
            dispatch(getAuctionDetailById(auction_id))
        }
    },[auction_id])
  return (
    <div className='create-auction-wrapper'>
      <AuctionIndex auctionData={auctionDetail}/>
    </div>
  )
}
