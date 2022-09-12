import React, { Component, } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import resume from '../../resume.json';

import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
// import Awards from './Awards';
import Projects from './Projects';
import Language from './Language';
var $ = require ('jquery');
let styles = {
  robotofont: {
    fontFamily: 'roboto'
  }
};

const muiTheme = getMuiTheme({
  stepper: {
    iconColor: "black"
  },
  raisedButton: {
    primaryColor: "black",
  }
});

class ResumeComponent extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='fullPage'>
          <div className='row col-xs-offset-1 col-md-offset-2'>
            <div className='col-xs-12 col-md-10' style={{'paddingTop' : '37px'}}>
             <h1 className='robotoRegFont'>{resume.name}</h1>
             <h5 className='robotoLightFont' style={{'color' : '#000000','lineHeight' : '2'}}>{resume.address} &nbsp;&nbsp;|&nbsp;&nbsp;{resume.email} &nbsp;&nbsp;|&nbsp;{resume.mobile}</h5>
          <About abt={resume.about}/>
          <br />
          <Language language={resume.language}/>
          <br />
          <Skills skillSet={resume.skills}/>
          <br />
          <Experience experience={resume.experience}/>
          <br />
          <Projects projects={resume.projects}/>
          <br />
          <Education education={resume.education}/>
          <br />
          <Contact contact={resume.contacts}/>
          <br />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({}))(ResumeComponent);
