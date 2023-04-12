import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useContext, useState } from "react";
import OpenFilter from "./OpenFilter/OpenFilter";
import { AppContext } from "../../App";
import React from "react";
import {  CurrentLocationProvider, useCurrentLocation } from "../../context/useCurrentLocation";

export const FilterContext = React.createContext<any>(null);

const Filter = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showLocation, setShowLocation] = useState<boolean>(true);

  const [adultsCount, setAdultsCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  const { guestNumber } = useContext(AppContext);

  const {currentLocation } = useCurrentLocation()

  const handleLocation = () => {
    setShowFilter(true);
    setShowLocation(true);
  };

  const handleGuests = () => {
    setShowFilter(true);
    setShowLocation(false);
  };
  return (
    <FilterContext.Provider
      value={{ adultsCount, setAdultsCount, childrenCount, setChildrenCount}}
    >
    <Box sx={{ maxWidth: "400px", m: 1 }}>
      <ButtonGroup>
        <Button
          variant="text"
          onClick={handleLocation}
          sx={{ px: 2, borderRadius: "24px", textTransform: "capitalize" }}
        >
          {currentLocation}
        </Button>
        <Button
          variant="text"
          onClick={handleGuests}
          sx={{ px: 2, borderRadius: "24px", textTransform: "capitalize" }}
        >
          {guestNumber === 1 ? "1 guest" : guestNumber  > 1 ? guestNumber + " guests" : "Add Guests"}
        </Button>
        <Button
          variant="text"
          onClick={() => setShowFilter(true)}
          color="secondary"
          sx={{ pl: 2, borderRadius: "24px", textTransform: "capitalize" }}
        >
          <span className="material-icons">search</span>
        </Button>
      </ButtonGroup>

      {showFilter && (
        <OpenFilter
          setShowFilter={setShowFilter}
          setShowLocation={setShowLocation}
          showFilter={showFilter}
          showLocation={showLocation}
        />
      )}
    </Box>
    </FilterContext.Provider>
  );
};

export default Filter;
