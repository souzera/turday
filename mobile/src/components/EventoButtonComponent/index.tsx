import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { EventoButtonProps } from "./interface";
import { useState } from "react";
import { validateUrlImage } from "../../util/validateUrlImage";
import styles from "./styles";
import { THEME } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import DetailsView from "../../screen/DetailsView";

export default function EventoButtonComponent(props: EventoButtonProps) {
  // TODO: Implementar a função onPress
  /** abrir um modal com todas as informações do evento
   * incluindo a imagem, nome, descrição, data de início e data de fim
   * e outros detalhes que possam ser relevantes
   */

  // STATES

  const [isOpen, setIsOpen] = useState(false); // [boolean]

  // FUNCTIONS

  const convertDate = (date: any) => {
    // recieved pattern: 2024-06-19T00:00:00-03:00
    const mes: string = date.slice(5, 7);
    const dia: string = date.slice(8, 10);
    return `${dia}/${mes}`;
  };

  const handlePress = () => {
    console.log(
      `Abrir modal com informações do evento\n\tNome: ${props.nome}\n\tId: ${props.id}`
    );

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          ...styles.row,
          backgroundColor: THEME.COLORS.LIGTHGRAY,
          padding: 10,
          borderRadius: 32,
        }}
        onPress={handlePress}
      >
        {props.imagem ? (
          <Image
            source={{ uri: validateUrlImage(props.imagem) }}
            style={styles.eventoButtonImage}
          />
        ) : null}
        <View style={{ display: "flex", width: "100%" }}>
          <View style={{ width: 120 }}>
            <Text style={styles.eventoButtonTitle} numberOfLines={2}>
              {props.nome}
            </Text>
          </View>
          <View style={{ width: 120 }}>
            <Text style={styles.eventoButtonDescription} numberOfLines={2}>
              {props.descricao}
            </Text>
          </View>
          {props.inicio && (
            <Text
              style={styles.eventoButtonDescription}
            >{`Início: ${convertDate(props.inicio)}`}</Text>
          )}
          {props.fim && (
            <Text style={styles.eventoButtonDescription}>{`Fim: ${convertDate(
              props.fim
            )}`}</Text>
          )}
        </View>
      </TouchableOpacity>

      <Modal visible={isOpen}>
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
              <Text style={styles.modalHeaderTitle}>{props.nome}</Text>
            </View>
            <View style={{ width: 1 }}></View>
          </View>
          <DetailsView id_entity={props.id} type={"evento"} />
        </View>
      </Modal>
    </View>
  );
}
