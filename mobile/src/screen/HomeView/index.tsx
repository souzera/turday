import { styles } from "./styles";
import { FlatList, ScrollView, Text, View } from "react-native";
import { TurdayTitle } from "../../components/Title";
import EventsCarousel from "../../components/EventsCarousel";
import { HeaderInfo } from "../../components/HeaderInfos";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";
import useLocation from "../../context/location";
import { useEffect, useState } from "react";
import { requestLocationPermission } from "../../services/location";
import { validateUrlImage } from "../../util/validateUrlImage";
import { ListItem } from "../../components/ListItem";
import { getPontosTuristicos } from "../../services/api/pontosturisticos/requests";
import { getServicos } from "../../services/api/servicos/requests";
import { HomeListItemProps } from "./interface";
import { Evento } from "../../services/api/evento/type";
import { getEventos } from "../../services/api/evento/requests";
import auth from '@react-native-firebase/auth';

export default function HomeView() {
  // STATES

  const { location, setLocation } = useLocation();

  const [user, setUser] = useState<any>();

  //TODO: implementar um tipo para essa lista na home view
  const [list, setList] = useState<HomeListItemProps[]>([]); // [PontoTuristico]
  const [detaques, setDestaques] = useState<Evento[]>([]); // [Eventos]

  // LIFECYCLE

  useEffect(() => {
    requestLocationPermission().then(({ coords }: any) => {
      setLocation(coords);
    });


    // TODO: Implementar o filtro para exibir apenas os pontos turisticos, serviços e eventos da cidade atual do usuario

    //reset list
    setList([]);

    //get user
    const subscriber = auth().onAuthStateChanged(setUser);
    console.log("user", user);

    getPontosTuristicos().then(({ data }: any) => {
      data = data.slice(0, 4);
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
      data = data.slice(0, 4);
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

    getEventos().then(({ data }: any) => {
      data = data.slice(0, 3);
      setDestaques(data);
    })
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
            <View style={{...styles.row, justifyContent:"flex-start", alignItems:"flex-start", width:"80%"}}>
              <AntDesign
                name="pushpin"
                size={16}
                color={THEME.COLORS.DARKGRAY}
              />
              <Text>Destaques</Text>
            </View>
            <EventsCarousel events={detaques} />
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
