// Info.jsx
import React from "react";
import { WiSunset } from "react-icons/wi";
import { FaCity } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { FaPersonRays } from "react-icons/fa6";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Info = ({ info, state }) => {
  const roundToInteger = (value) => {
    return Math.round(value);
  };

  return (
    <div className="info-container">
      {state ? (
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                <TableRow>
                  <TableCell>
                    <FaCity className="icon" /> Şehir
                  </TableCell>
                  <TableCell>
                    <WiSunset className="icon" /> Sıcaklık
                  </TableCell>
                  <TableCell>
                    <GrStatusUnknown className="icon" /> Durum
                  </TableCell>
                  <TableCell>
                    <FaPersonRays className="icon" /> Hissedilen Sıcaklık
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{info.name}, {info.sys.country}</TableCell>
                  <TableCell>{roundToInteger(info.main.temp)} &deg;C</TableCell>
                  <TableCell>{info.weather[0].description}</TableCell>
                  <TableCell>{roundToInteger(info.main.feels_like)} &deg;C</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : null}
    </div>
  );
};

export { Info };
