import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

type propsType = {
  pokemonName: string;
};

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const PokemonSubmit: React.FC<propsType> = ({ pokemonName }) => {
  const [text, setText] = useState("");
  const [responded, setResponded] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleClick = async () => {
    setResponded(true);
    if (text.toLocaleLowerCase() == pokemonName) {
      setResult(
        `You won, the Pokemon was ${capitalizeFirstLetter(pokemonName)}`
      );
    } else if (text.toLocaleLowerCase() != pokemonName) {
      setResult(
        `You lost, the Pokemon was ${capitalizeFirstLetter(pokemonName)}`
      );
    }
    setText("");
  };
  return (
    <>
      <CenteredDiv>{responded ? result : null}</CenteredDiv>
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
};

export default PokemonSubmit;
