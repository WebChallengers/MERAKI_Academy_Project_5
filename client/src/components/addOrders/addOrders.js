import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../reducers/products/index";

// import { AuthContext } from "./context";

//===============================================================

const NewOrder = () => {
  // const { token, isLoggedIn } = useContext(AuthContext);
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  //hi
  const { token, isLoggedIn } = state;

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [Product_Name, setProduct_Name] = useState("");
  const [Product_Price, setProduct_Price] = useState();
  const [Product_Description, setProduct_Description] = useState("");
  const [Category, setCategory] = useState("");
  // const product = {
  //   product_Name,
  //   product_Price,
  //   product_Description,
  //   category,
  // }; //===============================================================

  const createNewOrder = async (e) => {
    e.preventDefault();
    try {
      const order = {
        Product_Name,
        Product_Price,
        Product_Description,
        Category,
      };
      const result = await axios.post(
        "http://localhost:5000/orders/add",
        {
          Product_Name,
          Product_Price,
          Product_Description,
          Category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
        setStatus(true);
        dispatch(
          addProducts({
            Product_Name,
            Product_Description,
            Product_Price,
            Category,
          })
        );
        setMessage("The order has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      history("/login");
    }
  });

  //===============================================================
  return (
   
    <>
      <h1>hello order</h1>

      <form onSubmit={createNewOrder}>
        <br />
        <input
          type="text"
          placeholder="Product name here"
          onChange={(e) => setProduct_Name(e.target.value)}
        />
        <br />
        <textarea
          placeholder="product description here"
          onChange={(e) => setProduct_Description(e.target.value)}
        ></textarea>
        <br />{" "}
        <textarea
          placeholder="product price here"
          onChange={(e) => setProduct_Price(e.target.value)}
        ></textarea>
        <br />
        <button>Create New product</button>
      </form>
      <br />
      {status
        ? message && (
            <div className="SuccessMessage">
              {message} && <p>{console.log(status)}</p>
            </div>
          )
        : message && (
            <div className="ErrorMessage">
              {message}
              <p>{console.log(status)}</p>
            </div>
          )}
    </>
  );
};

export default NewOrder;
//realOrdersPage
