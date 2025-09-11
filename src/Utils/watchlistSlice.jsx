import { createSlice } from "@reduxjs/toolkit";

const  watchlistSlice = createSlice({
  name:"watchlist",
  initialState:{

    addedtoken:[],
    tokenadded:false,

    addedwishlist:[],
    wishlistadded:false,
    

  },
  reducers:{
   
    addToken:(state,action)=>{
      state.tokenadded=true;
      state.addedtoken.push(action.payload);
    },
    addedwishlist:(state,action)=>{
      
      state.addedwishlist.push(action.payload);
    },

    
  },
});

export const {addToken,addedwishlist} = watchlistSlice.actions;
export default watchlistSlice.reducer

