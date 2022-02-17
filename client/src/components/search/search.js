import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../reducers/products/index";
import "./search.css";
import { Link } from "react-router-dom";

const SearchFunc = () => {
  const [show, setShow] = useState(false);
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);
  const searchSmallerFunc = () => {
    console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data.result);
        setFound(result.data.result);
        console.log(found);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };
  const token = localStorage.getItem("token");
  //
  return (
    <div>
      <div className="NavBar">
        <div className="logo">Xchange</div>
        <div>
          <Link className="Homelinks" to="/home">
            Home
          </Link>{" "}
        </div>
        <div>
          <Link className="Homelinks" to="/addProduct">
            Add Product
          </Link>{" "}
        </div>{" "}
        <div>
          <Link to={"/search"}>
            <svg
              id="searchIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </div>
        <div>
          <Link className="Homelinks" to="/category">
            Category
          </Link>{" "}
        </div>
        <div>
          {token ? (
            <div>
              <Link className="Homelinks" to="/login">
                logout
              </Link>{" "}
            </div>
          ) : (
            <div>
              <Link className="Homelinks" to="/login">
                Login
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
      <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>

        {found.length ? (
          <div id="foundSearchContainer">
            {found &&
              found.map((elem, i) => {
                return (
                  <div key={i} id="foundPosts">
                    <h2>{elem.Product_Name}</h2>
                    <p>{elem.Description}</p>
                    <h6>{elem.Category}</h6>
                  </div>
                );
              })}
          </div>
        ) : (
          <div id="searchText">
            <p >No items....</p>
          </div>
        )}
      </div>
    
  );
};
export default SearchFunc;
