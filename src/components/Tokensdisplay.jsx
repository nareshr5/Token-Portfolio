import React  from 'react'

import { useSelector } from 'react-redux';

import Tokendatafetch from './Tokendatafetch';



const Tokensdisplay = () => {

    // when tokendispay is rendered means --> the token are added 
    
    const {addedtoken }= useSelector(store => store?.watchlist);
    const datas = addedtoken[0];
 
  return (
    <div>

        
         {datas.length>0 && datas.map((data,index) =>(
            <div key={index}>
                    <Tokendatafetch data={data}/>
            </div>

         ))}


              
    </div>
  )
}

export default Tokensdisplay