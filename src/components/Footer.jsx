import React from 'react'

const Footer = ({handlenext, handleprevious, start , end, totaltokens, currentpage, totalpages}) => {

  
  return (
    <div className=' border-1 border-slate-500 '>
      {/* Footer */}

      <div className='w-[1384px] h-[60px] p-[16px] flex justify-between'>

        {/* left */}
        <button className='flex w-[149px] h-[28px] rounded-[6px] pt-[4px] pb-[4px] pl-[8px] pr-[8px] gap-[4px] bg-[rgba(255,255,255,0)] text-sm'>
          <div className='w-[7px] h-[20px] text-[rgba(161,161,170,1)]'>{start+1}</div>
           <div className='w-[15px] h-[15px] text-[rgba(161,161,170,1)]'>-</div>
            <div className='w-[103px] h-[20px] text-[rgba(161,161,170,1)]'>{end} of {totalpages} results</div></button>  



        {/* right */}
        <div className='w-[204px] h-[28px] gap-[8px] flex text-xs'>

          <button className='w-[98px] h-[28px] rounded-[6px] px-[8px] py-[4px] gap-[6px] bg-[rgba(255,255,255,0)]'> <div className='w-[82px] h-[20px] text-[rgba(161,161,170,1)]'>{currentpage+1} of {totalpages} pages</div></button>  


            
            <button disabled={currentpage ===0 ? true : false} className='w-[44px] h-[28px] rounded-[6px] py-[4px] px-[8px] gap-[6px] bg-[rgba(82,82,91,1)] cursor-pointer'><div className='w-[28px] h-[20px] text-[rgba(161,161,170,1)]' onClick={handleprevious}  >prev</div></button> 
            
            <button disabled={currentpage === totalpages-1 ? true : false} className='w-[46px] h-[28px] rounded-[6px] py-[4px] px-[8px] gap-[6px] bg-[rgba(255,255,255,0)] cursor-pointer'><div className='w-[30px]h-[20px] text-[rgba(161,161,170,1)]' onClick={handlenext} >Next</div></button></div>  
       
      </div>
       
    </div>
  )
}

export default Footer