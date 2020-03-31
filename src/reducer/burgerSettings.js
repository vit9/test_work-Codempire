import * as types from "../contstants/actionTypes";

const initState = {
    staff: null,
    ingradients: [],
    burgersSettings: [],
    showModalWindow: false,
    error: null,
  };

  
export default (state = initState, {type, payload} ) => {
   
    switch(type) {
        case types.GET_BURGER_SETTINGS: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.GET_BURGER_SETTINGS_SUCCESS: {
            
            return {
                ...state,
                burgersSettings: payload.data,
                isFetching: false,
                ingradients: []      
            }
        }
        case types.GET_BURGER_SETTINGS_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
        case types.INGRADIENTS_BURGER: {
            return {
                ...state,
                ingradients: state.ingradients.concat(payload),
                showModalWindow: true,  
                staff: payload    
            }
        }
        case types.CLOSE_MODAL_WINDOW: {
            return {
                ...state,
                showModalWindow: false
            }
        }      
        default: return state;

    }
};