import Image from "next/image";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  alt: string;
  src: string;
};

const SpaceDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const PokemonImage = ({ alt, src }: Props) => {
  return (
    <>
      <Box justifyContent="center" sx={{ display: "flex" }}>
        {src == "" ? (
          <SpaceDiv>
            <CircularProgress />
          </SpaceDiv>
        ) : (
          <Image width={300} height={300} src={src} alt={alt} />
        )}
      </Box>
    </>
  );
};

export default PokemonImage;
