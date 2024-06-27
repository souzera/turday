import { View, Text, TouchableOpacity, Modal } from "react-native";
import { EnderecoButtonProps } from "./interface";
import styles from "./styles";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { MapComponent } from "../MapComponent";
import { getAddress } from "../../services/google/maps";

export default function EnderecoButton(props: EnderecoButtonProps) {
  
  // STATES

  const [modalVisible, setModalVisible] = useState(false);
  const [endereco, setEndereco] = useState(props.endereco);

  // LIFECYCLE

  useEffect(() => {
    if (props.latitude && props.longitude) {
      if (!endereco || endereco === "N/A") {
        getAddress({ latitude: props.latitude, longitude: props.longitude }).then(
          ({data}:any) =>{
            console.log(data);
            setEndereco(data.results[0].formatted_address);
          }
        );
      }
    }
  }, [])

  // METHODS
  const onPress = () => {
    console.log(
      `Abrir mapa\n\tLatitude: ${props.latitude}\n\tLongitude: ${props.longitude}`
    );
    setModalVisible(true);
  };

  return (
    <View>
      <View style={styles.enderecoButtonContainer}>
        <Text numberOfLines={2} style={styles.enderecoButtonTextContent}>
          {endereco}
        </Text>
        <TouchableOpacity
          style={styles.enderecoButtonTouchable}
          onPress={onPress}
        >
          <Text>Ver no Mapa</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible}>
        <View style={{ ...styles.modalContent, justifyContent: "flex-start" }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FontAwesome
                  name="close"
                  style={{ fontSize: 32, color: THEME.COLORS.DARKGRAY }}
                />
                <View style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                  <Text
                    numberOfLines={2}
                    style={{ fontSize: 16, color: THEME.COLORS.DARKGRAY }}
                  >
                    {endereco}
                  </Text>
                </View>
                <View></View>
              </View>
            </TouchableOpacity>
          </View>

          {props.latitude && props.longitude ? (
            <MapComponent
              pointer={{
                latitude: props.latitude,
                longitude: props.longitude,
                title: endereco,
              }}
            />
          ) : (
            <Text>Não foi possível carregar o mapa</Text>
          )}
        </View>
      </Modal>
    </View>
  );
}
