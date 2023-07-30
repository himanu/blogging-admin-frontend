const Post = ({ title, date, id }) => (
    <>
        <div className="blog-posts-list-items-table-item-data title">
            <span>{title}</span>
        </div>
        <div className="blog-posts-list-items-table-item-data date">
            <span>{date}</span>
        </div>
        <div className="blog-posts-list-items-table-item-data edit">
            <a href={`/blog/edit-post/${id}`}>
                <span>Edit</span>
            </a>
            <span> &gt;</span>
        </div>
    </>
);
export default Post;