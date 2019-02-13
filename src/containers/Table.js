import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

class Table extends Component {
  render() {
    const { loading, units, onRequestUnits, error } = this.props;
    console.log('units are ' + units);
    return (
      <div>
        <table>
          <tr><th>zagolovok1</th><th>zagolovok2</th><th>zagolovok3</th><th>zagolovok4</th><th>zagolovok5</th></tr>
          { units && units.map(({ id, name, symbol }) => (

            <tr><td>{ id }</td><td>{ name }</td><td>{ symbol }</td></tr>
          ))
          }
        </table>
        { loading ? (
          <div>
            <Loader></Loader>
            <button disabled>Fetching...</button>
          </div>
        ) : (
            <button onClick={ onRequestUnits }>Request units</button>
          )
        }

        { error && <p style={ { color: 'red' } }>Pizdec priehali</p> }

      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    units: state.units,
    error: state.error
  }
}

const mapDispatchToProps = dipatch => {
  return {
    onRequestUnits: () => dipatch({ type: "REQUESTED_UNITS" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
