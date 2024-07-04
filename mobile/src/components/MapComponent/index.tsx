import { Camera, Marker, Region } from "react-native-maps";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import { MapComponentProps } from "./interface";

export function MapComponent({ pointer }: MapComponentProps) {
  

  console.log("Map Componente received pointer: ", pointer);
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

  // METHODS

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.box}
      initialRegion={initialRegion}
      initialCamera={initialCamera}
      scrollEnabled={false}
      zoomEnabled
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
