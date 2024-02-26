import ItemList from "./ItemList";


const RestaurantCategory = ({data , showItems,setShowIndex}) => {
    function handleClick(){
        setShowIndex();
    }
      return(
        <div>
            <div
            onClick={() => handleClick()}
            >
          
            {data.title} ({data.itemCards.length}) 🕊️
            </div>
           
           { showItems && <ItemList items={data.itemCards}/>}
        </div>
      );
}

export default RestaurantCategory;