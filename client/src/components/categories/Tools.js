import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  const [found, setFound] = useState([]);
  useEffect(() => {
    GetCategory("Tools");
  }, []);
  const GetCategory = async (category) => {
    await axios
      .get(`http://localhost:5000/category/${category}`)
      .then((result) => {
        console.log(result);
        setFound(result.data.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div id="biggest">
      <div id="renderedContainer">
        {found.map((elem, i) => {
          return (
            <div id="renderdCategory" key={i}>
              {" "}
              <img id="images" src={elem.Image}></img>{" "}
              <h3 id="title" className="text">
                {elem.Product_Name}
                <br></br>
              </h3>
              <p className="text">description:{elem.Description}</p>
              <p className="text">price:{elem.Price}JD</p>
              <p className="text"> Category:{elem.Category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
