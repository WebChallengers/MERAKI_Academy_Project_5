import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/products/index";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });

  const { token, products } = state;

  const dispatch = useDispatch();
  // ---------------------------------------------
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);

  //===============================================================
  //hi
  const searchFunc = () => {
    console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data);
        setFound(result.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };
  const allProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      console.log(res);
      if (res.data.success) {
        dispatch(setProducts(res.data.results));
        setProductsShower(res.data.results);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <div className="logo">
        <h2>Xchange</h2>
      </div>
      <div className="NavBar">
        <div>
          <Link to="/home">
            <a className="">Home</a>
          </Link>{" "}
        </div>
        <div>
          <Link to="/login">
            <a className="">Login</a>
          </Link>{" "}
        </div>
        <div>
          <label>
            <input
              placeholder="Search"
              type={"text"}
              onChange={(e) => {
                console.log(e);
                setProduct_Name(e.target.value);
              }}
            />
            <button
              onClick={() => {
                searchFunc();
                console.log(found);
              }}
            >
              Search
            </button>
          </label>
          {found.length ? (
            //length is not defined???
            <div>
              {found &&
                found.map((elem) => {
                  return (
                    <div>
                      <h2>{elem.title}</h2>
                      <p>{elem.description}</p>
                      <h6>{elem.category}</h6>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="product">
        {" "}
        {productsShower &&
          productsShower.map((element, i) => {
            return (
              <div className="productelement" id="renderProduct" key={i}>
                <p>{element.Product_Name}</p>
                <p>{element.Product_Description}</p>{" "}
                <p>{element.ProductPrice}</p> <p>{element.Category}</p>
              </div>
            );
          })}
      </div>
      <div className="Footer">
        <div>Meraki C4 </div>
        <div>Project Done By team A4 </div>
        <div> c 2022 </div>
      </div>
    </div>
  );
};

export default Home;
