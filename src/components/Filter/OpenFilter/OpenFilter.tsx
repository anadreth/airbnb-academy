import { Box, Button, Typography, ButtonGroup, Slide } from "@mui/material";
import LocationList from "./LocationList";
import { AppContext } from "../../../App";
import React from "react";
import GuestCounter from "./GuestCounter";
import { BetweenBox, CenteredBox } from "../../StyledComponents/Boxes";
import { FilterContext } from "../Filter";

interface OpenFilterType {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLocation: React.Dispatch<React.SetStateAction<boolean>>;
  showFilter: boolean;
  showLocation: boolean;
}

const OpenFilter = ({
  setShowFilter,
  showFilter,
  showLocation,
  setShowLocation,
}: OpenFilterType) => {
  const { currentCity, setGuestNumber, guestNumber } =
    React.useContext(AppContext);
  const { adultsCount, childrenCount, setChildrenCount, setAdultsCount } =
    React.useContext(FilterContext);

  const handleSearch = () => {
    setShowFilter(false);
    setGuestNumber(adultsCount + childrenCount);
  };

  return (
    <Slide in={showFilter} direction="left">
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "80vh",
          backgroundColor: "white",
          zIndex: 100,
          px: 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BetweenBox
          sx={{
            mb: 2,
          }}
        >
          <Typography>Edit your search</Typography>
          <span
            className="material-icons"
            style={{ cursor: "pointer" }}
            onClick={() => setShowFilter(false)}
          >
            close
          </span>
        </BetweenBox>

        <ButtonGroup
          orientation={`${screen.width < 900 ? "vertical" : "horizontal"}`}
          sx={{ width: "100%", mb: 2 }}
        >
          <Button
            color={`${showLocation ? "secondary" : "primary"}`}
            disableElevation
            variant="text"
            onClick={() => setShowLocation(true)}
            sx={{
              px: 0,
              textTransform: "capitalize",
              justifyContent: "start",
              width: "100%",
              border: "none",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "9px" }}>
                LOCATION
              </Typography>
              <Typography>
                {currentCity ? currentCity : "Choose Location"}
              </Typography>
            </Box>
          </Button>
          <Button
            color={`${!showLocation ? "secondary" : "primary"}`}
            disableElevation
            variant="text"
            onClick={() => setShowLocation(false)}
            sx={{
              px: 0,
              textTransform: "capitalize",
              justifyContent: "start",
              width: "100%",
              border: "none",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "9px" }}>
                GUESTS
              </Typography>
              <Typography>
                {guestNumber === 1
                  ? "1 guest"
                  : guestNumber > 1
                  ? guestNumber + " guests"
                  : "Add Guests"}
              </Typography>
            </Box>
          </Button>
        </ButtonGroup>
        {showLocation ? <LocationList /> : <GuestCounter />}

        <CenteredBox
          sx={{
            mt: "auto",
            width: "100%",
          }}
        >
          <Button
            onClick={handleSearch}
            sx={{
              color: "white",
              backgroundColor: "#EB5757",
              "&:hover": {
                opacity: 0.7,
                color: "#EB5757",
                boxShadow: 8,
                transform: "scale(1.05)",
              },
            }}
          >
            <span className="material-icons">search</span> Search
          </Button>
        </CenteredBox>
      </Box>
    </Slide>
  );
};

export default OpenFilter;
