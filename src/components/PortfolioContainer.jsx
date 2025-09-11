import React from 'react';

import Donutchart from "./Donutchart";
import WatchlistContainer from "./WatchlistContainer";

import Localstorage from './localstorage';

const PortfolioContainer = () => {
  return (
    <div className='w-[1384px] h-[808px] mt-[22px] ml-[28px] gap-[48px] '>
        {/* portfoliocontainer */}
        <Donutchart/>
        <div className=' h-[48px]'></div>
        <WatchlistContainer/>

        <Localstorage/>
      
    </div>
  )
}

export default PortfolioContainer