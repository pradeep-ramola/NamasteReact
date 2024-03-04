import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./store/slices/cartSlice";
const Cart = () =>{
    const dispatch= useDispatch();
    function handleClick(){
      dispatch(clearCart())
    }
    const items = useSelector( (store)=>store.cart.items);
    return(
        <div className="text-center m-10 p-10">
        <h1  className="font-bold text-2xl"> Cart </h1>
        <div className="w-6/12 m-auto p-3">
            {items.length !== 0 && <button onClick={()=> handleClick()} className="p-2 m-2 bg-black text-white rounded-xl justify-center hover:bg-red-600">Clear Cart</button>}
            <ItemList items={items} isCart={true}/>
            { items.length === 0 && <h1 className="text-large">Nothing here 🥺 add Something will you ?</h1>}
        </div>  
        </div>
    );
}

export default Cart;