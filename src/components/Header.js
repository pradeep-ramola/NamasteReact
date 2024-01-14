import React, {useState} from 'react'
const Header = (p)=>{
    // let [count , setCount]= useState(0);
    console.log(p);
    
    return (
        <>        
        <h1 id="heading">Heading {p.prop}</h1>
        {/* /*
         <button onClick={()=>{
            p.handle(count++)
            setCount(count);
            }}> Click this button to change prop data </button>*/ }
            <button onClick={()=>{
            p.handle(p.count++)
            
            }}> Click this button to change prop data </button>
        <div > 
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Menu</li>
        </div></>

    )
}

export default Header;