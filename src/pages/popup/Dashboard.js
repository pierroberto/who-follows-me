import React, { Component } from "react";
import { connect } from "react-redux";
import "./dashboard.css";
class Dashboard extends React.Component {
  render() {
    console.log("dashbaord loaded");
    return <div className="wrapper" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
