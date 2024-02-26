

const ItemList =({items })=>{
return (<div>
    {
        items.map((item)=>(
          <div 
          key={item.card.info.id}
          >
          <div>
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
        ))}
        <div>-------------------------------------------------</div>
</div>);

}

export default ItemList;