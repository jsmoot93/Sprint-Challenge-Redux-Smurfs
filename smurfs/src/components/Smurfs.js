import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div className="loading">
          <Loader type="Oval" color="#00bfff" height="150" width="100" />
        </div>
      )
    }
    if (this.props.error) {
      return (
        <div className="error">
          <h3>{this.props.error}</h3>
        </div>
      )
    }
    return (
      <div>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs)