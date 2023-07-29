import React, { Component } from "react";

const Error = () => (
  <div className="layout-wrapper">
    <div className="error-page-wrapper">
      {this.props.statusCode === 404 ? (
        <div className="error-page-msg">
          <span>404 Page Not Found</span>
        </div>
      ) : null}
      {this.props.statusCode === 500 ? (
        <div className="error-page-msg">
          <span>500 Error</span>
        </div>
      ) : null}
      {this.props.statusCode !== 404 && this.props.statusCode !== 500 ? (
        <div className="error-page-msg">
          <span>An Error Occurred</span>
        </div>
      ) : null}
    </div>
  </div>
);
export default Error;
