import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import AfterWePressMore from "./productDescription";
import axios from "axios";

const ProductInformationModal = () => {
  const [infoModal, setInfoModal] = useState(false);
  const [allPrdcts, setAllPrdcts] = useState([]);
  const userId = localStorage.getItem("User");

  const setInfoModalToTrue = () => {
    setInfoModal(true);
  };
  const setInfoModalToFalse = () => {
    setInfoModal(false);
  };
  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setAllPrdcts(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getUsersProducts, []);
  return (
    <div>
      {allPrdcts &&
        allPrdcts.map((elem, i) => {
          <div key={i}>
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
            ;
          </div>;
        })}

      <Modal isOpen={infoModal}>
        <button onClick={setInfoModalToFalse}>close</button>
        <AfterWePressMore />
      </Modal>
    </div>
  );
};
export default ProductInformationModal;
