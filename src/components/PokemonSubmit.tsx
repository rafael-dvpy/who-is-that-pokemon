import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function PokemonSubmit() {
  const [text, setText] = useState("");
  let response = "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  const handleClick = () => {
    response = text;
    setText("");
  };
  return (
    <>
      <Box margin={2} justifyContent="center" sx={{ display: "flex" }}>
        <form action="">
          <TextField
            id="textField"
            label="?"
            value={text}
            onChange={handleChange}
          />
          <Button
            style={{ marginLeft: 10, height: "56px" }}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}

export default PokemonSubmit;
