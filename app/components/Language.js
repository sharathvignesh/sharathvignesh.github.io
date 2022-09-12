import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class Language extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 col-md-2'>
            <p className='sideHeading'> Languages </p>
          </div>
          <div className='col-xs-12 col-md-10'>
            <p className='contents'> {this.props.language} </p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Language;
