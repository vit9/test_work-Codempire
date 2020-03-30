import * as types from '../contstants/actionTypes';

const addNewBurgerRequest = payload => ({
    type: types.GET_BURGER,
    payload
})

const addNewBurgerRequestSuccess = payload => ({
    type: types.GET_BURGER_SUCCESS,
    payload
})

const addNewBurgerRequestFail = payload => ({
    type: types.GET_BURGER_FAIL,
    payload
})

export const burgerAction = async (payload) => {
    return dispatch => {
        dispatch(addNewBurgerRequest())
        try{
            const res = await fetch("http://localhost:3000/burgers")
                setTimeout(() => dispatch(addNewBurgerRequestSuccess(res)), 1000)
        }catch(e){
            dispatch(addNewBurgerRequestFail(e))
        }      
    }
}