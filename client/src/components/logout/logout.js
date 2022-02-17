import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./logout.css"


const Logout=()=>{
    return (
        <>
        <div className="bodylogout">
          <div>
        <h2>Are you sure you want to log out?</h2>
        </div>
        <div>
       <Link to = "/"> <button
        className="logoutButton"
        onClick={() => {
          localStorage.clear();
        }}
      >
        YES
      </button>{" "}
      </Link>
      </div>
      </div>
      </>
    )
}

export default Logout