import {
  DETAILS_FETCH_REQUEST,
  DETAILS_FETCH_SUCCESS,
  DEATILS_FETCH_FAILURE,
} from "./UserType";


export const FetchRequest = () => {
    return{
        type:DETAILS_FETCH_REQUEST
    }
} 

export const FetchSuccess = (datas) => {
    return{
        type:DETAILS_FETCH_SUCCESS,
        payload: datas
    }
}

export const FetchFailure = (error) => {
    return{
        type:DEATILS_FETCH_FAILURE,
        payload : error
    }
}