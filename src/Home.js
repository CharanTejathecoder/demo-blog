import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
   
   const {data :blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
   
    return ( <div className="home">
            {error && <div className="error-message">{error}</div> }
           {isPending && <div className="Loading">Loading...</div>}
           {blogs && <BlogList blogs={blogs}  ></BlogList>}
        </div> );
}

export default Home;