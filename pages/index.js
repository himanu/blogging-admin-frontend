import { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Post from "../components/Blog-post";

const Main = () => {
  const [showActivePosts, setShowActivePosts] = useState(true);
  const [showUpcomingPosts, setShowUpcomingPosts] = useState(false);

  const handleActiveBtnClick = () => {
    setShowActivePosts(true);
    setShowUpcomingPosts(false);
  };

  const handleUpcomingBtnClick = () => {
    setShowActivePosts(false);
    setShowUpcomingPosts(true);
  };

  return (
    <div className="layout-wrapper">
      <Head>
        <title>Blog Posts | Admin</title>
      </Head>
      <Header />
      <Sidebar page="blog-posts" />
      <div className="layout-content-container">
        <div className="blog-posts-content">
          <div className="blog-posts-top-header">
            <div className="blog-posts-page-label">
              <span>All Blog Posts</span>
            </div>
            <div className="blog-posts-add-new-btn-container">
              <a href="/blog/create-new-post">
                <div className="blog-posts-add-new-btn">
                  <span>+ Add New Post</span>
                </div>
              </a>
            </div>
          </div>
          <div className="blog-posts-list-container">
            <div className="blog-posts-list-tab-btns">
              <div className="blog-posts-list-tab-btn-container">
                <div
                  className={
                    showActivePosts
                      ? "blog-posts-list-tab-btn active"
                      : "blog-posts-list-tab-btn"
                  }
                  onClick={handleActiveBtnClick}
                >
                  <span>Active</span>
                </div>
              </div>
              <div className="blog-posts-list-tab-btn-container">
                <div
                  className={
                    showUpcomingPosts
                      ? "blog-posts-list-tab-btn active"
                      : "blog-posts-list-tab-btn"
                  }
                  onClick={handleUpcomingBtnClick}
                >
                  <span>Upcoming</span>
                </div>
              </div>
            </div>
            <div className="blog-posts-list-items-table">
              <div className="blog-posts-list-items-table-header">
                <div className="blog-posts-list-items-table-header-item title">
                  <span>Title</span>
                </div>
                <div className="blog-posts-list-items-table-header-item date">
                  <span>Date</span>
                </div>
                <div className="blog-posts-list-items-table-header-item edit">
                  <span></span>
                </div>
              </div>
              {showActivePosts ? (
                <div className="blog-posts-list-items-table-item">
                  <Post title="Active Post" date="12 Jan 2023" id={1} />
                </div>
              ) : null}
              {showUpcomingPosts ? (
                <div className="blog-posts-list-items-table-item">
                  <Post title="Upcoimg Post" date="12 Jan 2024" id={2} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
