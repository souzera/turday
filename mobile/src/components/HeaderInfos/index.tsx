import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { useEffect, useState } from "react";
import { getWeather } from "../../services/weather";
import useLocation from "../../context/location";
import { HeaderInfoProps } from "./interface";

export function HeaderInfo(props: HeaderInfoProps) {

  // STATES

  const { location, } = useLocation();
  const [cidade, setCidade] = useState("Triunfo-PE");
  const [temperatura, setTemperatura] = useState("00℃");

  // LIFECYCLE

  // TODO: Implementar a alteração da cidade do usuário
  let customLocation = hasData(props)? {latitude:props.lat, longitude:props.lon} : location;

  // Coletando a temperatura da cidade atual do dispositivo
  getWeather(location.latitude, location.longitude).then((response) => {
    //TODO: Adaptação do icone do tempo
    console.log(`Condição do tempo: ${response.data.current.condition.text}`);
    setTemperatura(`${response.data.current.temp_c}℃`)
  })

  // METHODS

  function hasData(headerInfos: HeaderInfoProps){
    return headerInfos.lat !== undefined && headerInfos.lon !== undefined;
  }

  const onpress = () => {
    console.log("alterar localização...");
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
