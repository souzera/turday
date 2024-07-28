import { FontAwesome } from "@expo/vector-icons";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import { LikeButtonProps } from "./interface";
import { useEffect, useState } from "react";
import useAuth from "../../context/auth";
import styles from "./style";
import { AuthComponent } from "../AuthComponent";
import { THEME } from "../../theme";
import { checkLike, toggleLike } from "../../services/api/like/requests";

export default function LikeButton(props: LikeButtonProps) {
  // STATES
  const { usuario } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // LIFECYCLE

  useEffect(() => {
    // verificando as curtidas do usuario atual
    if (usuario){
        checkLike(props.id_entity, props.type, usuario.id).then((response) => {
            setIsLiked(response);
        }).catch((error) => {
            console.log("CHECK-LIKE Error: ", error)
        });
    }
  }, [usuario]);

  useEffect(() => {
    if (usuario) {
      setShowModal(false);
    }
  }, [usuario]);

  // METHODS

  const handleLike = () => {
    if (usuario) {
      toggleLike(props.id_entity, props.type, usuario.id).then(
        () => {
            setIsLiked(!isLiked);
        }
      );
    } else {
      setShowModal(true);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLike}>
        {isLiked ? (
          <FontAwesome name="heart" size={props.size} color="red" />
        ) : (
          <FontAwesome
            name="heart-o"
            size={props.size}
            color={THEME.COLORS.DARKGRAY}
          />
        )}
      </TouchableOpacity>

      <Modal visible={showModal}>
        <View style={styles.modalContent}>
          <AuthComponent />
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
