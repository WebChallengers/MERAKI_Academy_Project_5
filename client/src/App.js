import "./components/profile/profile.css";
import "./App.css";
import "./components/category/category.css";
import "./components/categories/clothes.css";
import "./components/addProducts/addProduct.css";
import "./components/categories/categoriesFilter.css";
import "./components/search/search.css";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./components/login/login";
import React, { useContext } from "react";
// import components
import Hero from "./components/hero/hero";
import ProfileModal from "./components/profile/usersProducts";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import ShowProduct from "./components/products";
import NewProduct from "./components/addProducts/addProducts";
import NewOrder from "./components/addOrders/addOrders";
import NavBar from "./components/navBar/navBar";
import AllCategories from "./components/category/category";
import Profile from "./components/profile/profile";
import Categories from "./components/categories/clothes";
import Vehicles from "./components/categories/Vehicles";
import ContactUs from "./components/contactus/contact"
//=============================================================
import PC from "./components/categories/PC";
import Phones from "./components/categories/Phones";
import RealEstate from "./components/categories/RealEstate";
import Tools from "./components/categories/Tools";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <div id="endPoints">
        <Routes>
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/ProfileModal" element={<ProfileModal />} />{" "}
          <Route path="/vehicles" element={<Vehicles />} />{" "}
          <Route path="/categories" element={<Categories />} />{" "}
          <Route path="/category" element={<AllCategories />} />
          <Route path="/addOrder" element={<NewOrder />} />
          <Route path="/addProduct" element={<NewProduct />} />
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ShowProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/PC" element={<PC />} />{" "}
          <Route path="/Phones" element={<Phones />} />{" "}
          <Route path="/RealEstate" element={<RealEstate />} />{" "}
          <Route path="/Tools" element={<Tools />} />{" "}
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <div className="footer">
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
