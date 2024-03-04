import {useParams} from "react-router-dom"
import useRestaurantMenu from "./utils/useRestaurantMenu"
import Shimmer from "./utils/Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
 const[showIndex,setShowIndex] = useState(null);
 const { resId } = useParams();
 const data = useRestaurantMenu(resId);

 if (data === null) {
  return <Shimmer />;
}
debugger;
 const { name, cuisines, costForTwoMessage }= data?.cards[0]?.card?.card?.info;
 const { itemCards } = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 const categories =
 data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c) =>
     c.card?.["card"]?.["@type"] ===
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );
 return !data || 
  data.length ===0?<Shimmer/>:
  <div className="text-center m-4 p-4"> 
  <h1 className="font-extrabold text-2xl my-6">{name}</h1>
  <p className="font-bold">
  {cuisines.join(',')} - {costForTwoMessage}
  </p>
 
  {/* <h3>{itemCards}</h3> */}
  {categories.map((category, index) => (
    
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          setShowIndex={() => setShowIndex(index)}
          showItems={index === showIndex ? true:false}
        />
      ))}
  </div>
}

export default RestaurantMenu; 