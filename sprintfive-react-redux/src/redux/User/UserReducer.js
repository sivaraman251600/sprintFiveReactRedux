//Import Necessary Action
import {
  DETAILS_FETCH_REQUEST,
  DETAILS_FETCH_SUCCESS,
  DEATILS_FETCH_FAILURE,
} from "./UserType";
import  axios  from "axios";
import { FetchRequest, FetchSuccess, FetchFailure } from "./UserAction";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case DEATILS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const FetchUserDetails = () => {
  return function (dispatch) {
    dispatch(FetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const datas = res.data.map((data) => data.name);
        dispatch(FetchSuccess(datas));
      })
      .catch((err) => {
        dispatch(FetchFailure(err.message));
      });
  };
};
