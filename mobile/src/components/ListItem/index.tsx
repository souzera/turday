import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItemProps } from "./interface";
import styles from "./styles";
import DetailsView from "../../screen/DetailsView";
import { THEME } from "../../theme";
import { getAddress } from "../../services/google/maps";
import LikeButton from "../LikeButton";

export function ListItem(props: ListItemProps) {
  // STATES

  const [modalVisible, setModalVisible] = useState(false);
  const [endereco, setEndereco] = useState(props.descricao);

  // LIFECYCLE

  useEffect(() => {
    if (props.descricao == "N/A" && props.type == "servico") {
      console.log("Endereco: ", props.descricao);
      console.log("Pointer: ", props.pointer);

      if (props.pointer) {
        getAddress(props.pointer).then(({ data }: any) => {
          setEndereco(data.results[0].formatted_address);
        });
      }
    }
  }, []);

  // METHODS

  const handlePress = () => {
    console.log("Ir para a página de detalhes do item selecionado");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.listItemContainer}>
        <View style={styles.imageContent}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>

        <Text style={styles.titulo}>{props.titulo}</Text>
        
        <View
          style={{ ...styles.descContainer}}
        >
          <View style={{ display: "flex", width:"80%", flexDirection: "row", gap: 5 }}>
            {props.icon ? (
              <FontAwesome name="map-marker" size={16} color={"gray"} />
            ) : null}
            <Text numberOfLines={2} style={styles.desc}>
              {props.type != "servico" ? props.descricao : endereco}
            </Text>
          </View>
          <View>
          </View>
        </View>
      </View>

      <Modal visible={modalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={closeModal}>
              <FontAwesome
                name={"chevron-left"}
                size={32}
                color={THEME.COLORS.DARKGRAY}
              />
            </TouchableOpacity>
            <View style={{ width: "80%", display: "flex", alignItems: "center" }}>
              <Text style={{ ...styles.modalHeaderTitle }} numberOfLines={1}>
                {props.titulo}
              </Text>
            </View>
              <LikeButton type={props.type} id_entity={props.id} size={24} />
          </View>
          <DetailsView id_entity={props.id} type={props.type} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
