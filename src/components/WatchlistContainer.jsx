import React,{ useState , useRef} from 'react'

import Watchlist from './Watchlist'

import refresh from "../images/refresh_image.png";
import star from "../images/starimage.jpg";
import TrendingCoinRow from './TrendingCoinRow';

import usetrendingfetch from './usetrendingfetch';

import { useDispatch, useSelector } from 'react-redux';

import { addToken } from '../Utils/watchlistSlice';

const WatchlistContainer = () => {

  const[isopen,setisopen] = useState(false);
  const[tokencount,settokencount]=useState(0);
  const[watchlist,setwatchlist]=useState([]);

  // for getting the data when radio button is clicked
  const radiodata = useRef([]);

 

  const dispatch = useDispatch();

   
// custom hook
  const { error, loading, trendingdata } = usetrendingfetch();

  const {tokenadded} = useSelector(store => store.watchlist);




  const increasecount = (datadetails) => {
    settokencount((tokencount) => tokencount + 1);
    addtoken(datadetails)
    
  };

  const decreasecount = (datadetails) => {
    settokencount((tokencount) => tokencount - 1);
    removetoken(datadetails);
  };

  const addtoken=(datadetails)=>{
    radiodata.current.push(datadetails);
   // console.log(radiodata);
   //setwatchlist(watchlist=> [...watchlist,datadetails])
   
    
  }

  const removetoken=(datadetails)=>{
    

    const result = radiodata.current.filter(item =>{
      if(item !== datadetails){
        return item;
      }
    })

    radiodata.current=result;
    console.log(radiodata);
  }



  const handletoggle = ()=>{
    setisopen(isopen=> !isopen);
  }

  const handlewishlist =()=>{
    //  dispatch(addToken(watchlist));  
    dispatch(addToken(radiodata.current))
    setisopen(isopen=> !isopen);
    
    
  }




  

  

  return (

    // WatchlistContainer
    <div className='w-[1384px] h-[472px] gap-[16px] '>


        {/* popup */}
        {/* bg-[rgba(33,33,36,1)] this has to put below */}
      {isopen && (<div className='w-[640px] h-[485px]       absolute z-5 -mt-[210px]'>


                    <div className='w-[640px] h-[480px] rounded-[12px] ml-[372px] bg-[rgba(33,33,36,1)] '>


                          {/* max width 960px ,need to add this for the search bar */}
                          {/* search bar */}
                          <div className='w-[640px] h-[52px] mx-[16px] my-[12px] gap-[12px]    border-1 border-purple-900'>
                          <input className='w-[608px] h-[28px]  gap-[8px]' type="text" placeholder="Search tokens(e.g.,ETH,SOL)" />
                          </div>



                            {/* trending box  */}
                            <div className='w-[640px] h-[432px] mx-[8px]    '>

                                {/* trending header */}
                                <div className='w-[624px] h-[36px] rounded-[6px] px-[8px] py-[12px] gap-[12px] text-[rgba(161,161,170,1)]   border-1 border-green-800'>
                                  <div className='w-[608px] h-[20px] text-sm text-[rgba(113,113,122,1)]'>Trending</div>


                              </div>





                                {/* trending coin row */}

                                <div className='h-[340px]  overflow-y-scroll '>

                                  {trendingdata.map((data,index) =>(
                                    <div key={data.id} >
                                          <TrendingCoinRow data={data}  increasecount={increasecount} decreasecount={decreasecount} index={index} />
                                    </div>
                                  ))}

                                </div>  


                                  {/* trending Footer */}
                                  <div  className='w-[640px] h-[57px]  absolute bottom-0 bg-[rgba(39,39,42,1)]'>

                                      <div className='w-[640px] h-[56px] gap-[12px] py-[12px] px-[16px] flex justify-end'>
                                        <button  className='w-[114px] h-[32px] gap-[8px] cursor-pointer'  onClick={handlewishlist}>

                                         <div   className={(tokencount>=1)?(`w-[114px] h-[32px] gap-[6px] rounded-[6px] px-[10px] py-[6px]   text-sm text-black bg-[rgba(169,232,81,1)]`):(`w-[114px] h-[32px] gap-[6px] rounded-[6px] px-[10px] py-[6px]   text-xs text-[rgba(113,113,122,1)] bg-[rgba(39,39,42,1)] border-1 border-[rgba(113,113,122,1)]`)} >Add to Wishlist</div> 

                                        </button>
                                      </div>
                                  </div>


              </div>




              </div>

                              </div> 

        
        
        
         
        
        
        
        
        
        
        )}
    




      
      {/* watchlist header */}
      <div className='w-[1384px] h-[36px] gap-[12px] flex justify-between     '>

          {/* star and watchlist title */}
        <div className='w-[1101px] h-[30px] gap-[4px] flex align-middle    '>
           

            <div className='w-[28px] h-[28px]  '>
              <img className='  pt-[4.17px] pb-[4.01px] text-[rgba(169,232,81,1)] ' alt="starimage" src={star} />
            </div>

            <div className='w-[105px] h-[30px] text-neutral-100 text-2xl'>Watchlist</div>

        </div>


        
        {/* refresh price  and addToken button */}

        <div className='flex justify-between'>
          <button className=' w-[142px] h-[36px] rounded-[6px] gap-[6px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] bg-[rgba(255,255,255,0.04)]' >
            <div className='flex items-center'>
              <img className='w-[15px] h-[15px] ' alt="refresh-image" src={refresh}/>
              <div className='w-[97px] h-[20px] text-sm text-[rgba(244,244,245,1)] '>Refresh Prices</div>
            </div>
          </button>


         
          <button  className='w-[117px] h-[36px] rounded-[6px] px-[12px] py-[8px] gap-[6px] bg-[rgba(169,232,81,1)] text-gray-900 ' onClick={handletoggle}>
            <div className='items-center text-sm'>
              <span className='w-[15px] h-[15px]'>+ </span><span className='text-sm w-[72px] h-[20px]' >Add Token</span>
            </div>
            </button>
         
          
        </div>

        
      </div>

      <div className=' h-[18px]'></div>

        {/* added tokens */}
        <Watchlist />
     
    </div>
  )
}

export default WatchlistContainer