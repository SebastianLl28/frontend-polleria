import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/products/Products";
import Locales from "./pages/locales/Locales";
import PublicPage from "./pages/PublicPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import CarProducts from "./components/CarProducts";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";

const App = () => {
  return (
    <BrowserRouter>

      <CarProducts />

      <Routes>
        <Route element={<PublicPage />}>
            <Route path="/" element = {<LandingPage/>}/>
            <Route path="/products" element = {<Products/>}/>
            <Route path="/locales" element = {<Locales/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/register" element = {<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
