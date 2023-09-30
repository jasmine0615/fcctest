import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";
import Navbar from "./Navbar";
function ListCourse() {
  const [items, setItems] = useState([]);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://testing-7noe.onrender.com/api/items",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setItems(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <div className="divs">
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <p className="stylingclass">
                {item.course}({item.duration})
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCourse;
