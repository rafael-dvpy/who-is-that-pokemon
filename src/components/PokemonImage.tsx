import Image from "next/image";
import Box from "@mui/material/Box";

type Props = {
  alt: string;
  src: string;
};

const PokemonImage = ({ alt, src }: Props) => {
  return (
    <>
      <Box justifyContent="center" sx={{ display: "flex" }}>
        <Image width={300} height={300} src={src} alt={alt} />
      </Box>
    </>
  );
};

export default PokemonImage;
