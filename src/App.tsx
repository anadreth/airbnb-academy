import React from "react";
import { Fade } from "@mui/material";
import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import PropertyList from "./components/PropertyList/PropertyList";
import Filter from "./components/Filter/Filter";
import { propertyList } from "./assets/propertyList";
import { Triangle } from "./components/StyledComponents/Triangle";
import { FatTypography } from "./components/StyledComponents/Typographies";
import { BetweenBox, CenteredBox } from "./components/StyledComponents/Boxes";

export const AppContext = React.createContext<any>(null);

function App() {
  const [guestNumber, setGuestNumber] = useState<number>(0);
  const [currentCity, setCurrentCity] = useState<string>("Helsinki, Finland");

  return (
    <AppContext.Provider
      value={{ setCurrentCity, currentCity, setGuestNumber, guestNumber }}
    >
      <Fade in timeout={1200}>
        <Container>
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { md: "space-between" },
              alignItems: { md: "center" },
              mt: { md: 2 },
            }}
          >
            <a href="/"style={{textDecoration:"none",}}>
              <FatTypography id="logo" color="secondary">
                <Triangle />
                windbnb
              </FatTypography>
            </a>
            <CenteredBox
            >
              <Filter
                setGuestNumber={setGuestNumber}
                currentCity={currentCity}
              />
            </CenteredBox>
          </Box>
          <BetweenBox
            sx={{
              my: 2,
            }}
          >
            <Typography variant="h2" sx={{ width: "70%", textAlign: "left" }}>
              Stays in Finland
            </Typography>
            <Typography variant="h6" sx={{ width: "30%", textAlign: "right" }}>
              {propertyList.length}+ stays
            </Typography>
          </BetweenBox>

          <PropertyList guestNumber={guestNumber} currentCity={currentCity} />
        </Container>
      </Fade>
    </AppContext.Provider>
  );
}

export default App;
