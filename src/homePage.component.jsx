import React from 'react';
import './homePage.style.scss'
const HomePage =()=>{
    return(
<div className="homePage">
  <div className="directory-menu">
    <div className="menu-item">
       <div className="content">
           <h1 className="title">Hats</h1>
           <span className="subtitle"> shop now </span>
       </div>

    </div>

    <div className="menu-item">
       <div className="content">
           <h1 className="title">JACKETS</h1>
           <span className="subtitle"> shop now </span>
       </div>

    </div>

    <div className="menu-item">
       <div className="content">
           <h1 className="title">SNEAKERS</h1>
           <span className="subtitle"> shop now </span>
       </div>

    </div>

    <div className="menu-item">
       <div className="content">
           <h1 className="title">WOMEN</h1>
           <span className="subtitle"> shop now </span>
       </div>

    </div>

    <div className="menu-item">
       <div className="content">
           <h1 className="title">MENS</h1>
           <span className="subtitle"> shop now </span>
       </div>

    </div>
  </div>

</div>


    );
}
export default HomePage;