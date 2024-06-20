import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { HeaderInfo } from "../../components/HeaderInfos";
import { FontAwesome } from "@expo/vector-icons";
import { MapComponent } from "../../components/MapComponent";
import useLocation from "../../context/location";
import { getPontosTuristicos } from "../../services/api/pontosturisticos/requests";
import { Pointer } from "../../components/MapComponent/interface";

// TODO: implementar funcionalidades no mapa 

export default function MapView() {
  
  // STATES

  const { location } = useLocation();
  const [search, setSearch] = useState<string>("");
  const [pointers, setPointers] = useState<Pointer[]>([]);

  // LIFECYCLE

  useEffect(() => {
    //console.log(search);
    console.log(`My Location: ${location.latitude}, ${location.longitude}`);

    getPontosTuristicos().then(({data}:any) => {
      data.forEach((ponto: any) => {
        setPointers([...pointers, {
          latitude: ponto.latitude,
          longitude: ponto.longitude,
          title: ponto.nome,
        }]);
      })
    });
  }, [search]);

  // METHODS

  const onChangeText = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <HeaderInfo />
        </View>
        <View style={styles.inputGroup}>
          <FontAwesome name="search" size={20} color="gray" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="buscar..."
          />
        </View>

        <View style={styles.mapContainer}>
          <MapComponent pointer={{latitude: location.latitude, longitude:location.longitude, title:"Você está aqui!"}}/>
        </View>
      </View>
    </>
  );
}
