import * as types from "../contstants/actionTypes";

const initState = {
    getBurgers: [],
    isFetching: false,
    error: null,
  };

export default (state = initState, {type, payload} ) => {
   
    switch(type) {
        case types.GET_BURGER: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.GET_BURGER_SUCCESS: {
            
            return {
                ...state,
                getBurgers: payload,
                isFetching: false,
              
            }
        }
        case types.GET_BURGER_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
       
        default: return state;

    }
};