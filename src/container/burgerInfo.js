import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from "redux"

import { burgerSettingsAction, ingradientsAction, closeModal } from '../actions/burgerSettings'

import BurgerInfoRender from '../components/burgerInfoRender'

class burgerInfo extends Component {

    componentDidMount(){
       const { burgerSettingsAction, match } = this.props
       burgerSettingsAction(match.params.name)
        }
      
    render() {
        const { burgersSettings, ingradientsAction, showModalWindow, closeModal, staff } = this.props
        return (
            <Fragment>
               <BurgerInfoRender burgerSettings = {burgersSettings} ingradientsAction = { ingradientsAction } showModalWindow = { showModalWindow } closeModal = { closeModal } staff = { staff } /> 
                 
            </Fragment>
        );
    }
}

  const mapStateToProps = state => ({
    staff: state.burgerSettings.staff,
    showModalWindow: state.burgerSettings.showModalWindow,
    ingradients: state.burgerSettings.ingradients,
    burgersSettings: state.burgerSettings.burgersSettings,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ burgerSettingsAction, ingradientsAction, closeModal }, dispatch);
  
  export default burgerInfo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(burgerInfo);
  