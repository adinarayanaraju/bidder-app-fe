import React from 'react'
import './home.scss';
import OngoingAuction from './components/OngoingAuction';
import CreateAuction from '../createAuction/CreateAuction';

export default function Home() {
  return (
    <div className='home-page-wrapper'>
      <CreateAuction />
      <OngoingAuction />
    </div>
  )
}
