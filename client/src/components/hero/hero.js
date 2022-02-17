import { Link } from "react-router-dom";
import "./hero.css";
import Login from "../login/login";
const Hero = () => {
  return (
    <>
      <div className="body">
        <div className="siteTitle">
          This site will help you exchange items in three easy steps
        </div>
        <div className="Steps">
          <div>
            Sign up in the
            <Link className="loginlink" to="/login">
              {" "}
              Login{" "}
            </Link>
            page
          </div>
          <div>Login to your account</div>
          <div>Add your items and start Exchange</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
