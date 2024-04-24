import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItemProps } from "./interface";
import styles from "./styles";
import DetailsView from "../../screen/DetailsView";
import { THEME } from "../../theme";

export function ListItem(props: ListItemProps) {
  // STATES

  const [modalVisible, setModalVisible] = useState(false);

  // METHODS

  const handlePress = () => {
    console.log("Ir para a página de detalhes do item selecionado");
    //TODO: redirecionar para a página de detalhes do item selecionado
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContent}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <View style={styles.descContainer}>
          {props.icon ? (
            <FontAwesome name={props.icon} size={16} color={"gray"} />
          ) : null}
          <Text numberOfLines={2} style={styles.desc}>
            {props.descricao}
          </Text>
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
            <Text style={styles.modalHeaderTitle}>{props.titulo}</Text>
          </View>
          <DetailsView entity={1} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
