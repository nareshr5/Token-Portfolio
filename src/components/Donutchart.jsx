import React from 'react'

import Piechart from './Piechart'
 import { useSelector } from 'react-redux'

const Donutchart = () => {

  // const {data} = useSelector(store => store.watchlist)
  // console.log(data)
  // let result=0;
  // for(let i=0;i<data.length;i++){
  //   result=result+ data[i]?.data?.attributes?.
  // }
  return (

    <div className='w-[1384px] h-[288px] rounded-[12px] p-[24px] gap-[19px]  bg-neutral-700'>
    

        <div className='flex justify-between p-[10px]'>
          {/* portfolio left */}
          <div className='w-[658.5px] h-[240px] gap-[20px]'>
            <div className='w-[658.5px] h-[20px] text-neutral-400'>Portfolio Total</div>
            <h1 className='w-[658.5px] h-[62px] text-[rgba(244,244,245,1)] text-4xl'>$10,275.08</h1>

            <div className='w-[658.5px] h-[118px] gap-[10px] '>
              <p className='w-[658.5px] h-[20px] text-neutral-400 mt-[20%]'>Last updated: 3.42.12 PM </p>
            </div>
            
          </div>





          {/* portfolio right  */}
          <div className='w-[658.5px] h-[240px] gap-[20px] '>
            <div>Portfolio Total</div>



            <div className='w-[658.5px] h-[200px] gap-[20px]'>

              <div className='flex justify-between'>

                  <div className='flex gap-[20px]'>
                        {/* pie chart */}
                        
                        <div className='w-[160px] h-[160px]  '>
                              {/* <div className=' w-[160px] h-[160px] border-1 border-indigo-700 rounded-full'></div> */}

                              <Piechart/>
                              
                        </div>

                        {/* coin listing */}
                        <div >
                            <ul className=' w-[229.25px] h-[200px] gap-[16px]'>
                              
                              <li className='w-[229.25px] h-[20px]'>Bitcoin (BTC)</li>
                              <li className='w-[229.25px] h-[15px]'></li>
                              <li className='w-[229.25px] h-[20px]'>Ethereum (ETH)</li>
                              <li className='w-[229.25px] h-[15px]'></li>
                              <li className='w-[229.25px] h-[20px]'>Ethereum (ETH)</li>
                              <li className='w-[229.25px] h-[15px]'></li>
                              <li className='w-[229.25px] h-[20px]'>Ethereum (ETH)</li>
                              <li className='w-[229.25px] h-[15px]'></li>
                              <li className='w-[229.25px] h-[20px]'>Ethereum (ETH)</li>
                              <li className='w-[229.25px] h-[15px]'></li>
                              <li className='w-[229.25px] h-[20px]'>Ethereum (ETH)</li>
                              
                            </ul>
                        </div>

                   </div> 


                    {/* percentage listing */}
                   <div className='text-right gap-[16px]  w-[229.25px] h-[200px] '>
                      <ul className='text-neutral-400'>
                          <li className='w-[229.25px] h-[20px]'>21.0%</li>
                          <li className='w-[229.25px] h-[15px]'></li>
                          <li className='w-[229.25px] h-[20px]'>64.6%</li>
                          <li className='w-[229.25px] h-[15px]'></li>
                          <li className='w-[229.25px] h-[20px]'>64.6%</li>
                          <li className='w-[229.25px] h-[15px]'></li>
                          <li className='w-[229.25px] h-[20px]'>64.6%</li>
                          <li className='w-[229.25px] h-[15px]'></li>
                          <li className='w-[229.25px] h-[20px]'>64.6%</li>
                          <li className='w-[229.25px] h-[15px]'></li>
                          <li className='w-[229.25px] h-[20px]'>64.6%</li>
                          
                        </ul>
                    </div>

              </div>


            </div>

            
           
            
          </div>
          
        </div>
    </div>
  )
}

export default Donutchart