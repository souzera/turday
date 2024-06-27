import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { EventCarouseItemProps } from "./interface";
import { validateUrlImage } from "../../util/validateUrlImage";
import { useState } from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import DetailsView from "../../screen/DetailsView";

export default function EventCarouselItem({
  item,
  style,
}: EventCarouseItemProps) {

  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    console.log(`Ir para a página de detalhes do item ${item.id}`);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <Image
            source={{
              uri: validateUrlImage(item.imagens[0].url),
            }}
            style={{ width: "100%", height: "100%", borderRadius: 32 }}
          />
        </View>
      </TouchableOpacity>

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

            <View>
              <Text style={styles.modalHeaderTitle}>
                {item.nome}
              </Text>
            </View>

            <View></View>
          </View>

          <DetailsView id_entity={item.id} type="evento" />
        </View>
      </Modal>
    </View>
  );
}
