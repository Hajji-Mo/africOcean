import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors } from "../../../MaterialTheme";
import { selectLang } from "../../State/AppSlice";
import { useSelector } from "react-redux";

export default function Selectlanguage({ langtext, mobile }) {
  const lang = useSelector(selectLang);
  const [lange, setLang] = useState("");
  useEffect(
    function () {
      setLang(lang);
    },
    [lang]
  );

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", JSON.stringify(event.target.value));
    window.location.reload();
  };
  // localStorage.setItem("lang", JSON.stringify(lang));
  return (
    <FormControl sx={{ mt: 1, mr: 1, minWidth: 90 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={lange}
        variant="standard"
        label="lang"
        disableUnderline
        onChange={handleChange}
        sx={{
          color: colors.white,
          marginRight: mobile ? "2.7rem" : 0,
        }}
      >
        <MenuItem value="en">{langtext.en}</MenuItem>
        <MenuItem value="fr">{langtext.fr}</MenuItem>
      </Select>
    </FormControl>
  );
}
