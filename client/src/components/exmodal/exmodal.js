import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../checkbox/checkbox";
import "../exmodal/exmodal.css"
const Exmodal = () => {
  const [productId, setproductId] = useState([]);
  const userId = localStorage.getItem("User");
  const [Product_Name, setProduct_Name] = useState("");
  const [state_product, setState_product] = useState("pending");
  const idex = localStorage.getItem("id");
 
  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setproductId(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsersProducts();
  }, []);
  const confirm = (elem) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setProduct_Name(elem.Product_Name);
        console.log(elem.Product_Name);
        // setid(elem.id)
        console.log(elem.id);
        // console.log(id)
        updateProductbyid(elem.id);
        //just  updateProductbyid(from local storage)
        console.log(idex);
        updateProductbyid(idex);
        ///save id from local storage
        updateProductexhange(elem.id)
        // updateProductexhange(idex)
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const updateProductbyid = (id) => {
    console.log(typeof id);
    let ids = id.toString();
    console.log(ids);
    axios
      .put(`http://localhost:5000/product/exchange/${ids}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // updateProductexhange(17)
  const updateProductexhange = (id) => {
    console.log(typeof id);
    let ids = id.toString();
    console.log(ids);
    console.log()
    const Product_Exchange=ids
    console.log()
    axios
      .put(`http://localhost:5000/product/exhange2/${idex}`,{Product_Exchange})
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="modalbody" id="foundSearchContainer">
      {productId &&
        productId.map((elem, i) => {
          return (
            <div key={i} id="productid">
              <h2>{elem.Product_Name}</h2>
              <h3>Do you want to Exchange?</h3>
              <button className="Exchangebutton"
                onClick={() => {
                  confirm(elem);
                }}
              >
                Confirm Exchange
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default Exmodal;
