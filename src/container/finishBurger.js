import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from "redux"

class finishBurger extends Component {
    render() {
        const { ingradients } = this.props
        return (
            <div>
              Состав бургера:  {ingradients.map(el=>   el + ", "  )}
            </div>
        );
    }
}

  const mapStateToProps = state => ({
    ingradients: state.burgerSettings.ingradients,
    
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);
  
  export default finishBurger = connect(
    mapStateToProps,
    mapDispatchToProps
  )(finishBurger);