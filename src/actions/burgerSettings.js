import * as types from '../contstants/actionTypes';

const axios = require('axios')

const addBurgerSettingsRequest = payload => ({
    type: types.GET_BURGER_SETTINGS,
    payload
})

const addBurgerSettingsRequestSuccess = payload => ({
    type: types.GET_BURGER_SETTINGS_SUCCESS,
    payload
})

const addBurgerSettingsRequestFail = payload => ({
    type: types.GET_BURGER_SETTINGS_FAIL,
    payload
})

export  const burgerSettingsAction = payload => {
    
    return dispatch => {
        dispatch(addBurgerSettingsRequest())
        axios.get(`http://localhost:3000/burgers?name=${payload}`)
            .then(res =>
                setTimeout(() => dispatch(addBurgerSettingsRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addBurgerSettingsRequestFail(err)))
    }
}

export const ingradientsAction = payload => ({
    type: types.INGRADIENTS_BURGER,
    payload
})

export const closeModal = payload => ({
    type: types.CLOSE_MODAL_WINDOW,
    payload
})
