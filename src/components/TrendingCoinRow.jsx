import React, { useState } from 'react';

import star from "../images/starimg.jpg";


const TrendingCoinRow = ({data, increasecount, decreasecount}) => {
 
  // console.log(data)
  // const {name,symbol,image_url} =  data?.attributes;


  const{image_url,name,symbol} = data.attributes;
  const[ischecked,setischecked]=useState(false);


  // console.log(data)
  const handletoggle = () => {
    
     setischecked((ischecked) => !ischecked);
    

    // this logic is little confusing
    !ischecked && increasecount(data.id);
    ischecked && decreasecount(data.id);
  };


  // let x = image.split("<");
  // let img=x[1].split(">");

  
  

  return (
    <>
        
        {/* trending coin row */}
        <div className={(ischecked)?`w-[624px] h-[44px] rounded-[6px] p-[8px] gap-[12px]   border-1 border-white  bg-[rgba(169,232,81,0.06)] ` :  `w-[624px] h-[44px] rounded-[6px] p-[8px] gap-[12px]   border-1 border-white  bg-[rgba(33,33,36,1)] hover:bg-[rgba(39,39,42,1)]`}>
            <div className='flex justify-around'>
            {/* image */}
            <div className='w-[28px] h-[28px] rounded-[6px] p-[2px] gap-[8px] bg-[rgba(33,33,36,1)]    border-1 border-white '><div className='w-[24px] h-[24px] rounded-[4px]'><img alt={image_url} src={image_url} /></div></div>

            {/* coin name */}
            <div  className='w-[514px] h-[20px] rounded-[6px] p-[2px] gap-[8px]  text-sm text-[rgba(244,244,245,1)] mt-1    border-1 border-white '>{name}({(symbol).toUpperCase()})</div>

            {/* star */}
           {ischecked && (<div className='w-[15px] h-[15px]  mt-[9px]'><img alt="star" src={star} className='w-[10.7px] h-[10.22px] bg-[rgba(169,232,81,1)]' /></div>)} 


            {/* radio input */}
            
            <div className='w-[15px] h-[15px]  mt-[2px]'><input type="radio" className='w-[12.5px] h-[12.5px] bg-[rgba(161,161,170,1)]'  checked={ischecked?true:false} onClickCapture={handletoggle}   /></div>
            </div>
        </div>

    </>
  )
}

export default TrendingCoinRow