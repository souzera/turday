import { styles } from "./styles";
import { FlatList, ScrollView, Text, View } from "react-native";
import { TurdayTitle } from "../../components/Title";
import Carrosel from "../../components/Carousel";
import { HeaderInfo } from "../../components/HeaderInfos";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";
import useLocation from "../../context/location";
import { useEffect, useState } from "react";
import { requestLocationPermission } from "../../services/location";
import ListView from "../ListView";
import { validateUrlImage } from "../../util/validateUrlImage";
import { ListItem } from "../../components/ListItem";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getPontosTuristicos } from "../../services/api/pontosturisticos/requests";
import { getServicos } from "../../services/api/servicos/requests";
import { HomeListItemProps } from "./interface";

export default function HomeView() {
  // STATES

  const { location, setLocation } = useLocation();

  //TODO: implementar um tipo para essa lista na home view
  const [list, setList] = useState<HomeListItemProps[]>([]); // [PontoTuristico]

  // LIFECYCLE

  useEffect(() => {
    requestLocationPermission().then(({ coords }: any) => {
      setLocation(coords);
    });

    //reset list
    setList([]);

    getPontosTuristicos().then(({ data }: any) => {
      data.map((item: any) => {
        const newItem = {
          id: item.id,
          titulo: item.nome,
          descricao: item.descricao,
          image: validateUrlImage(item.imagens[0].url),
          link: "",
          type: "pontoTuristico",
        };
        setList((prev) => [...prev, newItem]);
      });
    });

    getServicos().then(({ data }: any) => {
      data.map((item: any) => {
        const newItem = {
          id: item.id,
          titulo: item.nome,
          descricao: item.descricao,
          image: validateUrlImage(item.imagens[0].url),
          link: "",
          type: "servico",
        };
        setList((prev) => [...prev, newItem]);
      });
    });
  }, []);

  // METHODS

  return (
    <ScrollView>
      <View style={{...styles.container, marginTop:50}}>
        <View>
          <TurdayTitle />
          <HeaderInfo />
        </View>

        <View>
          <View style={styles.collumn}>
            <View style={styles.row}>
              <AntDesign
                name="pushpin"
                size={16}
                color={THEME.COLORS.DARKGRAY}
              />
              <Text>Destaques</Text>
            </View>
            <Carrosel />
          </View>

          <View style={{ ...styles.container, marginTop: 10 }}>
            <FlatList
              style={{}}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
              scrollToOverflowEnabled={true}
              showsVerticalScrollIndicator={false}
              data={list}
              renderItem={({ item }) => (
                <ListItem
                  id={item.id}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  link={item.link}
                  image={item.image}
                  type={item.type}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
