import React from 'react'

const header = () => {
  return (
    <div className='w-[1440px] h-[56px] p-[12px] gap-[6px] flex justify-between      border-2 border-black'>

          {/* left items */}
          <div className='w-[1274px] h-[28px] gap-[12px] flex  '>
            <div className='w-[28px] h-[28px] rounded-[8px]   bg-[rgba(169,232,81,1)]'><div className='w-[16px] h-[16px] mt-[6px] ml-[6px] bg-neutral-950'></div></div>
            <div>Token Portfolio</div>
          </div>


          {/* right items */}
          <div className='w-[136px] h-[32px] gap-[24px] '>
              <button className='w-[136px] h-[32px] rounded-[100px] py-[6px] px-[10px] gap-[6px] bg-[rgba(169,232,81,1)]' >
              
                <div className='flex justify-around'>
                  <div className='w-[15px] h-[15px] mt-[5px]'><div className='w-[12.5] h-[10px] pt-[2.5px] pl-[1.25px]  bg-neutral-950'></div></div>
                  <div className='w-[95px] h-[20px] text-sm  text-neutral-950'>Connect Wallet</div>
                </div>
              </button>
          </div>


      
    </div>
  )
}

export default header