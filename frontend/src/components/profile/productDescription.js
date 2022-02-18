import React, { useEffect, useState } from "react";
import axios from "axios";
const AfterWePressMore = () => {
  const [prodcutInfo, setProductInfo] = useState([]);
  const [xchangedItem, setXchangedItem] = useState();

  const productName = localStorage.getItem("productName");
  const prodcutId = localStorage.getItem("idForXchange");

  const getProductsInfo = () => {
    axios
      .get(`http://localhost:5000/product/byname/${prodcutId}`)
      .then((result) => {
        console.log(result);
        setXchangedItem(result.data.result);
        const exchangedWith = localStorage.setItem(
          "xxx",
          result.data.result[0].Product_Exchange
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getXXX = localStorage.getItem("xxx");
  useEffect(getProductsInfo, []);
  const getexchangeproduct = () => {
    axios
      .get(`http://localhost:5000/product/show/${getXXX}`)
      .then((result) => {
        console.log(result);
        setProductInfo(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getexchangeproduct, []);
  return (
    <div>
      {prodcutInfo.map((elem, i) => {
        return (
          <div key={i}>
            <h2>Product_Name:{elem.Product_Name}</h2>
            <img src={elem.Image}></img>
            <h4>Description:{elem.Description}</h4> <h4>Price:{elem.Price}</h4>
            <h4>state:{elem.state_product}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default AfterWePressMore;
