import {configureStore} from "@reduxjs/toolkit";


import watchlistReducer from "./watchlistSlice";


const appStore = configureStore({
    reducer:{
        watchlist:watchlistReducer,
        
     
    },
});

export default appStore;