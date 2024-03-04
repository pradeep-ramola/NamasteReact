import {useState,useEffect} from 'react'
import {MENU_API} from './constant'

const useRestaurantMenu = (resId) =>{
    const [menuData,setMenuData] = useState(null);
    useEffect(()=>{
try{
    const fetchData = async()=>{
        debugger;
        const data = await fetch(MENU_API(resId)) ;
        const json = await data.json();
        const restaurantsData = json?.data;
        setMenuData(restaurantsData)
    }


   fetchData();
}
catch(error){
    console.log(error)
}

    },[]);
    return menuData;
}

export default useRestaurantMenu;