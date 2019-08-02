import { combineReducers } from "redux";

import showBurgers from './showBurger'

import burgerSettings from './burgerSettings'

export default  combineReducers({
    showBurgers,
    burgerSettings
})