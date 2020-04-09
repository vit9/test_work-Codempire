import React, { Component } from 'react';

import RenderBurger from '../components/renderBurgers'

import { burgerAction } from "../actions/burgerAction"

import { connect } from 'react-redux';

import { bindActionCreators } from "redux"

class App extends Component {
  
  componentDidMount(){
    const { burgerAction } = this.props;
    burgerAction()
  }
  render(){
    const { getBurger, trigger, id } = this.props

  return(
    <div className="maindiv">
       <RenderBurger getBurger = { getBurger } trigger = { trigger } id = { id } />
    </div>
  );
  }
  
}
 
 


const mapStateToProps = state => ({
  getBurger: state.showBurgers.getBurgers,
  trigger: state.showBurgers.isFetching

});

const mapDispatchToProps = dispatch => bindActionCreators({ burgerAction }, dispatch);

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
