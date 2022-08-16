import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
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

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const reloadPage = () => {
    window.location.reload();
  };

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

  if (responded) {
    document.addEventListener("keydown", function handleKeyDown(e) {
      if (e.key === "Enter") {
        reloadPage();
      }
    });
  }

  return (
    <>
      <CenteredDiv>
        {responded ? <Typography variant="h5">{result}</Typography> : null}
      </CenteredDiv>
      <Box margin={2} justifyContent="center" sx={{ display: "flex" }}>
        {!responded ? (
          <form action="">
            <TextField
              inputRef={(input) => input && input.focus()}
              id="textField"
              label="?"
              autoComplete="off"
              value={text}
              onChange={handleChange}
              onKeyPress={(e) => e.key === "Enter" && handleClick()}
            />
          </form>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onKeyPress={(e) => e.key === "Enter" && reloadPage()}
            onClick={reloadPage}
          >
            Try Again
          </Button>
        )}
      </Box>
    </>
  );
};

export default PokemonSubmit;
