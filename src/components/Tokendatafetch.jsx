// used for fetching the data from the ID  details
import React from 'react'


import usetokenfetch from './usetokenfetch'
import TokenRow from './TokenRow'

import { useDispatch } from 'react-redux';

import { addedwishlist } from '../Utils/watchlistSlice';


const Tokendatafetch = ({data}) => {
 

    const dispatch = useDispatch();
    const splitdata=data.split("_");

     const{ error, loading, tokendata }=usetokenfetch(splitdata[0], splitdata[splitdata.length-1])

    // if(tokendata){
    //   dispatch(addedwishlist(tokendata));
    // }



  if(loading===true) return <h1>loading...</h1>;  
  if(error) return <p>{error}</p>

  return (
    <div>
        {tokendata && <TokenRow rowdata={tokendata}/>}
    </div>
  )
}

export default Tokendatafetch