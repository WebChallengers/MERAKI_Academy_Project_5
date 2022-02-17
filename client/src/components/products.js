import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/products/index";
//===============================================================

const ShowProduct = () => {
  // ---------------------------------------------
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });
//hi

  const { token, products } = state;

  const dispatch = useDispatch();
  // ---------------------------------------------
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);

  //===============================================================

  const allProducts = async () => {
    try {
      const res = await axios.get("/product");
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
      <div>
        {" "}
        {productsShower &&
          productsShower.map((element, i) => {
            return (
              <div key={i}>
                <p>{element.Product_Name}</p>
                <p>{element.Product_Description}</p>{" "}
                <p>{element.ProductPrice}</p> <p>{element.Category}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ShowProduct;
