import React, { Component, useEffect, useState } from "react";
import Head from "next/head";
import moment from "moment";
import CodeMirror from "@uiw/react-codemirror";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import DeleteBlogPostModal from "../../../components/modals/deleteBlogPost.js";

const EditPost = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [titleInputValue, setTitleInputValue] = useState("Blog Post Title");
  const [urlTitleInputValue, setUrlTitleInputValue] = useState("blog-post-title");
  const [dateInputValue, setDateInputValue] = useState("2050-01-01T12:00");
  const [tagsInputValue, setTagsInputValue] = useState("html, css, javascript");
  const [imageUrlInputValue, setImageUrlInputValue] = useState(
    "https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png");
  const [markdownInputValue, setMarkdownInputValue] = useState("# Markdown content");
  const [seoTitleTagInputValue, setSeoTitleTagInputValue] = useState("Blog Post Title | Coding Blog");
  const [seoTitleTagCharLeft, setSeoTitleTagCharLeft] = useState(60);
  const [metaDescriptionInputValue, setMetaDescriptionInputValue] = useState(
    "The seo meta description for the blog post goes here.");
  const [metaDescriptionCharLeft, setMetaDescriptionCharLeft] = useState(160);
  //delete modal
  const [deleteError, setDeleteError] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [inBrowser, setInBrowser] = useState(false);

  const updateTitleInputValue = (event) => {
    setTitleInputValue(event.target.value);
  };

  const updateUrlTitleInputValue = (event) => {
    setUrlTitleInputValue(event.target.value);
  };

  const setDateInputValueToNow = () => {
    const dateString = moment().format("YYYY-MM-DD");
    const timeString = moment().format("HH:mm");
    setDateInputValue(dateString + "T" + timeString);
  };

  const updateSeoTitleTagInputValue = (event) => {
    let charLeft;
    if (60 - event.target.value.length > 0) {
      charLeft = 60 - event.target.value.length;
    } else {
      charLeft = 0;
    }
    setSeoTitleTagInputValue(event.target.value);
    setSeoTitleTagCharLeft(charLeft);
  };

  const updateMetaDescriptionInputValue = (event) => {
    let charLeft;
    if (160 - event.target.value.length > 0) {
      charLeft = 160 - event.target.value.length;
    } else {
      charLeft = 0;
    }

    setMetaDescriptionInputValue(event.target.value);
    setMetaDescriptionCharLeft(charLeft);
  };

  const hideDeleteModalRequest = () => {
    setDeleteError(false);
    setDeleteLoading(false);
    setShowDeleteModal(false);
  };

  useEffect(() => setInBrowser(true), []);
  return (
    <div className="layout-wrapper">
      <Head>
        <title>Edit Post | Admin</title>
      </Head>
      <Header />
      <Sidebar page="blog-posts" />
      <div className="layout-content-container">
        <div className="edit-blog-post-content">
          <div className="edit-blog-post-header">
            <span>Edit Blog Post</span>
          </div>
          <div className="edit-blog-post-form-container">
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Title</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="text"
                  value={titleInputValue}
                  onChange={(e) => setTitleInputValue(e.target.value)}
                />
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Url Title</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="text"
                  value={urlTitleInputValue}
                  onChange={(e) => setUrlTitleInputValue(e.target.value)}
                />
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Date</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="datetime-local"
                  value={dateInputValue}
                  onChange={(e) => setDateInputValueToNow(e.target.value)}
                />
                <span
                  onClick={() => setDateInputValueToNow()}
                  className="edit-blog-post-form-section-date-input-now"
                >
                  Now
                </span>
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Image URL</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="text"
                  value={imageUrlInputValue}
                  onChange={(e) => setImageUrlInputValue(e.target.value)}
                />
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Tags</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="text"
                  value={tagsInputValue}
                  onChange={(e) => setTagsInputValue(e.target.value)}
                />
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Markdown Content</span>
              </div>
              <div className="edit-blog-post-form-section-code-content-input">
                {inBrowser && (
                  <CodeMirror
                    className="edit-blog-post-form-section-codemirror"
                    editorDidMount={(editor) => {
                      codemirror = editor;
                    }}
                    value={markdownInputValue}
                    onBeforeChange={(editor, data, value) => setMarkdownInputValue(value)}
                    onChange={(editor, data, value) => setMarkdownInputValue(value)}
                    options={{
                      mode: "markdown",
                      theme: "dracula",
                      lineNumbers: true,
                    }}
                  />
                )}
              </div>
            </div>
            <div className="edit-blog-post-seo-section-title">
              <span>SEO</span>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Title Tag</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <input
                  type="text"
                  value={seoTitleTagInputValue}
                  onChange={updateSeoTitleTagInputValue}
                />
                <span
                  className={
                    seoTitleTagCharLeft > 0
                      ? "char-length green"
                      : "char-length red"
                  }
                >
                  {seoTitleTagCharLeft}
                </span>
              </div>
            </div>
            <div className="edit-blog-post-form-section">
              <div className="edit-blog-post-form-section-label">
                <span>Meta Description</span>
              </div>
              <div className="edit-blog-post-form-section-input">
                <textarea
                  type="text"
                  value={metaDescriptionInputValue}
                  onChange={updateMetaDescriptionInputValue}
                />
                <span
                  className={
                    metaDescriptionCharLeft > 0
                      ? "char-length green"
                      : "char-length red"
                  }
                >
                  {metaDescriptionCharLeft}
                </span>
              </div>
            </div>
            <div className="edit-blog-post-form-btns-section">
              <div className="edit-blog-post-form-submit-btn-container">
                {!submitLoading ? (
                  <div
                    onClick={() => setSubmitLoading(true)}
                    className="edit-blog-post-form-btn"
                  >
                    <span>Submit</span>
                  </div>
                ) : (
                  <div className="edit-blog-post-form-btn loading">
                    <span>Loading</span>
                  </div>
                )}
              </div>
              <div
                onClick={() => setShowDeleteModal(true)}
                className="edit-blog-post-form-delete"
              >
                <span>Delete</span>
              </div>
            </div>
            {submitError ? (
              <div className="edit-blog-post-submit-error-msg">
                <span>{errorMsg}</span>
              </div>
            ) : null}
            {submitSuccess ? (
              <div className="edit-blog-post-submit-success-msg">
                <span>Success!</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <DeleteBlogPostModal
        error={deleteError}
        loading={deleteLoading}
        show={showDeleteModal}
        hideRequest={hideDeleteModalRequest}
        deleteBlogPostRequest={() => setDeleteLoading(true)}
      />
    </div>
  )
};
export default EditPost;
