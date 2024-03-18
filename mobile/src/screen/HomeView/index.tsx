import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { TurdayTitle } from "../../components/Title";
import Carousel from "../../components/Carousel";

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TurdayTitle />
      </View>

      <View style={styles.div}>
        <View>
          <Text>Destaques</Text>
          <Text>Carrosel com os destaques</Text>
          <Carousel />
        </View>

        <View>
          <Text>Pontos turisticos</Text>
          <Text>Lista com Pontos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
