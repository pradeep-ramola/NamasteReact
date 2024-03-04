import { addItem,incrementItem, decrementCount,removeItem } from "../components/store/slices/cartSlice";
import { CDN_URL } from "./utils/constant";
import { useDispatch } from "react-redux";

const ItemList =({items,isCart })=>{

  const dispatch = useDispatch() ;
  
  function handleClick(item){
    dispatch(addItem(item));
  }

  const increaseQuantity = (item) =>{
    dispatch(incrementItem(item));
  }
  const decreaseQuantity = (item) =>{
    dispatch(decrementCount(item));
  }

  const removeProduct = (item) =>{
    dispatch(removeItem(item))
  }
return (<div>
    {
        items.map((item)=>(
          <div 
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
            <div className="py-2">
          <span>{item.card.info.name}</span>
          <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
          </div>  
            </div>
          
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item?.card?.info?.imageId}/>
            {!isCart && <button onClick={() =>handleClick(item)} className="p-2 mx-8 rounded-2xl bg-green-300 shadow-lg justify-center ">Add +</button>}
           
            {isCart && <div className="p-5 m-3 flex item-center justify-between">
              <button onClick={()=>decreaseQuantity(item)} className="transition ease-in-out delay-50 text-center px-2  bg-black text-white font-extrabold shadow-lg  rounded-lg  hover:bg-red-600">
                -
              </button>
              <label className="transition ease-in-out delay-50 bg-white font-medium text-center mx-2"> {item.itemCount} </label>
              <button onClick={()=>increaseQuantity(item)} className=" px-2 text-center bg-black text-white font-extrabold  shadow-lg  rounded-lg hover:bg-green-500">
                 +
              </button>
            </div> 
            
            }
            {
              isCart &&  <button onClick={()=>removeProduct(item)} className="mx-3 transition ease-in-out delay-50 item-center p-3 bg-yellow-300 font-semibold rounded-xl hover:bg-gray-300 shadow-2xl">Remove ?</button>
            }
           
          </div>
          
          </div>
        ))}
        
</div>);

}

export default ItemList;