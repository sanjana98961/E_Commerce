import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [], // Array of products
    reducers: {
        addProduct: (state, action) => { 
            state.unshift(action.payload);
        },
        removeProduct: (state, action) => {
            const idToRemove = action.payload;
            const removeItem =  state.filter((item) => item.id !== idToRemove); // Remove item by id
            return removeItem;
        }
        // updateQuantity:(state,action)=>{
        //    const {type,id} = action.payload
        //    console.log({a:action.payload})
        //     const product = state.find((item)=> {
        //         console.log({id: item.id})
        //          return (
        //             item.id ===id
        //         )})
        //     if(product){
        //         if(type=== "Decrease" && product.quantity > 1){
        //             product.quantity -=1 ;
        //             console.log({quantValue : product.quantity})
        //         }
        //         else{
        //             product.quantity += 1;
        //             console.log({quantValue : product.quantity})   
        //         }
        //     }
            
        // }
    },
});

export const { addProduct , removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
