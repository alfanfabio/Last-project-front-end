export default function Header() {
    return (
        <div id="header">
      <div className="container">
        {/* Nav */}
        <nav id="nav">
          <ul>
            <li className="active"><a href="index.html">Homepage</a></li>
            <li><a href="left-sidebar.html">Left Sidebar</a></li>
            <li><a href="right-sidebar.html">Right Sidebar</a></li>
            <li><a href="no-sidebar.html">No Sidebar</a></li>
          </ul>
        </nav>
      </div>
      <div id="logo-wrapper">
        <div className="container"> 
          {/* Logo */}
          <div id="logo">
            <h1><a href="#">Altitude</a><span className="tagline"> by TEMPLATED</span></h1>
          </div>
        </div>
      </div>
    </div>
    )
}
