import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { useState } from "react";
import { getWeather } from "../../services/weather";
import useLocation from "../../context/location";
import { HeaderInfoProps } from "./interface";
import { getPlace } from "../../services/adress";

export function HeaderInfo(props: HeaderInfoProps) {

  // STATES

  const { location, } = useLocation();
  const [cidade, setCidade] = useState("Triunfo-PE");
  const [temperatura, setTemperatura] = useState("00℃");
  const [weatherIcon, setWeatherIcon] = useState('cdn.weatherapi.com/weather/64x64/day/116.png');

  // LIFECYCLE

  // TODO: Implementar a alteração da cidade do usuário
  let customLocation = hasData(props)? {latitude:props.lat, longitude:props.lon} : location;

  // Coletando a temperatura da cidade atual do dispositivo
  getWeather(location.latitude, location.longitude).then((response) => {

    /**
     * consulta a condição do tempo na cidade atual do usuário
     * 
     * {response.data.current.condition.text}
     */
    setTemperatura(`${response.data.current.temp_c}℃`)
    setWeatherIcon(response.data.current.condition.icon);
  })

  getPlace({latitude: location.latitude, longitude: location.longitude}).then(({data}:any) => {
    const cidade = data.address.city ? data.address.city : data.address.town;
    setCidade(cidade);
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
            <Text style={styles.link}>Onde estou</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{cidade}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Image source={{uri:`https://${weatherIcon}`}} style={{width:32, height:32}}/>
        <Text style={styles.info}>{temperatura}</Text>
      </View>
    </View>
  );
}
