import { useEffect, useState } from "react";

import { styles } from "./styles";

import { View, FlatList, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";
import { HeaderInfo } from "../../components/HeaderInfos";

import { ListItemProps } from "../../components/ListItem/interface";
import { getPontosTuristicos } from "../../services/api/pontosturisticos/requests";
import { PontoTuristico } from "../../services/api/pontosturisticos/type";

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
    },
  ];

  const [list, setList] = useState<PontoTuristico[]>([]);

  // LIFECYCLE

  useEffect(() => {
    getPontosTuristicos().then(
      (response: any) => {
        setList(response.data);
        console.log(response.data[3]);
      }
    );
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
      <View style={styles.div}>
        <FlatList
          numColumns={2}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollToOverflowEnabled={true}
          showsVerticalScrollIndicator={true}
          data={list}
          renderItem={({ item }) => <ListItem id={item.id} icon="map-marker" titulo={item.nome} image={item.imagens[0].url} link={""} descricao={item.endereco}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
