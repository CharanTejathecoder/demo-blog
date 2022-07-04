import React from "react";
function Navbar(){
    return ( 
        <div className="navbar">
            <h1>Demo-Blog</h1>
            <div className="links">
            <a href="/" >Home</a>
            
            <a href="/newblog" >New Blog</a>
            </div>
        </div>
        );
}
export default Navbar;