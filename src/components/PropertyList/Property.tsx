import { Box, Typography, Grid } from "@mui/material";
import { Image } from "../StyledComponents/Image";
import { BetweenBox } from "../StyledComponents/Boxes";

interface PropertyType {
  id?: number;
  src: string;
  name: string;
  bedCount: number;
  roomType: string;
  rating: number;
  superHost?: boolean;
}

const Property = ({
  src,
  name,
  bedCount,
  roomType,
  rating,
  superHost,
}: PropertyType) => {
  return (
    <Box>
      <Image src={src} alt={name} />

      <BetweenBox
        sx={{
          textAlign: "left",
          my: 1,
        }}
      >
        {superHost && (
          <Typography
            sx={{
              border: "solid 1px black",
              borderRadius: "24px",
              fontSize: "12px",
              p: 1,
              fontWeight: 700,
            }}
          >
            SUPER HOST
          </Typography>
        )}
        <Typography variant="h6">{`${roomType} ${
          bedCount === 1 ? "" : ". " + bedCount + " beds"
        }`}</Typography>
        <BetweenBox
          sx={{
            textAlign: "left",
          }}
        >
          <span
            className="material-icons"
            style={{ color: "#EB5757", opacity: "72%" }}
          >
            star
          </span>
          <Typography sx={{ ml: 1 }} variant="h6">
            {`${rating}`}
          </Typography>
        </BetweenBox>
      </BetweenBox>
      <Typography variant="h3" sx={{ mb: 1 }}>
        {name}
      </Typography>
    </Box>
  );
};

export default Property;
