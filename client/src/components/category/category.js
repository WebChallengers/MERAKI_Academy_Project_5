import React from "react";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { createContext } from "react";
import Categories from "../categories/clothes";
import Home from "../home/home";
export const UserContext = createContext();
const AllCategories = () => {
  /*VIQ
  //can we do   const [{vehicles , clothes ,realEstate}, {setVehicles,setClothes,setRealEstate}] = useState("");
  ???*/ const [found, setFound] = useState([""]);
  // const [cataeg, setCateg] = useState("");

  const GetCategory = (Category) => {
    axios
      .get(`http://localhost:5000/category/${Category}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* <div>
        <UserContext.Provider value={cataeg}>
          <Categories />
        </UserContext.Provider>
      </div>{" "} */}
      {/* <div>
        <Home />
      </div> */}
      {/* <div id="categoryNavBar">
        <Link className="categoryLinks" to={"/"}>
          <h2 id="logoCategory">Xchange</h2>
        </Link>
        <div id="categoryLinksDiv">
          <Link className="categoryLinks" to={"/Home"}>
            Home
          </Link>
          <Link className="categoryLinks" to={"/addproduct"}>
            add Product
          </Link>
          <Link className="categoryLinks" to={"/login"}>
            login
          </Link>
        </div>
      </div> */}
      <div id="category">
        {/* <Link to={`/${category}`}> */}
        <Link to={`/Vehicles`}>
          <img
            onClick={() => {
              // setCategory("vehicles");
              GetCategory("vehicles");
            }}
            className="categoryPics"
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2019/m-portraits-8/bmw-m4-coupe-shadow_m4-magazine-teaser.jpg"
          ></img>
        </Link>{" "}
        <Link to={"/categories"}>
          {" "}
          <img
            onClick={() => {
              // setCateg("clothes");
              GetCategory("clothes");
            }}
            className="categoryPics"
            src="https://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg"
          ></img>
        </Link>
        <Link to={"/PC"}>
          <img
            onClick={() => {
              // setCategory("pc");
              GetCategory("pc");
            }}
            className="categoryPics"
            src="https://www.reviewgeek.com/p/uploads/2020/12/19a62eff.jpg?width=1200"
          ></img>
        </Link>
        <Link to={"/Phones"}>
          <img
            onClick={() => {
              // setCategory("phones");
              GetCategory("phones");
            }}
            className="categoryPics"
            src="https://tinhat.co.uk/sites/default/files/users/user1/5e5e7fe1fee23d22843d4207.png"
          ></img>
        </Link>
        <Link to={"/Tools"}>
          <img
            onClick={() => {
              // setCategory("tools");
              GetCategory("tools");
            }}
            className="categoryPics"
            src="https://images.unsplash.com/photo-1585775636979-1b9dceaae8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          ></img>
        </Link>
        <Link to={"/RealEstate"}>
          {" "}
          <img
            onClick={() => {
              // setCategory("real estate");
              GetCategory("realEstate");
            }}
            className="categoryPics"
            src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
          ></img>
        </Link>
      </div>
    </div>
  );
};
export default AllCategories;
