import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../../MaterialTheme";
import { keywords } from "../../clientUtils/lists";

function LocationSearch({
  countries,
  handleAdress,
  lang,
  countryValue,
  setCountryValue,
  cityValue,
  setCityValue,
  products,
}) {
  const notChoosed = countryValue === "";
  const filteredProducties = products.filter(
    (product) => product?.country?.toLowerCase().trim() === countryValue
  );

  const allCurrentCity = filteredProducties.map((product) =>
    product?.city?.toLowerCase().trim()
  );
  const currenCities = allCurrentCity.filter(
    (value, index) => allCurrentCity.indexOf(value) === index
  );
  console.log(currenCities);
  return (
    <Paper
      component={"form"}
      sx={{
        width: "20rem",
        position: "fixed",
        top: 200,
        left: 25,
        zIndex: 1000,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "1rem",
        color: "#fff",
        backgroundColor: colors.Brown,
        "@media screen and (min-width:768px)": {
          left: 300,
          top: 150,
        },
      }}
      onSubmit={handleAdress}
    >
      <Typography sx={{ letterSpacing: 0, paddingBottom: "0.5rem" }}>
        {keywords.adressLocation[lang]}
      </Typography>
      <Stack direction={"row"}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="country"
            fullWidth
            value={countryValue}
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".3rem",
              textAlign: "center",
            }}
            onChange={(e) => setCountryValue(e.target.value)}
          >
            {" "}
            {countries &&
              countries.map((option, index) => {
                return (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel
            id="demo-simple-select-label"
            sx={{ marginBottom: "2px" }}
          >
            City
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="city"
            value={cityValue}
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".3rem",
              textAlign: "center",
            }}
            onChange={(e) => setCityValue(e.target.value)}
            disabled={notChoosed}
          >
            {currenCities &&
              currenCities.map((option, index) => {
                return (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        {/* <TextField
          name="city"
          select
          varient="outlined"
          fullWidth
          placeholder="City"
          value={cityValue}
          sx={{
            backgroundColor: "#fff",
            height: "2.5rem",
            borderRadius: ".3rem",
            paddingLeft: ".5rem",
            marginLeft: "1rem",
          }}
          onChange={(e) => setCityValue(e.target.value)}
          disabled={notChoosed}
        >
          {currenCities &&
            currenCities.map((option, index) => {
              return (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              );
            })}
        </TextField> */}
      </Stack>

      <Stack direction={"row"} justifyContent={"flex-end"} my={1}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Paper>
  );
}

export default LocationSearch;
