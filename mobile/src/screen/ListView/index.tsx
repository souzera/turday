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

  //temporário
  const listaCompleta: ListItemProps[] = [
    {
      id: "",
      titulo: "Coreto da Praça da Guarani",
      descricao: "Praça Carolino Campos",
      image: "",
      link: "",
      type: "pontoTuristico",
    },
  ];

  const [list, setList] = useState<PontoTuristico[]>([]);
  const { location } = useLocation();

  // LIFECYCLE

  useEffect(() => {
    console.log("location", location);
    getPontosTuristicos().then((response: any) => {
      setList(response.data);
    });
  }, []);

  // METHODS

  const onChangeText = (text: string) => {
    setList(
      list.filter((item) =>
        (item.nome + " " + item.descricao)
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
      )
    );
    if (text === "") {
      setList(list);
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
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            icon="map-marker"
            titulo={item.nome}
            image={validateUrlImage(item.imagens[0].url)}
            link={""}
            descricao={item.endereco}
            type="pontoTuristico"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
