import React, { useContext, useState, ReactNode } from "react";

type CurrentLocationProviderPropsType = {
  children: ReactNode | ReactNode[];
};

const CurrentLocationContextDefaultValue = {
  currentLocation: "Helsinki, Finland",
  setCurrentLocation: (location: string) => {},
};

const CurrentLocationContext = React.createContext(
  CurrentLocationContextDefaultValue
);

export const useCurrentLocation = () => useContext(CurrentLocationContext);

export const CurrentLocationProvider: React.FC<
  CurrentLocationProviderPropsType
> = ({ children }) => {
  const [currentLocation, setCurrentLocation] =
    useState<string>("Helsinki, Finland");

  return (
    <CurrentLocationContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
      }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
};
