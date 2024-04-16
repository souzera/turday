import { styles } from "./styles";
import { Text, View } from "react-native";
import { TurdayTitle } from "../../components/Title";
import Carrosel from "../../components/Carousel";
import { HeaderInfo } from "../../components/HeaderInfos";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <View>
        <TurdayTitle />
        <HeaderInfo />
      </View>

      <View style={styles.div}>
        <View>
          <Text>✨ Destaques</Text>
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
