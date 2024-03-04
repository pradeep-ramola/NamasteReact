
import Shimmer from './utils/Shimmer'
import {withPromotedLabel } from './RestaurantCard'
import RestaurantCard from './RestaurantCard'
import Search from './Search'
import useSwiggyApi from './utils/useSwiggyApi'
import { Link } from 'react-router-dom'

const Body = ()=>{

        const restaurants  = useSwiggyApi();
    const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard)
    console.log(restaurants);
    return !restaurants|| restaurants.length === 0 ? <Shimmer/> :(
        <div className='body'>
            <div className='filter'>
                {/* <Search/> */}
                <div className='flex flex-wrap'>
                    {
                        restaurants.map((card)=>(
                          <Link to={"/restaurants/" + card?.info?.id}>
                            {card?.data?.promoted ? <RestaurantCardWithPromoted key={card?.info?.id } res={card?.info}/> :
                            <RestaurantCard key={card?.info?.id} res={card?.info}/>} 
                          </Link>  
                        ))
                    }
                </div>

            </div>

        </div>
    )
    
}

export default Body