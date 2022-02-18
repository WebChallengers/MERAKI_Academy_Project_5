import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ProductInformationModal from "./productInfo";
import Modal from "react-modal/lib/components/Modal";
import AfterWePressMore from "./productDescription";

import "./profile.css";
const UserProducts = () => {
  const [allPrdcts, setAllPrdcts] = useState([]);
  const [id, setId] = useState("");
  const [Show, setShow] = useState([]);
  const userId = localStorage.getItem("User");
  //===================================================
  const [infoModal, setInfoModal] = useState(false);
  const [allPrdctsS, setAllPrdctsS] = useState([]);
  const setInfoModalToTrue = () => {
    setInfoModal(true);
  };
  const setInfoModalToFalse = () => {
    setInfoModal(false);
  };

  //===================================================
  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setAllPrdctsS(result.data.results);
        setAllPrdcts(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const softDelete = (id) => {
    axios
      .post(`http://localhost:5000/softDel/${id}`, { userId })
      .then((result) => {
        console.log(result);
        getUsersProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const rejected = (id) => {
    console.log(typeof id);
    let ids = id.toString();
    console.log(ids);
    axios
      .put(`http://localhost:5000/product/reject/${ids}`)
      .then((result) => {
        console.log(result);
        getUsersProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getexchangeproduct = (idex) => {
    axios
      .get(`http://localhost:5000/product/show/${idex}`)
      .then((result) => {
        console.log(result);
        setShow(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const ex =(id)=>{
  //   getexchangeproduct(id)
  // }

  useEffect(() => {
    getUsersProducts();
  }, []);

  return (
    <div className="userProductRender">
      {/* <h1>afsf</h1> */}
      {allPrdcts &&
        allPrdcts.map((elem, i) => {
          return (
            <div className="userProductRender" key={i}>
              {" "}
              <br />
              Product name : {elem.Product_Name} <br />
              Product state : ({elem.state_product}) <br />
              <button
                key={i}
                onClick={() => {
                  setInfoModalToTrue();
                  const ProductName = localStorage.setItem(
                    "productName",
                    elem.Product_Name
                  );
                  const idForXchange = localStorage.setItem(
                    "idForXchange",
                    elem.id
                  );
                }}
              >
                more
              </button>
              <Modal isOpen={infoModal}>
                <button onClick={setInfoModalToFalse}>close</button>
                <AfterWePressMore />
              </Modal>
              {elem.state_product == "pending" && (
                <>
                  <button
                    className="profilerenderbutton"
                    onClick={() => {
                      setId(elem.id);
                      softDelete(elem.id);
                    }}
                  >
                    Accept
                  </button>
                  <button
                    className="profilerenderbutton"
                    onClick={() => {
                      rejected(elem.id);
                    }}
                  >
                    reject
                  </button>
                  <br />
                </>
              )}
            </div>
            // flex display then flex then gap between the render and the button
          );
        })}{" "}
    </div>
  );
};
export default UserProducts;
