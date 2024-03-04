import { CDN_URL } from "./utils/constant";

const RestaurantCard = (props)=>{
  
    const { res } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines,
        locality,
        sla :{ deliveryTime } 
    } = res;
    const emoji ="⭐"
    return (
        <>
        <div className="h-[440px] m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-gray-200 shadow-lg" >
        <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4> Cuisines - {cuisines.join(", ")}</h4>
        <h4> Ratings {Array.from({length : avgRating}, () => emoji).join(" ")   }</h4>
        <h4>{costForTwo} </h4>
        <h4> Average Delivery Time - { deliveryTime } mins</h4>
        <h4>{ locality }</h4>
        </div>
        </>
    )
}

export const withPromotedLabel=(RestaurantCard)=>{
return(props) => {
    return(
       <div>
        <h2>Promoted</h2>
       <RestaurantCard {...props}/>
       </div>
    )
        
    
}
}

export default RestaurantCard;