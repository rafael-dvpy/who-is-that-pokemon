import React, { useRef, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

type propsType = {
  pokemonName: string;
  reload: boolean;
  setReload: (value: boolean) => void;
};

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const PokemonSubmit: React.FC<propsType> = ({
  pokemonName,
  reload,
  setReload,
}) => {
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
    setReload(!reload);
    setResponded(false);
  };

  const textField = useRef(null);

  const handleEnter = async () => {
    setResponded(true);
    if (text.toLocaleLowerCase().replace(/\s+/g, "") == pokemonName) {
      setResult(
        `You won, the Pokemon was ${capitalizeFirstLetter(pokemonName)}`
      );
    } else if (text.toLocaleLowerCase().replace(/\s+/g, "") != pokemonName) {
      setResult(
        `You lost, the Pokemon was ${capitalizeFirstLetter(pokemonName)}`
      );
    }
    setText("");
  };

  if (responded) {
    document.addEventListener("keydown", function handleKeyDown(e) {
      if (e.key === " ") {
        document.getElementById("myBtn")?.click();
      }
    });
  }
  return (
    <>
      <CenteredDiv>
        {responded ? (
          <Typography variant="h5" align="center">
            {result}
          </Typography>
        ) : null}
      </CenteredDiv>
      <Box margin={2} justifyContent="center" sx={{ display: "flex" }}>
        {!responded ? (
          <form action="">
            <TextField
              inputRef={(input) => input && input.focus()}
              id="textField"
              label="Pokemon Name"
              autoComplete="off"
              value={text}
              onChange={handleChange}
              onKeyPress={(e) => e.key === "Enter" && handleEnter()}
            />
          </form>
        ) : (
          <Button
            id="myBtn"
            variant="contained"
            color="primary"
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
