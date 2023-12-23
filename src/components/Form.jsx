import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import cities from './cities.json'; // Update the path accordingly

const Form = ({ setInfo, setState }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = async () => {
    const api = "72cb7051d87f0c489a05d078f162cac8";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${api}&units=metric&lang=tr`;
    
    try {
      const response = await axios.get(baseURL);
      setInfo(response.data);
      setState(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="form-div">
      <h1>TÜRKİYE HAVA DURUMU</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleChange(); }} className="form">
        <div className="autocomplete-container">
          <Autocomplete
            options={cities}
            getOptionLabel={(option) => option}
            value={selectedCity}
            onChange={(_, newValue) => setSelectedCity(newValue)}
            renderInput={(params) => <TextField {...params} label="Şehir Giriniz" />}
          />
        </div>
        <div className="btnDiv">
          <Button type="submit" variant="contained" className="btn">
            HAVA DURUMUNU GÖSTER 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
