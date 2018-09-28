import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from "../components/city";

import { setCities } from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
