import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { useEffect, useState } from "react";
import { getWeather } from "../../services/weather";

export function HeaderInfo() {

  // STATES

  const [cidade, setCidade] = useState("Triunfo-PE");
  const [temperatura, setTemperatura] = useState("33℃");

  // LIFECYCLE

  useEffect(() => {
    console.log("FETCH WEATHER...");
  },[])

  // METHODS

  const onpress = () => {
    console.log("alterar localização...");
    // TODO: implementar um modal para alterar a cidade do usuário
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <FontAwesome
            name="map-marker"
            size={32}
            color={THEME.COLORS.DARKGRAY}
          />
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={onpress}
          >
            <Text style={styles.link}>alterar</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{cidade}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Feather name={"sun"} size={32} color={THEME.COLORS.DARKGRAY} />
        <Text style={styles.info}>{temperatura}</Text>
      </View>
    </View>
  );
}
