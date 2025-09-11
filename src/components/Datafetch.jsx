import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const  DataFetch=()=> {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.watchlist.addedtoken);

  useEffect(() => {
    async function fetchData() {
      try {
        // Step 1: Call first API
        const res = await fetch("https://api.geckoterminal.com/api/v2/tokens/info_recently_updated");
        if (!res.ok) throw new Error("Failed to fetch initial data");

        const apiData = await res.json(); // e.g. ["101_Delhi", "102_Mumbai"]

        // Step 2: Split into id & address
        const formatted = apiData.map((item) => {
            let [id, address]=[]
            if(item.split("_").length<=2){
                [id, address] = item.split("_");
            }
           
          return { id, address };
        });

        
        const detailPromises = formatted.map(async ({ id, address }) => {
          const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/${id}/tokens/${address}`);
          if (!res.ok) throw new Error(`Failed to fetch for ${id}`);
          const detail = await res.json();
          return { id, address, detail };
        });

        // const allResults = await Promise.allSettled(detailPromises);

        const results = await Promise.allSettled(detailPromises);

     
        const successfulData = results
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value);
      
        console.log("Successful data:", successfulData);
       
        //dispatch(setAddresses(results));
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-3">User Addresses (from Redux)</h1>

      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="list-disc ml-6">
        {addresses.map((item) => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id}, 
            <strong> Address:</strong> {item.address}, 
            <strong> API Detail:</strong> {JSON.stringify(item.detail)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;