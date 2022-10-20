import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

// import {  } from './../actions/registerActions';

let styles = {
  icon2: {
    marginRight: 10,
    marginTop: 14,
  },
};

class Patents extends Component {
  constructor(props) {
    super(props);
  }

  renderPatents(projects) {
    let renderedprojects = [];
    for (let i = 0; i < projects.length; i++){
      let projectsSet = [];
      if(projects[i]["link"]){
        projectsSet.push(<a target="_blank" href={projects[i]["link"]}><p className='projectName'>{projects[i]["name"]}</p></a>);
      }
      else{
        projectsSet.push(<p className='projectName'>{projects[i]["name"]}</p>);
      }
      renderedprojects.push(projectsSet);
      renderedprojects.push(<br />);
    }
    return renderedprojects;
  }

  render() {
    let currentURL = window.location.href;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-2">
            <p className="sideHeading">Patents & Blogs</p>
          </div>
          <div className="col-xs-12 col-md-10 sideContent">
            {this.renderPatents(this.props.patentsAndBlogs)}
          </div>
        </div>
      </div>
    );
  }
}

export default Patents;
