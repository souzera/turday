import { Camera, Marker, Region } from "react-native-maps";
import MapView from "react-native-maps";
import styles from "./styles";
import { MapComponentProps } from "./interface";

export function MapComponent({ pointer }: MapComponentProps) {
  // VARIABLES

  const initialCamera: Camera = {
    center: {
      latitude: pointer.latitude,
      longitude: pointer.longitude,
    },
    heading: 0,
    pitch: 0,
    zoom: 1,
  };

  const initialRegion: Region = {
    latitude: pointer.latitude,
    longitude: pointer.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <MapView
      style={styles.box}
      initialRegion={initialRegion}
      initialCamera={initialCamera}
    >
      <Marker
        coordinate={{
          latitude: pointer.latitude,
          longitude: pointer.longitude,
        }}
        title={pointer.title}
      />
    </MapView>
  );
}
