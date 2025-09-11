import React, { useState , useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addedwishlist } from '../Utils/watchlistSlice';

const TokenRow = ({rowdata}) => {

  console.log(rowdata);
  // when TokenRow component is called , it means we got the data
  const dispatch = useDispatch();

  
  const {wishlistadded, addedwishlist, tokenadded} =  useSelector(store => store.watchlist);
  

  // useEffect(()=>{
  //   tokenadded && dispatch(addedwishlist(rowdata));
  // },[])


 

  const {name , image_url , symbol, price_usd ,volume_usd  }= rowdata.attributes
  const price_change_percentage_24h = volume_usd?.h24


  const[holdings,setholdings]=useState(0.0500);
  const[onEdit,setonEdit]= useState(false);
  const[editholdings,seteditholdings]=useState(false);

  const handleEdit = ()=>{

    seteditholdings(editholdings => !editholdings);
    
  }

  const handleclick=()=>{
    setonEdit(onEdit=> !onEdit);
    
  }


  return (
    <div>
                            {/* editing holdings */}
                          {/* <div className='absolute z-[5px] text-black'>
                              <div className='w-[144px] h-[72px] mt-[660px] mr-[100px] rounded-[8px] p-[4px]bg-[rgba(39,39,42,1)]'>
                                <div>Edit Holdings</div>
                                <div>Remove</div>

                              </div>
                          </div> */}
                          
                          {/* single coin row representation */}
                <div className=' flex w-[1384px] h-[48px] px-[24px] gap-[12px]  bg-[rgba(36,36,36,1)] hover:bg-[rgba(39,39,42,1)]'>


                      {/* token tab */}
                      <div className='w-[206px] h-[48px] gap-[12px] flex  border-1 border-white'>

                      {/* image */}
                      <div className='mt-[8px] w-[32px] h-[48px] '>
                      <div className='w-[32px] h-[32px] rounded-[4px] border-[0.5px] border-[rgba(255,255,255,0.1)]'><img alt={name} src={image_url} /></div>
                      </div>


                      {/* coin content */}
                      <div className='mt-[14px] w-[162px] h-[48px] '>
                      <div className='w-[109px] h-[20px] text-sm'>{name} <span className='text-[rgba(161,161,170,1)] '>({symbol.toUpperCase()})</span></div>
                      </div>
                      </div>

                      {/* price */}
                      <div className='w-[206px] h-[48px]    border-1 border-white'>
                      <div className='mt-[14px] w-[71px] h-[20px] text-sm text-[rgba(161,161,170,1)]     '>${price_usd === null ? 0 : price_usd}</div>
                      </div>

                      {/* 24h% */}
                      <div className='w-[206px] h-[48px] border-1 border-white '>
                      <div className='mt-[14px] w-[47px] h-[20px] text-sm text-[rgba(161,161,170,1)]'>{price_change_percentage_24h>0? ("+"+ Math.round(price_change_percentage_24h*100)/100) : ("-"+ Math.round(price_change_percentage_24h*100)/100)}%</div>
                      </div>

                      {/* sparkline (7d) */}
                      <div className='w-[206px] h-[48px]        border-1 border-white  '>
                      <div className='mt-[10px] w-[75.6px] h-[28px] text-sm text-[rgba(161,161,170,1)]'>
                        
                          image
                      </div>
                      </div>


                      {/* holdings */}
                      <div className='w-[206px] h-[48px]        border-1 border-white '>


                      {(editholdings && onEdit) ?(
                        
                        <div className='w-[172px] h-[32px] gap-[12px] mt-[7px]  border-1 border-white'><div className='flex justify-between'>

                          <div ><input  className='w-[109px] h-[32px] rounded-[6px] px-[8px] gap-[8px] bg-[rgba(255,255,255,0.04)] border-2 border-[rgba(169,232,81,1)]  ' type="number" min="1" max="5" placeholder="Select" /></div>
                          
                          
                          
                          <button className='w-[51px] h-[32px] rounded-[6px] px-[10px] py-[6px] gap-[6px] bg-[rgba(169,232,81,1)] '><div className='w-[31px] h-[20px] text-xs text-[rgba(24,24,27,1)] '>Save</div></button>
                            </div>

                        
                        
                        </div>)
                        
                        
                        :(<div className='mt-[14px] w-[44px] h-[20px] text-sm text-[rgba(244,244,245,1)]' >{holdings}</div>)}

                      </div>


                          {/* value */}
                      <div className='w-[206px] h-[48px]      border-1 border-white'>
                      <div className='mt-[14px] w-[61px] h-[20px] text-sm text-[rgba(244,244,245,1)]'>${Math.round((holdings*price_usd )*100)/100}</div>

                        {onEdit && (<div className='w-[144px] h-[72px]  rounded-[8px] p-[4px] bg-[rgba(39,39,42,1)] mx-auto my-[10px] absolute z-[10px]  text-green-800 cursor-pointer  border-1 border-yellow-500'>
                          
                                  <button className='w-[136px] h-[28px] rounded-[4px] px-[8px] py-[4px] gap-[8px] bg-[rgba(39,39,42,1)] mx-auto flex justify-center cursor-pointer   border-1 border-yellow-500'><div className='w-[97px] h-[20px] text-[rgba(161,161,170,1)]' onClick={handleEdit}>Edit Holdings</div></button>


                                  <button className='w-[136px] h-[28px] rounded-[4px] px-[8px] py-[4px] gap-[8px] bg-[rgba(39,39,42,1)] mx-auto flex justify-center  cursor-pointer border-1 border-yellow-500'><div className='w-[97px] h-[20px] text-[rgba(253,164,175,1)]'>Remove</div></button>
                                

                                </div>)}
                        </div>

                      {/* ... */}
                      <div className='w-[28px] h-[48px]    border-1 border-white cursor-pointer ' onClick={handleclick}>
                      <div className='w-[28px] h-[28px] rounded-[6px] p-[6.5px]  bg-[rgba(255,255,255,0)] '>...</div>
                      </div>

                      </div>



    </div>
  )
}

export default TokenRow
