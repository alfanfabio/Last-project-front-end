import "../assets/css/skel-noscript.css"
import "../assets/css/style-1000px.css"
import "../assets/css/style-desktop.css"
import "../assets/css/style.css"
import Banner from "../components/Banner"
import Copyright from "../components/Copyright"
import Featured from "../components/Featured"
import Header from "../components/Header"
import Main from "../components/Main"


export default function Homepage() {
    return (
        <div>
  <div id="wrapper">
    {/* Header */}
    <Header />
    {/* /Header */}
    {/* Banner */}
   <Banner />			
    {/* /Banner */}
    <div className="divider" />
    {/* Featured */}
    <Featured />
    {/* /Featured */}
    {/* Main */}
    <Main />
    {/* /Main */}
  </div>
  {/* /Wrapper */}
  {/* Copyright */}
  <Copyright />
</div>

    )
}
