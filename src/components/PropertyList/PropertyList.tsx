import { Grid, Typography } from "@mui/material";
import Property from "./Property";
import { propertyList } from "../../assets/propertyList";
import { Grow } from "@mui/material";

interface PropertyListType {
  guestNumber: number;
  currentCity: string;
}

const PropertyList = ({ guestNumber, currentCity }: PropertyListType) => {
  const filteredProperties = propertyList.filter(
    (item) =>
      item.bedCount >= guestNumber &&
      currentCity === `${item.city}, ${item.state}`
  );

  return (
    <Grid container spacing={2}>
      {filteredProperties.length === 0 ? (
        <Typography sx={{p: 2}}>No properties found</Typography>
      ) : (
        filteredProperties.map((item, index) => (
          <Grow in timeout={1000 + index * 700}>
            <Grid item xs={12} sm={4} key={item.id}>
              <Property
                src={item.src}
                name={item.name}
                bedCount={item.bedCount}
                roomType={item.roomType}
                rating={item.rating}
                superHost={item.superHost}
              />
            </Grid>
          </Grow>
        ))
      )}
    </Grid>
  );
};

export default PropertyList;
