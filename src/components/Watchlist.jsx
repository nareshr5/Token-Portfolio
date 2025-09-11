import React,{useState} from 'react'


import { useSelector} from 'react-redux';

// const date = "2024-04-07T16:49:31.736Z"
// const splitted=date.split("T");
// console.log("16:49:31.736Z".split(":"))
// console.log(splitted.split(":"))

import Footer from './Footer';

import Tokensdisplay from './Tokensdisplay';

import Datafetch from "./DataFetch"








const PAGE_SIZE=2;

const Watchlist = () => {

  const[currentpage,setcurrentpage]=useState(0);

  


  // the below data is mock data
   const {data} = useSelector(store => store.watchlist);
  //console.log(data)


  const {tokenadded} = useSelector(store => store.watchlist);

  //console.log(tokenadded)
  

  
  // const totaltokens=data.length;
  // const totalpages = Math.ceil(totaltokens/PAGE_SIZE);

  // const start = currentpage * PAGE_SIZE;
  // const end = start + PAGE_SIZE;

  
 

    const {addedtoken }= useSelector(store => store?.watchlist);
   


  const handlenext = ()=>{
    setcurrentpage(currentpage => currentpage+1);
  }

  const handleprevious = ()=>{
    setcurrentpage(currentpage=> currentpage-1);
  }

  
  
  return (
    // token list container
    <div className='w-[1384px] h-[420px] rounded-[12px] border-1 border-[rgba(255,255,255,0.08)]'>

      {/* token list header */}
      <div >
        <div>
            <ul className=' w-[1384px] h-[48px] pr-[64px] pl-[24px] gap-[12px] bg-[rgba(39,39,42,1)] flex justify-between    '> 
              
               
                <li className=' w-[206px] h-[48] gap-[6px]  '><div className='mt-[10px] w-[38px] h-[20px] text-sm text-[rgba(161,161,170,1)] '>Token</div></li>    
                <li className='w-[206px] h-[48] gap-[6px]  '><div className=' mt-[10px] w-[32px] h-[20px] text-sm text-[rgba(161,161,170,1)] '>Price</div></li>    
                <li className='w-[206px] h-[48] gap-[6px]  '><div className=' mt-[10px] w-[39px] h-[20px] text-sm text-[rgba(161,161,170,1)] '>24h%</div></li>    
                <li className='w-[206px] h-[48] gap-[6px]  '><div className='mt-[10px] w-[87px] h-[20px] text-sm text-[rgba(161,161,170,1)] '>Sparkline (7d)</div></li>    
                <li className='w-[206px] h-[48] gap-[6px]  '><div className='mt-[10px] w-[55px] h-[20px] text-sm text-[rgba(161,161,170,1)]'>Holdings</div></li>    
                <li className='w-[206px] h-[48] gap-[6px]  '><div className='mt-[10px] w-[35px] h-[20px] text-sm text-[rgba(161,161,170,1)] '>Value</div></li>    
                
                
                  
            </ul>    
        </div> 


            {/* token listings */}
            <div className='w-[1384px] h-[312px] py-[12px] border-1 border-[rgba(255,255,255,0.08)]'>
             
             
              {/* single coin row representation */}
              

              {/* **********  this needed to be taken care of   ******** */}
              {/* pagination  on mock data ("data") happens here */}
              {/* {data.length>0 ? data.slice(start,end).map((item,index)=>(
                <div key={index}>
                  <TokenRow rowdata={item.data}/>
                </div>  
                  
              )): "click on Add Token to add token to wishlist"} */}



                {(tokenadded) ? (<Tokensdisplay />): <h1 className='w-[1000px] h-[50px] mx-[25%] my-[2%] text-3xl text-gray-400'>Click on the Add Token to create your wishlist</h1>}

               


        
            </div>


       

        
      </div>  
          
     {/* <Footer handlenext={handlenext} handleprevious={handleprevious} start={start} end={end} totaltokens={totaltokens} currentpage={currentpage} totalpages={totalpages}/> */}
     {/* <Footer handlenext={handlenext} handleprevious={handleprevious} start={start} end={end} totaltokens={totaltokens} currentpage={currentpage} totalpages={totalpages}/> */}
    </div>
  )
}

export default Watchlist








