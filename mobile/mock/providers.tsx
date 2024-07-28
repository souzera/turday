import { LocationContextProvider } from "../src/context/location";
import { AuthContextProvider } from "../src/context/auth";

export default function MockProviders({ children }: any) {
  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <LocationContextProvider>
      <AuthContextProvider>
          {children}
      </AuthContextProvider>
    </LocationContextProvider>
  );
}
