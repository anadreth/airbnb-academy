import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BetweenBox } from "../../StyledComponents/Boxes";
import { FilterContext } from "../Filter";

const GuestCounter = () => {
  const { childrenCount, adultsCount, setAdultsCount, setChildrenCount } =
    React.useContext(FilterContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        m: 2,
        ml: { md: "55%" },
      }}
    >
      <Box>
        <Typography variant="h3">Adults</Typography>
        <Typography variant="h6">Age 13 or above</Typography>
        <BetweenBox sx={{ py: 2 }}>
          <Button
            disabled={adultsCount > 0 ? false : true}
            variant="outlined"
            onClick={() => setAdultsCount((prev: number) => prev - 1)}
          >
            -
          </Button>
          <Typography sx={{ px: 2 }}>{adultsCount}</Typography>
          <Button
            variant="outlined"
            onClick={() => setAdultsCount((prev: number) => prev + 1)}
          >
            +
          </Button>
        </BetweenBox>
      </Box>

      <Box>
        <Typography variant="h3">Children</Typography>
        <Typography variant="h6">Ages 2-12</Typography>
        <BetweenBox sx={{ py: 2 }}>
          <Button
            disabled={childrenCount > 0 ? false : true}
            variant="outlined"
            onClick={() => setChildrenCount((prev: number) => prev - 1)}
          >
            -
          </Button>
          <Typography sx={{ px: 2 }}>{childrenCount}</Typography>
          <Button
            variant="outlined"
            onClick={() => setChildrenCount((prev: number) => prev + 1)}
          >
            +
          </Button>
        </BetweenBox>
      </Box>
    </Box>
  );
};

export default GuestCounter;
