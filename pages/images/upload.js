import React, { Component } from "react";
import Head from "next/head";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false,
      submitError: false,
      noFileError: false,
      filenameExistsError: false,
      filenameSpacesError: false,
      success: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadImageRequest = (event) => {
    event.preventDefault();

    // api request goes here
  };

  render() {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>Upload Image | Admin</title>
        </Head>
        <Header />
        <Sidebar page="images" />
        <div className="layout-content-container">
          <div className="images-upload-content">
            <div className="images-upload-header">
              <span>Upload Image</span>
            </div>
            <div className="images-upload-form-container">
              <form onSubmit={this.uploadImageRequest}>
                <div className="images-upload-form-label">
                  <span>Choose a file:</span>
                </div>
                <input
                  type="file"
                  name="selectedFile"
                  onChange={this.handleInputChange}
                />
                <div className="images-upload-form-submit-btn-container">
                  {!this.state.loading ? (
                    <button
                      className="images-upload-form-submit-btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <button className="images-upload-form-submit-btn loading">
                      Loading
                    </button>
                  )}
                </div>
              </form>
            </div>
            {this.state.success ? (
              <div className="images-upload-success-msg">
                <span>Success!</span>
              </div>
            ) : null}
            {this.state.submitError ? (
              <div className="images-upload-error-msg">
                <span>An error occurred.</span>
              </div>
            ) : null}
            {this.state.filenameExistsError ? (
              <div className="images-upload-error-msg">
                <span>Filename already exists.</span>
              </div>
            ) : null}
            {this.state.filenameSpacesError ? (
              <div className="images-upload-error-msg">
                <span>
                  Spaces need to be removed from the filename before uploading.
                </span>
              </div>
            ) : null}
            {this.state.noFileError ? (
              <div className="images-upload-error-msg">
                <span>No file was detected.</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
