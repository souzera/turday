import { Routes } from "./src/routes";
import MockProviders from "./mock/providers";
import app from "@react-native-firebase/app"

export default function App() {
  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <>
      <MockProviders>
        <Routes />
      </MockProviders>
    </>
  );
}
