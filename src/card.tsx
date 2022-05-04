import zIndex from '@mui/material/styles/zIndex';
import { padding } from '@mui/system';
import { url } from 'inspector';
import './Stylesheet.css';

export default function Card(props:any) {
    return (
      <div
        className="subcontainer"
        style={{
          position: "relative",
          left: "1020px",
          top: "-50px",
          width: "450px",
          height: "380px",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          scrollbarGutter: "none",
          background: "transparent",
          zIndex: "1",
          border: "none",
          borderRadius: "5%"
        }}>
        {props.userData.map((con:any) => {
          return (
          <div
            key={con.email}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "left",
              padding: "2px 1px ",
              margin: "3% 0"
            }}
          >
            <img
              src={con.picture.medium}
              alt="user"
              style={{ borderRadius: "50%", width: "60px" }}
            />
            <div
              style={{
                padding: "2%",
                border: "none",
                fontSize: "14px",
                borderBottom: "2px solid lightgrey"
              }}
            >
              <b>{con.name.title}- {con.name.first}-{con.name.last}</b>{" "}
              
              <br />
              {con.email}
            </div>
          </div>
         );
        })}
      </div>
    );
  }
  