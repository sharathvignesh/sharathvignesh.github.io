import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14
  }
}

class Education extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderEducation(education) {
    let renderedEducation = [];
    for (let i = 0; i < education.length; i++){
      let educationSet = [];
      educationSet.push(<p className='universityName'>{education[i]["name"]}</p>);
      educationSet.push(<p className='degreeName'>{education[i]["degree"]}</p>);
      educationSet.push(<p className='educationYear'>{education[i]["year"]}</p>);
      for(var j=0; j<education[i]["description"].length; j++)
        educationSet.push(<p className='educationDescription'><li>{education[i]["description"][j]}</li></p>);
      renderedEducation.push(educationSet);
      renderedEducation.push(<br />);
    }
    return renderedEducation;
  }

  render() {
    let currentURL = window.location.href;
    return (
      <div>
          <div className='row'>
              <div className='col-xs-12 col-md-2'>
                  <p className='sideHeading'>
                     Education
                  </p>
              </div>
              <div className='col-xs-12 col-md-10 sideContent'>
                  {this.renderEducation(this.props.education)}
              </div>
          </div>
      </div>
    );
  }
}

export default Education;
