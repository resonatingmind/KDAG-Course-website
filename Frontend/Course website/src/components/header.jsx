import { useState } from "react";

function Header(){

  const [isActive, setActive]=useState(0);

  function handleHover(target)
  {
    setActive(1);
  }

  function handleOut(target)
  {
    setActive(0);
  }

    return(
        <div className="header">
          <div className="headerLogoContainer">
           <img className="headerLogo" src="/kdagLogo.jpg"></img>
           <div>
              <h2><b>Learn</b><span style={{fontWeight:"100"}}>Bridge</span></h2>
              <p style={{fontSize:"10px"}}>Powered By KDAG</p>
           </div>

          </div>
           <form className="headerElem">
             <input className="headerSearch" type="text" placeholder="Search Courses"/>
             <a href="/search" className="headerSearchIcon"><i class="fa-solid fa-magnifying-glass"></i></a>
             <div onMouseOver={handleHover} onMouseOut={handleOut} className="headerCateDiv"><div className="headerCate"><i class="fa-solid fa-layer-group"></i>Categories</div></div>
           </form>

           <div onMouseOver={handleHover} onMouseOut={handleOut} className={isActive ? "showHeaderCateList headerList" : "hideHeaderCateList headerList"}>
             <a href="/" className="headerCategoryEach">Category 1</a>
             <a href="/" className="headerCategoryEach">Category 2</a>
             <a href="/" className="headerCategoryEach">Category 3</a>
             <a href="/" className="headerCategoryEach">Category 4</a>
             <a href="/" className="headerCategoryEach">Category 5</a>
           </div>
        </div>
    )
}

export default Header;