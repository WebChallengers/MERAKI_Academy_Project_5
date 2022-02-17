import React, { useEffect, useState } from "react";
import axios from "axios";
const AfterWePressMore = () => {
  const [prodcutInfo, setProductInfo] = useState([]);
  const [xchangedItem, setXchangedItem] = useState();
  const productName = localStorage.getItem("productName");
  const prodcutId = localStorage.getItem("idForXchange");
  const getProductsInfo = () => {
    axios
      .get(`/product/byname/${productName}`, { prodcutId })
      .then((result) => {
        console.log(result);
        setXchangedItem(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getexchangeproduct = (idex) => {
    axios
      .get(`/product/show/${xchangedItem}`)
      .then((result) => {
        console.log(result);
        setProductInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getexchangeproduct, []);

  return (
    <div>
      <h1>hi</h1>
      {prodcutInfo &&
        prodcutInfo.map((elem) => {
          return (
            <div>
              <h2>Product_Name:{elem.Product_Name}</h2>
              <img src={elem.Image}></img>
              <h4>Description:{elem.Description}</h4>{" "}
              <h4>Price:{elem.Price}</h4>
              <h4>state:{elem.state_product}</h4>
            </div>
          );
        })}
    </div>
  );
};
export default AfterWePressMore;
