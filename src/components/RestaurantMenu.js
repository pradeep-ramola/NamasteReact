import {useParams} from "react-router-dom"
import useRestaurantMenu from "./utils/useRestaurantMenu"
import Shimmer from "./utils/Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
 const[showIndex,setShowIndex] = useState(null);
 const { resId } = useParams();
 const data = useRestaurantMenu(resId);
 debugger;
 console.log(data);
 if (data === null) {
  return <Shimmer />;
}
 const { name, cuisines, costForTwoMessage }= data?.cards[2]?.card?.card?.info;
 const { itemCards } = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
 const categories =
 data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c) =>
     c.card?.["card"]?.["@type"] ===
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );
 return !data || 
  data.length ===0?<Shimmer/>:
  <> 
  <h1>{name}</h1>
  <h3>{cuisines.join(',')}</h3>
  <h3>{costForTwoMessage}</h3> 
  {/* <h3>{itemCards}</h3> */}
  {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          setShowIndex={() => setShowIndex(index)}
          showItems={index === showIndex ? true:false}
        />
      ))}
  </>
}

export default RestaurantMenu; 