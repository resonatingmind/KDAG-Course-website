
function Header(){
    return(
        <div className="header">
          <div className="headerLogoContainer">
           <img className="headerLogo" src="\public\kdagLogo.jpg"></img>
           <div>
              <h2><b>Learn</b><span style={{fontWeight:"100"}}>Bridge</span></h2>
              <p style={{fontSize:"10px"}}>Powered By KDAG</p>
           </div>

          </div>
           <form className="headerElem">
             <input className="headerSearch" type="text" placeholder="Search Courses"/>
             <a href="/search" className="headerSearchIcon"><i class="fa-solid fa-magnifying-glass"></i></a>
             <div className="headerCate"><i class="fa-solid fa-layer-group"></i>Categories</div>
           </form>
           <div className="headerList">
             <a href="/" className="headerCategoryEach">Category 1</a>
             <a href="/" className="headerCategoryEach">Category 1</a>
             <a href="/" className="headerCategoryEach">Category 1</a>
             <a href="/" className="headerCategoryEach">Category 1</a>
             <a href="/" className="headerCategoryEach">Category 1</a>
           </div>
        </div>
    )
}

export default Header;