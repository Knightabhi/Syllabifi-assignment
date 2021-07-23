import React from "react";
import "./slider.css";

function Slider(props) {
  console.log(props.id);
  return (
    <>
      <section>
        {props.id === 1 && (
          <>
            <ul className="dots">
              <li className="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </>
        )}
        {props.id === 2 && (
          <>
            {" "}
            <ul className="dots">
              <li className="done"></li>
              <li className="active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </>
        )}{" "}
        {props.id === 3 && (
          <>
            {" "}
            <ul className="dots">
              <li className="done"></li>
              <li className="done"></li>
              <li className="active"></li>
              <li></li>
              <li></li>
            </ul>
          </>
        )}{" "}
        {props.id === 4 && (
          <>
            <ul className="dots">
              <li className="done"></li>
              <li className="done"></li>
              <li className="done"></li>
              <li className="active"></li>
              <li></li>
            </ul>
          </>
        )}{" "}
        {props.id === 5 && (
          <>
            <ul className="dots">
              <li className="done"></li>
              <li className="done"></li>
              <li className="done"></li>
              <li className="done"></li>
              <li className="active"></li>
            </ul>
          </>
        )}
      </section>
    </>
  );
}

export default Slider;
