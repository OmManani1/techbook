import Feed from "../component/feed/Feed";
import Navigation from "../component/navigation/Navigation";
import Rightside from "../component/rightside/Rightside";
import Sidebar from '../component/sidebar/Sidebar'
import "./home.css"

export default function home() {
  return (
    <>
      <Navigation />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightside />
      </div>
    </>
  )
}
