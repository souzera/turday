import { useEffect, useState } from "react";

import { styles } from "./styles";

import { View, FlatList, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";
import { HeaderInfo } from "../../components/HeaderInfos";

import modelListItem from "../../components/ListItem/sample";
import { ListItemProps } from "../../components/ListItem/interface";

export default function ListView() {
  // STATES

  //temporário
  const listaCompleta:ListItemProps[] = [
    {
      id: "",
      titulo: "PAPO PIZZA",
      image: "",
      link: ""
    },
    {
      id: "",
      titulo: "THEATRO CINEMA GUARANY",
      image: "",
      link: ""
    },
    {
      id: "",
      titulo: "CASA DA CULTURA",
      image: "",
      link: ""
    }
  ]

  const [list, setList] = useState<ListItemProps[]>(listaCompleta);

  // LIFECYCLE

  useEffect(() => {
    console.log(`FETCH LIST... ${list}`);
  },[list])

  // METHODS

  const onChangeText = (text: string) => {
    setList(listaCompleta.filter((item) => item.titulo.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
    if (text === "") {setList(listaCompleta);}
  }

  //TODO: Criar FlatList para exibir a lista de itens

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderInfo />
      </View>
      <View style={styles.inputGroup}>
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput onChangeText={onChangeText} placeholder="buscar..." style={styles.input} />
      </View>
      <View style={styles.div}>
        <FlatList
          numColumns={2}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollToOverflowEnabled={true}
          showsVerticalScrollIndicator={true}
          data={list}
          renderItem={({ item }) => <ListItem {...item} icon="map-marker" />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
