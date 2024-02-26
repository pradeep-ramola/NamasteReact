
import Shimmer from './utils/Shimmer'
import RestaurantCard from './RestaurantCard'
import Search from './Search'
import useSwiggyApi from './utils/useSwiggyApi'
import { Link } from 'react-router-dom'

const Body = ()=>{

        const restaurants  = useSwiggyApi();
    
    console.log(restaurants);
    return !restaurants|| restaurants.length === 0 ? <Shimmer/> :(
        <div className='body'>
            <div className='filter'>
                <Search/>
                <div className='res-container'>
                    {
                        restaurants.map((card)=>(
                          <Link to={"/restaurants/" + card?.info?.id}>
                            <RestaurantCard key={card?.info?.id} res={card?.info}/>
                          </Link>  
                        ))
                    }
                </div>

            </div>

        </div>
    )
    
}

export default Body