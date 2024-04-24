import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import styles from "./styles";

export function MapComponent() {

  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <MapView
      style={styles.box}
      initialRegion={{
        latitude: -7.8405,
        longitude: -38.1002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker
          key={null}
          coordinate={{
            latitude: -7.8405,
            longitude: -38.1002,
          }}
          title={'Marco Zero'}
          description={"Ponto de referência da cidade de Triunfo-PE"}
        />
      </MapView>
  );
}
