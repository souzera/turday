import { styles } from "./styles";
import { Text, View } from "react-native";
import { TurdayTitle } from "../../components/Title";
import DestaquesCarrosel from "../../components/Carousel";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <View>
        <TurdayTitle />
      </View>

      <View style={styles.div}>
        <View>
          <Text>Destaques</Text>
          <Text>Carrosel com os destaques</Text>
          <DestaquesCarrosel />
        </View>

        <View>
          <Text>Pontos turisticos</Text>
          <Text>Lista com Pontos</Text>
        </View>
      </View>
    </View>
  );
};

