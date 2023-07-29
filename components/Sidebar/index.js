import Link from "next/link";
export default function Sidebar(props) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-list">
        <ul>
          <Link
            className={props.page === "blog-posts" ? "active" : null}
            href="/"
          >
            <li>
              <span>Blog Posts</span>
            </li>
          </Link>
          <Link
            className={props.page === "images" ? "active" : null}
            href="/images"
          >
            <li>
              <span>Images</span>
            </li>
          </Link>
          <Link
            className={props.page === "sitemap" ? "active" : null}
            href="/sitemap"
          >
            <li>
              <span>Sitemap</span>
            </li>
          </Link>
          <Link
            className={props.page === "password" ? "active" : null}
            href="/change-password"
          >
            <li>
              <span>Change Password</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
