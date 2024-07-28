import { useEffect, useState } from "react";

import { styles } from "./styles";

import { View, FlatList, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";
import { HeaderInfo } from "../../components/HeaderInfos";

import { ListItemProps } from "../../components/ListItem/interface";
import { getPontosTuristicos } from "../../services/api/pontosturisticos/requests";
import { PontoTuristico } from "../../services/api/pontosturisticos/type";
import useLocation from "../../context/location";
import { validateUrlImage } from "../../util/validateUrlImage";

export default function ListView() {
  // STATES

  const [list, setList] = useState<PontoTuristico[]>([]);
  const [search, setSearch] = useState<PontoTuristico[]>([]);
  const { location } = useLocation();

  // LIFECYCLE

  useEffect(() => {
    console.log("location", location);
    getPontosTuristicos().then((response: any) => {
      setList(response.data);
      setSearch(response.data);
    });
  }, []);

  // METHODS

  const onChangeText = async (text: string) => {
    
    setSearch(
      list.filter((item) =>
        (item.nome + " " + item.descricao)
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
      )
    );

    if (text === "") {
      setSearch(list);
    }
  };

  //TODO: Filtrar os pontos turisticos de acordo com a cidade do dispositivo

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderInfo />
      </View>
      <View style={styles.inputGroup}>
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput
          onChangeText={onChangeText}
          placeholder="buscar..."
          style={styles.input}
        />
      </View>

      <FlatList
        style= {{width: "90%"}}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        data={search}
        renderItem={({ item }) => (
          <View style={{width:"50%"}}>
            <ListItem
              id={item.id}
              icon="map-marker"
              titulo={item.nome}
              image={validateUrlImage(item.imagens[0].url)}
              link={""}
              descricao={item.endereco}
              type="pontoTuristico"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
