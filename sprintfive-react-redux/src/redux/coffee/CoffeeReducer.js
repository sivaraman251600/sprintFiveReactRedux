import { BUY_CAPPUCCINO_COFFEE } from "./CoffeeTypes"
import { BUY_COLD_COFFEE } from "./CoffeeTypes"

//initialState

const initialState = {
    noOfCappu:20,
    noOfCold:10
}

// Create Reducer

export const Coffeereducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAPPUCCINO_COFFEE:return{
            ...state,
            noOfCappu:state.noOfCappu - action.payload.count
        }

        case BUY_COLD_COFFEE:return{
            ...state,
            noOfCold:state.noOfCold - action.payload.count
        }

        default : return state
    }
}
