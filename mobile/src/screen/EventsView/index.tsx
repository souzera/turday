//TODO: implements event view

import { View, Text, FlatList, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import { HeaderInfo } from "../../components/HeaderInfos";
import { useEffect, useState } from "react";
import { Evento } from "../../services/api/evento/type";
import { getEventos } from "../../services/api/evento/requests";
import EventoButtonComponent from "../../components/EventoButtonComponent";
import { FontAwesome } from "@expo/vector-icons";

export default function EventsView() {
  // STATES

  const [eventos, setEventos] = useState<Evento[]>([]); // Evento[]

  // LIFECYCLE

  useEffect(() => {
    // GET EVENTOS

    const findEventos = async () => {
      await getEventos().then(({ data }: any) => {
        console.log("data", data);
        setEventos(data);
      });
    };

    findEventos();
  }, []);

  // METHODS

  const onChangeText = async (text: string) => {
    console.log("text", text);
  };

  return (
    <ScrollView style={{ marginTop: 60 }}>
      <View style={{ ...styles.container, marginTop: 50, gap: 10 }}>
        <View style={{ height: 10 }} />

        <View>
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

        <View style={{ height: 10, width: "100%" }} />

        <View style={{ width: "80%" }}>
          <FlatList
            style={{ width: "100%", height: "100%" }}
            data={eventos}
            renderItem={({ item }) => (
              <EventoButtonComponent
                id={item.id}
                nome={item.nome}
                descricao={item.descricao}
                // @ts-ignore
                imagem={item.imagens[0].url}
                // @ts-ignore
                inicio={item.abertura}
                // @ts-ignore
                fim={item.encerramento}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
