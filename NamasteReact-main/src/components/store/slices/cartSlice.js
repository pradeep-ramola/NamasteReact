import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },

    reducers:{
        addItem : (state,action)=>{
           
            // search for the item if it exists in items 
            // then add one to it else initialise it with 1
            console.log(state.items)
            const existingItem = state.items.find((item)=> item.card.info.id === action.payload.card.info.id)
            if(existingItem){
                debugger;
                existingItem.itemCount++;
            }
            else{
                state.items.push({
                    ...action.payload,
                    itemCount:1
                })
            }
            
        },

        incrementItem:(state,action) =>{
         const cartItems = state.items.find(
            (item) => item.card.info.id == action.payload.card.info.id
         );
         cartItems.itemCount++;
        },

        decrementCount:(state,action) =>{
        // first we need to find that item to get the count 
        const cartItem = state.items.find(
            (item)=> item.card.info.id == action.payload.card.info.id
        )

        if(cartItem.itemCount == 1){
            state.items = state.items.filter(
                (item) => item.card.info.id !== action.payload.card.info.id
            
            )
        }
        else{
            cartItem.itemCount --;
        }
        },

        removeItem:(state,action)=>{
            state.items = state.items.filter(
                (item) => item.card.info.id !== action.payload.card.info.id
            
            )
        },

        clearCart:(state,action)=>{
             state.items.length=0;
        },
    },
})

export const {addItem , removeItem , clearCart , incrementItem, decrementCount}=cartSlice.actions;
export default cartSlice.reducer;