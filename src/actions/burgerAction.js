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

export const burgerAction = payload => {
    return dispatch => {
        dispatch(addNewBurgerRequest())
        fetch("http://localhost:3000/burgers")
            .then(res => res.json())
            .then(res =>
                setTimeout(() => dispatch(addNewBurgerRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addNewBurgerRequestFail(err)))
    }
}