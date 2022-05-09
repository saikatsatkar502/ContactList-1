
import "./Stylesheet.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Form from "./Form";


function Contact() {
  const [contacts, setContacts] = useState([]);
  const [numberOfContacts, setNumberOfContacts] = useState<number>(0);

  useEffect(() => {
    (async function () {
      if (numberOfContacts === 0) return;

      await axios
        .get(`https://randomuser.me/api/?results=${numberOfContacts}`)
        .then((res) => {
          setContacts(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        
        });
    })();
  }, [numberOfContacts]);

  return (
    <div>
      <div className="container">
        <Form numberOfContacts={numberOfContacts} setNumberOfContacts={setNumberOfContacts} />
      </div>
      <Card userData={contacts} />
    
    
   
      
    </div>
  );
}

export default Contact;
