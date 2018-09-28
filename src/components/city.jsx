import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions";

class City extends Component {
  handleClick = () => {
    console.log("click");
    this.props.selectCity(this.props.city);
  };

  render() {
    return (
      <li className="cities-items" onClick={this.handleClick} >
        {this.props.city.name}
      </li>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
