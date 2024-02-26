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
    return (
        <>
        <div className="res-card" style={{ backgroundColor : "#f01fff21"}}>
        <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4> {cuisines.join(",")}</h4>
        <h4> stars {avgRating}</h4>
        <h4>{costForTwo} </h4>
        <h4> Average Delivery Time - { deliveryTime } mins</h4>
        <h4>{ locality }</h4>
        </div>
        </>
    )
}

export default RestaurantCard;