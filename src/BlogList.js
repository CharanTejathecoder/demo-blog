import React from "react";
function BlogList({blogs}) {
    return ( 
        <div className="blog-list">
            <h2>All Blogs!</h2>
            {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
        
        </div>
            ))}
        </div>
     );
}

export default BlogList;