import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProgressiveImage from "react-progressive-image";
import soldout from "./soldout.png";

export function Card(props) {
  return (
    <div
      className="card"
      style={{
        // flex: "0 0 340px",
        width: "340px",
        margin: "15px",
      }}
    >
      <Zoom>
        <ProgressiveImage
          style={{ backgroundImage: "./image/soldout.png" }}
          src={props.url1}
          placeholder={props.placeholder}
          status={props.status}
        >
          {(src) => (
            <>
              <img src={src} alt="Card cap" className="card-img-top" />
              {props.status === "sold" && (
                <img
                  src={soldout}
                  alt="Card cap"
                  className="card-img-top-sold"
                />
              )}
            </>
          )}
        </ProgressiveImage>
      </Zoom>
      <div className="card-body">
        <p className="card-text">ID: {props.id}</p>
        <p className="card-text">{props.item}</p>
        <p className="card-text">Brand: {props.brand}</p>
        <p className="card-text">Code: {props.item_number}</p>
        <p className="card-text">Condition: {props.condition}</p>
        {/* <p className="card-text">Price for New: {props.price_new}</p> */}
        <h3 className="card-text">Asking Price: ${props.price_current}</h3>
        <Zoom>
          <ProgressiveImage src={props.url2} placeholder={props.placeholder}>
            {(src) => (
              <img src={src} alt="Card cap" className="card-img-bottom" />
            )}
          </ProgressiveImage>
        </Zoom>
        <Zoom>
          <ProgressiveImage src={props.url3} placeholder={props.placeholder}>
            {(src) => (
              <img src={src} alt="Card cap" className="card-img-bottom" />
            )}
          </ProgressiveImage>
        </Zoom>
      </div>
    </div>
  );
}
