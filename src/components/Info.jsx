// Info.jsx

import React from "react";
import { WiSunset } from "react-icons/wi";
import { FaCity } from "react-icons/fa";
const Info = ({ info, state }) => {
  const roundToInteger = (value) => {
    return Math.round(value);
  };

  return (
    <div>
      {state ? (
        <div className="info"> <FaCity/>
          <p id="city">
           {info.name}, {info.sys.country}
          </p>
          <div className="generalValue">
            <p id="temp">
              {roundToInteger(info.main.temp)} &deg;C
            </p>
          
          </div>
          <p id="weather">{info.weather[0].description}</p>
          <div className="feel">
            <p id="felt">{roundToInteger(info.main.feels_like)} &deg;C</p>
           
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Info };
