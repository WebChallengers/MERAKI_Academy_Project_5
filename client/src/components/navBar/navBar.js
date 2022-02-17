import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../reducers/products/index";
import "./navBar.css";
const NavBar = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
      token: localStorage.getItem("token"),
    };
  });
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);
  const searchSmallerFunc = () => {
    console.log("inside search");
    axios
      .get(`/search/${Product_Name}`)
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
  return (
    <div>
      <div className="NavBar">
        <div><Link className="logo" to="/">Xchange</Link></div>
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
          <Link className="Homelinks" to="/category">
            Category
          </Link>{" "}
        </div>
        {token ? (
          <div>
            <Link className="Homelinks" to={"/profile"}>
              profile

            </Link>
          </div>
        ) : (
          <div>
            <Link className="Homelinks" to="/login">Profile</Link>
          </div>
        )}
        <div>
          {token ? (
            <div>
              <Link className="Homelinks" to="/logout">
                Logout
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
    </div>
  );
};
export default NavBar;
