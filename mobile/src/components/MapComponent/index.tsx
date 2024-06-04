import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import styles from "./styles";
import { MapComponentProps } from "./interface";

export function MapComponent(props: MapComponentProps) {
  // STATES

  // LIFECYCLE

  // METHODS

  console.log(props.pointers);

  return (
    <MapView
      style={styles.box}
      initialRegion={{
        latitude: -7.8405,
        longitude: -38.1002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {props.pointers &&
        props.pointers.map((pointer, index) => (
          <Marker
            coordinate={{
              latitude: pointer.latitude,
              longitude: pointer.longitude,
            }}
            key={index}
            title={pointer.title}
          />
        ))}
    </MapView>
  );
}
