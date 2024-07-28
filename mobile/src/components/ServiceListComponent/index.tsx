import { View, Text, FlatList } from "react-native";
import { ListComponentProps } from "./interface";
import { useEffect, useState } from "react";
import { getServicos } from "../../services/api/servicos/requests";
import { ListItem } from "../ListItem";
import { validateUrlImage } from "../../util/validateUrlImage";

export default function ServiceListComponent({ category }: ListComponentProps) {
  // STATES

  const [servicos, setServicos] = useState<any>([]);

  // LIFECYCLE

  useEffect(() => {
    const fetchServicos = async () => {
      await getServicos().then(({ data }: any) => {
        let filter: any = [];
        data.forEach((servico: any) => {
          if (servico.categoria.nome === category) {
            filter.push(servico);
          }
        });
        setServicos(filter);
      });
    };

    fetchServicos();
  }, []);

  // METHODS

  return (
    <View style={{ display: "flex" }}>
      <FlatList
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        data={servicos}
        renderItem={({ item }) => {
          return (
            <View style={{width:"50%"}}>
              <ListItem
                id={item.id}
                icon="map-marker"
                titulo={item.nome}
                image={validateUrlImage(item.imagens[0].url)}
                link={""}
                descricao={item.endereco}
                type="servico"
                pointer={{ latitude: item.latitude, longitude: item.longitude}}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
