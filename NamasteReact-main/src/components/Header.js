import {Link } from "react-router-dom"
import {LOGO_URL} from "../components/utils/constant"
import { useContext,useState } from "react"
import UserContext from "../components/utils/userContext"
import {  useSelector } from "react-redux"
import Hover from "../components/utils/hover"
const Header = ()=>{
    const {loggedInUser}= useContext(UserContext);
    const  cartItems = useSelector((store)=>store.cart.items);
    const[showPopUp,setshowPopUp] = useState(false);
    return (
    
        <div className="flex justify-between bg-slate-100 shadow-md ">
            <div className="logo-container">
                <Link to="/"><img className="w-24" 
                src={LOGO_URL}/></Link>

            </div>
        <div className="flex items-center cursor-pointer"> 
        <ul className="flex p-4 m-4 cursor-pointer">
        <li className="px-4 hover:bg-red-100 rounded-full "><Link>Home</Link></li>
        <li className="px-4 hover:bg-red-100 rounded-full cursor-pointer"><Link to="/contact">Contact</Link></li>
        <li className="px-4 hover:bg-red-100 rounded-full cursor-pointer"><Link to="/about">About</Link></li>
        <div className="px-4 hover:bg-red-100 rounded-full cursor-pointer"
                onMouseEnter={()=>setshowPopUp(true)}
                onMouseLeave={()=>setshowPopUp(false)}
        >
        <li ><Link to="/cart">Cart ({cartItems.length} items)
       { showPopUp && <Hover items={cartItems} isCart={true}/>}
        </Link></li>
        </div>

        <li className="px-4  hover:bg-red-100 rounded-full cursor-pointer"> { loggedInUser } </li>
        </ul>
        </div>
        </div>   

 
    )
}

export default Header;