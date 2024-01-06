import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Singlebar from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
     <div className="single">
        {/* post */}
        <Singlebar/>
        <Sidebar/>
     </div>
  )
}
