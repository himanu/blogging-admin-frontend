import React, { useState, useEffect } from "react";
import Head from "next/head";
import moment from "moment";
import CodeMirror from "@uiw/react-codemirror";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const BlogPostForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [titleInputValue, setTitleInputValue] = useState("");
  const [urlTitleInputValue, setUrlTitleInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [tagsInputValue, setTagsInputValue] = useState("");
  const [imageUrlInputValue, setImageUrlInputValue] = useState("");
  const [markdownInputValue, setMarkdownInputValue] = useState("");
  const [seoTitleTagInputValue, setSeoTitleTagInputValue] = useState("");
  const [seoTitleTagCharLeft, setSeoTitleTagCharLeft] = useState(60);
  // eslint-disable-next-line max-len
  const [metaDescriptionInputValue, setMetaDescriptionInputValue] =
    useState("");
  const [metaDescriptionCharLeft, setMetaDescriptionCharLeft] = useState(160);
  const [inBrowser, setInBrowser] = useState(false);

  useEffect(() => {
    setInBrowser(true);
  }, []);

  const updateTitleInputValue = (event) => {
    setTitleInputValue(event.target.value);
  };

  const updateUrlTitleInputValue = (event) => {
    setUrlTitleInputValue(event.target.value);
  };

  const updateDateInputValue = (event) => {
    setDateInputValue(event.target.value);
  };

  const setDateInputValueToNow = () => {
    const dateString = moment().format("YYYY-MM-DD");
    const timeString = moment().format("HH:mm");
    setDateInputValue(dateString + "T" + timeString);
  };

  const updateImageUrlInputValue = (event) => {
    setImageUrlInputValue(event.target.value);
  };

  const updateTagsInputValue = (event) => {
    setTagsInputValue(event.target.value);
  };

  const updateMarkdownInputValue = (value) => {
    setMarkdownInputValue(value);
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

  const submitCreateNewPostRequest = () => {
    console.log("hello ", markdownInputValue);
    setLoading(false);
    setSubmitError(false);
    setErrorMsg("");
  };

  return (
    <div className="layout-wrapper">
      <Head>
        <title>Create New Post | Admin</title>
      </Head>
      <Header />
      <Sidebar page="blog-posts" />
      <div className="layout-content-container">
        <div className="create-blog-post-content">
          <div className="create-blog-post-header">
            <span>Create New Blog Post</span>
          </div>
          <div className="create-blog-post-form-container">
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Title</span>
              </div>
              <div className="create-blog-post-form-section-input">
                <input
                  type="text"
                  value={titleInputValue}
                  onChange={updateTitleInputValue}
                />
              </div>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Url Title</span>
              </div>
              <div className="create-blog-post-form-section-input">
                <input
                  type="text"
                  value={urlTitleInputValue}
                  onChange={updateUrlTitleInputValue}
                />
              </div>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Date</span>
              </div>
              <div className="create-blog-post-form-section-date-input">
                <input
                  type="datetime-local"
                  value={dateInputValue}
                  onChange={updateDateInputValue}
                />
                <span
                  onClick={() => setDateInputValueToNow()}
                  className="create-blog-post-form-section-date-input-now"
                >
                  Now
                </span>
              </div>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Image URL</span>
              </div>
              <div className="create-blog-post-form-section-input">
                <input
                  type="text"
                  value={imageUrlInputValue}
                  onChange={updateImageUrlInputValue}
                />
              </div>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Tags</span>
              </div>
              <div className="create-blog-post-form-section-input">
                <input
                  type="text"
                  value={tagsInputValue}
                  onChange={updateTagsInputValue}
                />
              </div>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Markdown Content</span>
              </div>
              <div className="create-blog-post-form-section-code-content-input">
                {inBrowser && (
                  <CodeMirror
                    className="create-blog-post-form-section-codemirror"
                    value={markdownInputValue}
                    onBeforeChange={(editor, data, value) => {
                      updateMarkdownInputValue(value);
                    }}
                    onChange={(editor, data, value) => {
                      updateMarkdownInputValue(value);
                    }}
                    options={{
                      mode: "markdown",
                      theme: "dracula",
                      lineNumbers: true,
                    }}
                  />
                )}
              </div>
            </div>
            <div className="create-blog-post-seo-section-title">
              <span>SEO</span>
            </div>
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Title Tag</span>
              </div>
              <div className="create-blog-post-form-section-input">
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
            <div className="create-blog-post-form-section">
              <div className="create-blog-post-form-section-label">
                <span>Meta Description</span>
              </div>
              <div className="create-blog-post-form-section-input">
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
            <div className="create-blog-post-form-btn-container">
              {!loading ? (
                <div
                  onClick={submitCreateNewPostRequest}
                  className="create-blog-post-form-btn"
                >
                  <span>Submit</span>
                </div>
              ) : (
                <div className="create-blog-post-form-btn loading">
                  <span>Loading</span>
                </div>
              )}
            </div>
            {submitError ? (
              <div className="create-blog-post-submit-error-msg">
                <span>{errorMsg}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
