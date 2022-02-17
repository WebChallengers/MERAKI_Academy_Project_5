import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../reducers/products/index";

//===============================================================

const NewProduct = () => {
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const { token, isLoggedIn } = state;

  const dispatch = useDispatch();
  const [state_product, setState_product] = useState("available")
  const [Image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [img, setimg] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [Product_Name, setProduct_Name] = useState("");
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  // }; //===============================================================
  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "oodpuzew");
      data.append("cloud_name", "aljariri");

      const result = await axios.post(
        "https://api.cloudinary.com/v1_1/aljariri/image/upload",
        data
      );
      console.log(result);
      console.log(img);
      console.log(typeof result.data.url);
      if (result.data.url) {
        console.log("cloud")
        setImage(result.data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  {
  }
  const createNewProduct = async (e) => {
    e.preventDefault();
    try {
      console.log(Image);
      const result = await axios.post(
        "http://localhost:5000/product",
        {
          Product_Name,
          Price,
          Description,
          Category,
          Image,
          state_product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(Image);

      console.log(result.data);
      if (result.data.success) {
        setStatus(true);
        dispatch(
          addProducts({
            Product_Name,
            Description,
            Price,
            Category,
            Image,
            state_product,
          })
        );
        setMessage("The product has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };

  //===============================================================

  useEffect(() => {
    if (!isLoggedIn) {
      history("/login");
    }
  });

  //===============================================================
  return (
      <>
       
        <form className="addform" onSubmit={createNewProduct}>
          <div>
          <input className="inputaddProduct"
            type="text"

            placeholder="Add product name"

            onChange={(e) => setProduct_Name(e.target.value)}
          />
         </div>
         <div>
          <input
          className="inputaddProduct"

            placeholder="Add product description"

            onChange={(e) => setDescription(e.target.value)}
          ></input>
          </div>
          <div>

          <input
          className="inputaddProduct"
            placeholder="Add product price"

            onChange={(e) => setPrice(e.target.value)}
          ></input>

          </div>
          <div>
          <input

          className="inputphoto"

            type="file"
            onChange={(e) => setimg(e.target.files[0])}
          ></input>
          </div>
          <div>

          <button className="productButton" onClick={uploadImage}>Upload image</button>

          </div>
          <div>
            <select
              
              placeholder="category" 
              id="categorySelector"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>vehicles</option>
              <option>clothes</option>
              <option>pc</option>
              <option>phones</option>
              <option>tools</option>
              <option>realEstate</option> options
            </select>
          </div>
          <div>

          <button onClick={()=>{Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your product has been saved',
  showConfirmButton: false,
  timer: 1500
})
}} className="productButton" >Create New product</button>

          </div>
        </form>
        
        {status
          ? message && (
              <div className="SuccessMessage">
                {/* {message} && <p>{console.log(status)}</p> */}
              </div>
            )
          : message && (
              <div className="ErrorMessage">
                {/* {message} */}
                <p>{console.log(status)}</p>
              </div>
            )}
            
      </>
  
  );
};

export default NewProduct;

