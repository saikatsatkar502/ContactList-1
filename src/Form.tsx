import React, { useState } from "react";
import './Stylesheet.css'
export default function Form(props:any) {
  const [formValue, setFromValue] = useState(0);

  function toconvetintonumber(e: string) {
    if (e !== "0") {
      let num = Number(e);
      setFromValue(num);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.getNumber(formValue);
    setFromValue(0);
  }
  
  return (
    <div id="Form" className="userform">
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
        onSubmit={handleSubmit}
      >
        <label>Please Enter the input </label>
        <input
          type="numbers"
          name="userinput"
          value={formValue}
          onChange={(e) => toconvetintonumber(e.target.value)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        />

        <input type="submit" value="Submit" style={{color:"white",backgroundColor:"blue",margin:"2%",borderRadius:"40%"}} />
      </form>
    </div>
  );
}
