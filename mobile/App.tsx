import { StatusBar } from "expo-status-bar";
import { Box } from "native-base";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://img.r7.com/images/2015/09/28/1u1xm60jme_9r19rv2vxr_file?dimensions=598x594",
        }}
      />
      <Box>
        <Text>Marcelo pro Cristiano</Text>
        <Text>Olha</Text>
        <Text>Ih</Text>
        <Text>Ih</Text>
        <Text>Olha o Cristiano</Text>
        <Text>Buffon desesperado</Text>
        <Text>Rolou pra trás</Text>
        <Text>Lucas VASQUES</Text>
        <Text>BUFOOOOOOOOOOONNNNNNN</Text>
        <Text>...</Text>
        <Text>CRISTIANO DE BICICLETA</Text>
        <Text>MINHA NOSSA</Text>
        <Text>MINHA NOSSA</Text>
        <Text>GOOOOOOLLLLLL</Text>
        <Text>RECEBA</Text>
        <Text>Os aplausos</Text>
        <Text>Do torcedor rival</Text>
        <Text>ESTÁ DE PÉ</Text>
        <Text>O torcedor em Turin</Text>
        <Text>PARA APLAUDIR</Text>
        <Text>PARA REVERENCIAR</Text>
        <Text>Essa MÁQUINA</Text>
        <Text>ESSE MONSTRO</Text>
        <Text>Esse jogador INEXPLICÁVEL CHAMADO CRISTIANO RONALDO</Text>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 30,
    textAlign: "left",
  },
});
