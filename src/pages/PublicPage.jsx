import Header from "../components/Header"
import { Outlet } from "react-router-dom";

const PublicPage = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}

export default PublicPage
