import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: '00001',
        name: 'MacBook Pro',
        price: 2600,
        amount: 1
    },
    {
        id: '00002',
        name: 'PlayStation®5',
        price: 600,
        amount: 2
    }
]

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        incrementAmount:(state,action) => {
            console.log('+')
        },
        decrementAmount:(state,action) => {
            console.log('-')
        },
        deleteProduct:(state,action) => {
            console.log('x')
        },
    }

})

export default cartSlice.reducer
export const {
    incrementAmount,
    decrementAmount,
    deleteProduct
} = cartSlice.actions