import React from 'react'

const Localstorage = () => {
    const create = ()=>{
        localStorage.setItem("name","viki");
        localStorage.setItem("age","20");
    }

    const display = ()=>{
        let x;
        document.getElementById("display").innerHTML="";
        for(let i=0;i<localStorage.length;i++){
            x=localStorage.key(i);
        }

        document.getElementById("display").innerHTML+=x;
    }

    const remove = () =>{
        localStorage.removeItem("name");
        localStorage.removeItem("age");
    }


  return (
    <div className='mt-7 flex  text-red-600'>
        <button className='mx-4' onClick={create}>create</button>
        <button className='mx-4' onClick={display}>display</button>
        <button onClick={remove}>delete</button>

        <p id="display"></p>
    </div>
  )
}

export default Localstorage