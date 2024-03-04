
import ItemList from '../ItemList';
const Hover = ({items}) =>{



return(

    items.length !== 0?
    <div className='my-6 absolute overflow-hidden bg-white border border-gray-330 shadow-lg rounded-3xl p-2 z-5 transform -translate-x-16'>
        <div>
        {
        items && <ItemList items={items} isCart={true}/>
        }
        </div>

    </div> : ''
);
}

export default Hover ;