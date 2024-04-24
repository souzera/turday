import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { HeaderInfo } from "../../components/HeaderInfos";
import { FontAwesome } from "@expo/vector-icons";
import { MapComponent } from "../../components/MapComponent";

// TODO: implementar funcionalidades no mapa 

export default function MapView() {
  // STATES

  const [search, setSearch] = useState<string>("");

  // LIFECYCLE

  useEffect(() => {
    console.log(search);
  }, [search]);

  // METHODS

  const onChangeText = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <HeaderInfo />
        </View>
        <View style={styles.inputGroup}>
          <FontAwesome name="search" size={20} color="gray" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="buscar..."
          />
        </View>

        <View style={styles.mapContainer}>
          <MapComponent/>
        </View>
      </View>
    </>
  );
}
