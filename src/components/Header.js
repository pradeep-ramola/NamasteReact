import {Link } from "react-router-dom"
const Header = ()=>{

    return (
        <>     
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1706776362~exp=1706776962~hmac=dc5653f747ca5e63a163a4fcc1a0d136f47322bb6c9e63bf9cd102ea8bad1418"/>

            </div>
        <div className="nav-items"> 
        <ul>
        <li><Link>Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link>Menu</Link></li>
        </ul>
        </div>
        </div>   
      
        </>
 
    )
}

export default Header;