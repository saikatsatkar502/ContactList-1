
import "./Stylesheet.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Form from "./Form";
import { positions } from "@mui/system";

function Contact() {
  const [user, setUser] = useState([]);
  const [formValue, setFormValue] = useState();

  const getNumber = (num: any) => {
    if (num !== 0) setFormValue(num);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://randomuser.me/api/?results=" + formValue)
        .then((res) => {
          setUser(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [formValue]);

  return (
   <div style={{
    right:"450px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }} >
  <div className="container">
        <Form getNumber={getNumber} />
      </div>
      <Card userData={user} />
      <div    style={{
          backgroundImage: `url("../images/iphoneimage.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "480px 600px",
          backgroundPosition:"550px 50px",
          height: "100vh",
          width: "100%"
        }}>

        </div>
        </div>
  );
}

export default Contact;
