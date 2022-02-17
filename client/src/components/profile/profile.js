import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ProfileModal from "./usersProducts";
import AfterWePressMore from "./productDescription";
import ProductInformationModal from "./productInfo";

import "./profile.css";
const Profile = () => {
  const [status, setStatus] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [urlprofil, setUrlprofil] = useState("");
  const userId = localStorage.getItem("User");
  const [productId, setproductId] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const getAllInfo = (req, res) => {
    axios
      .get(`http://localhost:5000/profile/${userId}`)
      .then((result) => {
        console.log(result);
        setStatus(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const profilePic = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", profileImg);
      data.append("upload_preset", "whatEver");
      data.append("cloud_name", "abdullahhalammoush");

      const result = await axios.post(
        "https://api.cloudinary.com/v1_1/abdullahhalammoush/image/upload",
        data
      );
      console.log(result.data.url);
      console.log(profileImg);
      console.log(typeof result.data.url);
      if (result.data.url) {
        console.log(result);
        console.log(profileImg);
        console.log(typeof result.data.url);
        setProfileImg(result.data.url);
        setUrlprofil(result.data.url);
        profilePicutue(result.data.url);
        console.log(urlprofil);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const profilePicutue = (img) => {
    console.log("USER ID : ", userId, " \nIMAGE URL : ", img);
    axios
      .put(`http://localhost:5000/profile/${userId}`, { img })
      .then((nateeja) => {
        console.log(nateeja);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getproductbyuserid = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/product/byuser`,
        userId
      );
      console.log(userId);
      if (res.data.success) {
        setproductId(res.data.results);
        console.log(res.data);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };
  // const modal = () => {
  //   getUsersProducts();
  //   handleShow();
  // };
  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <>
      <div className="profilePage">
        <div>{/* <button onClick={profilePicutue}>nateeja</button> */}</div>
        {status &&
          status.map((element, i) => {
            return (
              <>
                <div className="Welcome">
                  <h1>Welcome {element.Username}</h1>
                </div>
                <div className="profilebox" key={i} id="returnedInfo">
                  <div>
                    <img id="actualPic" src={element.profileImg}></img>
                    <br />
                    <input
                      type={"file"}
                      onChange={(e) => {
                        setProfileImg(e.target.files[0]);
                      }}
                    ></input>
                    <br />
                    <button className="uploadbutton" onClick={profilePic}>
                      Upload photo
                    </button>
                  </div>

                  <div className="userinfo">
                    <p className="textProfile">User_name:</p>{" "}
                    <h3 className="textProfile">"{element.Username}" </h3>{" "}
                    <br />
                    <p className="textProfile">Email:</p>{" "}
                    <h3 className="textProfile">{element.email}</h3> <br />
                    <p className="textProfile">Phone_number</p>
                    <h3 className="textProfile">{element.Phone_number}</h3>
                    <div className="Showproduct">
                      <ProfileModal />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Profile;
