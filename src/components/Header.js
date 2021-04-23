import React from "react";
import close from "./images/icon-remove.svg";

export const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="/"></img>
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};
