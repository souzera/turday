import { styles } from "./styles";
import { Text, View } from "react-native";
import { TurdayTitle } from "../../components/Title";
import Carrosel from "../../components/Carousel";
import { HeaderInfo } from "../../components/HeaderInfos";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";
import useLocation from "../../context/location";
import { useEffect } from "react";
import { requestLocationPermission } from "../../services/location";

export default function HomeView() {

  // STATES

  const { setLocation } = useLocation();

  // LIFECYCLE

  useEffect(() => {
    requestLocationPermission().then((response) => {
      setLocation(response)
    })
  }, [])

  // METHODS

  return (
    <View style={styles.center}>
      <View>
        <TurdayTitle />
        <HeaderInfo />
      </View>

      <View style={styles.view}>
        <View style={styles.collumn}>
          <View style={styles.row}>
            <AntDesign name="pushpin" size={16} color={THEME.COLORS.DARKGRAY} />
            <Text style={styles.title}>Destaques</Text>
          </View>
          <Carrosel />
        </View>

        <View>
          <Text>Pontos turisticos</Text>
          <Text>Lista com Pontos</Text>
        </View>
      </View>
    </View>
  );
}
