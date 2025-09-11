
import React, { useState, useEffect } from "react";

const usetrendingfetch = () => {
  const [trendingdata, settrendingdata] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");


  useEffect(() => {
    try {
      const getData = async () => {
        setloading(true);
        const response = await fetch("https://api.geckoterminal.com/api/v2/tokens/info_recently_updated");
        if (!response.ok) throw new error(response.status);
        const data = await response.json();
        settrendingdata(data?.data);

        setloading(false);
      };

      getData();
    } catch (err) {
      seterror(err.message);
    }
  }, []);

  return { error, loading, trendingdata };
};

export default usetrendingfetch;
