import { Routes } from "./src/routes";
import MockProviders from "./mock/providers";
import { StatusBar } from "expo-status-bar";
import { THEME } from "./src/theme";

export default function App() {
  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <>
      <MockProviders>
      <StatusBar backgroundColor={THEME.COLORS.LIGHT} />
        <Routes />
      </MockProviders>
    </>
  );
}
