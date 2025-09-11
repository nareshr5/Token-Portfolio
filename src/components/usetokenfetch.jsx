
import React, { useState, useEffect } from "react";

const usetokenfetch = (name,address) => {
  const [tokendata, settokendata] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

 //console.log(name);
 //console.log(address);


  useEffect(() => {
    try {
      const getData = async () => {
        setloading(true);
        const response = await fetch("https://api.geckoterminal.com/api/v2/networks/"+name+"/tokens/"+address);
        if (!response.ok) throw new error(response.status);
        const data = await response.json();
        settokendata(data?.data);

        setloading(false);
      };

      getData();

    } catch (err) {
      seterror(err.message);
    }
  }, []);

  return { error, loading, tokendata };
};

export default usetokenfetch;
