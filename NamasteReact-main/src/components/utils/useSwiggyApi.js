import { useState,useEffect} from 'react'
import { SWIGGY_API } from "./constant";
 const swiggyAPI = () =>{

    const [restaurants,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const data = await fetch(SWIGGY_API);
                const json = await data.json();

                const restaurantsData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setData(restaurantsData)
               
                
            } catch (error) {
                console.log("error",error);
            }
        }
        fetchData();

    },[]);


   return restaurants;


}

export default swiggyAPI;

