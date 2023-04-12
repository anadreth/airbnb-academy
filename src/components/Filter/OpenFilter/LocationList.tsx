import React from "react";
import { AppContext } from "../../../App";
import { Box, Typography, Button, List, ListItem } from "@mui/material";
import { cities } from "./../../../assets/locations";
import { CurrentLocationProvider, useCurrentLocation } from "../../../context/useCurrentLocation";

const LocationList = () => {
  const { setCurrentLocation } = useCurrentLocation()

  return (
    <Box sx={{overflow: "scroll"}}>
      <List>
        {cities.map((item, index) => (
          <ListItem key={index}>
            <Button
              onClick={() => setCurrentLocation(item)}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "center",
                width: "100%"
              }}
            >
              <span className="material-icons">location_on</span>
              <Typography variant="h6">{item}</Typography>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LocationList;
