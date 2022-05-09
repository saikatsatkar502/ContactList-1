import zIndex from '@mui/material/styles/zIndex';
import { padding } from '@mui/system';
import { url } from 'inspector';
import './Stylesheet.css';

export default function Card(props:any) {
    return (
      <div className='backgroundImage'>
      <div
        className="subcontainer">
        {props.userData.map((con:any) => {
          return (
            <div className='card'>
          <div
            key={con.email}
            className="email"
           
          >
            <img
              src={con.picture.medium}
              className="img"
              alt="user"
           
            />
             <div
             className='font'
              style={{
                
              }}
            >
           
              <b>{con.name.title}- {con.name.first}-{con.name.last}</b>{" "}
              
              <br />
              {con.email}
              </div>
            </div>
          </div>
         );
        })}
      </div>
      </div>
    );
  }
  