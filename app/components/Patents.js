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

  renderExperience(patentsAndBlogs) {
    let renderedexperience = [];
    for (let i = 0; i < patentsAndBlogs.length; i++) {
      let experienceSet = [];
      experienceSet.push(
        <a target="_blank" href={patentsAndBlogs[i]["link"]}>
          <p className="PatentAndBlogName">{patentsAndBlogs[i]["name"]}</p>
        </a>
      );
      renderedexperience.push(<br />);
    }
    return renderedexperience;
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
            {this.renderExperience(this.props.patentsAndBlogs)}
          </div>
        </div>
      </div>
    );
  }
}

export default Patents;
