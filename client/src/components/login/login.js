import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Swal from "sweetalert2";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/login";
//===============================================================
export const UserContext = createContext();
const Login = () => {
  const history = useNavigate();

  // ---------------------------------------------
  const state = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });

  const dispatch = useDispatch();
  // ---------------------------------------------
  //hi
  const [Username, setUsername] = useState("");
  const [Phone_number, setPhone_number] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const User = localStorage.getItem("User");


  const [status, setStatus] = useState(false);
  // const [saveToken, setSaveToken] = useState("");
  //===============================================================

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data) {
        console.log(res.data)
        setMessage("true");
        localStorage.setItem("User", res.data.results.id);
        localStorage.setItem("token", res.data.token)

        dispatch(login(res.data.token));
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/users", {
        Username,
        Phone_number,
        email,
        password,
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The user has been created successfully");
      } else throw Error;
    } catch (error) {
      setStatus(false);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      history("/Home");
    } else history("/login");
  }, [state.isLoggedIn]);

  //===============================================================

  return (
    <>
      <div className="bodylogin">
        <div class="main">
          <input className="inp" type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={addNewUser}>
              <label className="lable" for="chk" aria-hidden="true">
                Sign up
              </label>
             < input className="inp"
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="txt"
                    placeholder="User name"
                    required=""
                  />
              <input className="inp"
                onChange={(e) => setPhone_number(e.target.value)}
                type="number"
                name="phone"
                placeholder="phone Number"
                required=""
              />
              <input className="inp"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input className="inp"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button onClick={()=>{Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Account successfully created',
  showConfirmButton: false,
  timer: 1500
})
}} className="btnsignup">Sign up</button>
            </form>
          </div>

          <div class="login">
            <form >
              <label className="lable" for="chk" aria-hidden="true">
                Login
              </label>
              <input className="inp"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input className="inp"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="btnlogin" onClick={loginUser}>Login</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="Form">
        <p className="Title">Login:</p>
        <form onSubmit={loginUser}>
          <br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Login</button>
        </form>

        {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>} */}
      {/* </div> */}
    </>
  );
};

export default Login;
