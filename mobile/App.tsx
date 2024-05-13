import { useEffect, useState } from "react";
import { Routes } from "./src/routes";
import { requestLocationPermission } from "./src/services/location";
import { LocationContextProvider } from "./src/context/location";

export default function App() {
  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <>
      <LocationContextProvider>
        <Routes />
      </LocationContextProvider>
    </>
  );
}
