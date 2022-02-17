import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Exmodal from "../exmodal/exmodal";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import {
  setProducts,
  updateProduct,
  deletePorduct,
} from "../../reducers/products/index";
import "./home.css";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";
const Home = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
      token: localStorage.getItem("token"),
    };
  });
  const { token, products } = state;
  const dispatch = useDispatch();
  // ---------------------------------------------
  const [show, setShow] = useState(false);
  const [Price, setPrice] = useState("");
  const [productsShower, setProductsShower] = useState([]);
  const [Product_Name, setProduct_Name] = useState("");
  const [Description, setDescription] = useState("");
  const [updateBox, setUpdateBox] = useState(false);
  const [productId, setproductId] = useState("");
  const [userId, setUserId] = useState("");
  const [found, setFound] = useState([]);
  const User = localStorage.getItem("User");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //=================================================================
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
  //======================================================================
  const allProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      console.log(User);
      if (res.data.success) {
        dispatch(setProducts(res.data.results));
        setProductsShower(res.data.results);
        setUserId(res.data.userId);
        console.log(state.token);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };
  //====================================================================
  const handleUpdateClick = (element) => {
    setUpdateBox(!updateBox);
    setproductId(element.id);
    setProduct_Name(element.Product_Name);
    setDescription(element.description);
    if (updateBox) updateArticle(element.id);
  };
  //=====================================================================
  const updateArticle = async (id) => {
    try {
      await axios.put(`http://localhost:5000/product/${id}`, {
        Product_Name,
        Description,
        Price,
      });
      allProducts();
      dispatch(updateProduct({ Product_Name, Description, Price }));
    } catch (error) {
      console.log(error);
    }
  };
  //=====================================================================
  const setModalIsOpenToTrue = (id) => {
    setModalIsOpen(true);
    const prdctId = localStorage.setItem("id", id);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  //===============================================
  const deleteproduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      allProducts();
      dispatch(deletePorduct(id));
    } catch (error) {
      console.log(error);
    }
  };
  const confirmDelete=(id)=>{
    const swalWithBootstrapButtons =  Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          deleteproduct(id)
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  // const rating=localStorage.setItem("rating",ratingChanged)
  useEffect(() => {
    allProducts();
  }, []);
  const multiTask = () => {
    setModalIsOpenToTrue();
  };
  return (
    <>
      <div>
        <div class="searchBox">
          <input
            onChange={(e) => {
              setProduct_Name(e.target.value);
            }}
            class="searchInput"
            type="text"
            placeholder="Search"
          />
          <button
            class="searchButton"
            href="#"
            onClick={() => {
              const targetDiv = document.getElementById("1");
              targetDiv.style.display = "none";
              searchSmallerFunc();
              dispatch(setProducts(found));
            }}
          >
            <i class="material-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              </svg>
            </i>
          </button>
        </div>
        <div className="product" id="1">
          {" "}
          {/* try map on products instead of productsShower */}
          {productsShower &&
            productsShower.map((element, i) => {
              return (
                <div className="productelement" id="renderProduct" key={i}>
                  <div>
                    <div>
                      <img className="productimage" src={element.Image} />
                    </div>
                    <div>
                      <p>{element.Product_Name}</p>
                    </div>
                    <div>
                      <p>{element.Product_Description}</p>
                    </div>
                    <div>
                      <p>{element.ProductPrice}</p>
                    </div>
                    <div>
                      <p>{element.Category}</p>
                    </div>
                    <div>
                      <button
                        className="homebuttons"
                        onClick={() => {
                          setModalIsOpenToTrue(element.id);
                        }}
                      >
                        Click to Open Modal
                      </button>
                    </div>

                    <Modal isOpen={modalIsOpen}>
                      <button onClick={setModalIsOpenToFalse}>x</button>
                      <Exmodal />
                    </Modal>
                  </div>
                  {element.userId == User && (
                    <>
                      {updateBox && productId === element.id && (
                        <form>
                          <br />
                          <input
                            type="text"
                            defaultValue={element.Product_Name}
                            placeholder="product title here"
                            onChange={(e) => setProduct_Name(e.target.value)}
                          />
                          <br />
                          <textarea
                            placeholder="product description here"
                            defaultValue={element.Product_Description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </form>
                      )}
                      <button
                        className="homebuttons"
                        onClick={() => confirmDelete(element.id)}
                      >
                        Delete{" "}
                      </button>
                      <button
                        className="homebuttons"
                        onClick={() => handleUpdateClick(element)}
                      >
                        Update{" "}
                      </button>
                      <div className="stars">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#FFD700"
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
        <div className="founditem">
          {found.length ? (
            found &&
            found.map((elem, i) => {
              return (
                <div>
                  <div>
                    <img className="productimage" src={elem.Image} />
                  </div>
                  <div>{elem.Product_Name}</div>
                  <div>{elem.Description}</div>
                  <div>{elem.Category}</div>
                </div>
              );
            })
          ) : (
            <div className="Sorry">
              {" "}
              <h2>Sorry, there are no items that match your search</h2>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
