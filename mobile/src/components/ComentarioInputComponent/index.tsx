import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Modal } from "react-native";
import styles from "./styles";
import useAuth from "../../context/auth";
import { AuthComponent } from "../AuthComponent";
import { addComentario } from "../../services/api/comentarios/requests";
import { ComentarioInputComponentProps } from "./interface";

export function ComentarioInputComponent(props:ComentarioInputComponentProps) {
  const { usuario } = useAuth();
  const [value, setValue] = useState("");
  const [showAuthComponent, setShowAuthComponent] = useState(false);

  useEffect(() => {
    if (usuario) {
      setShowAuthComponent(false);
    }
  }, [usuario]);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onSubmitComentario = () => {
    console.log("Comentario enviado: ", value);

    if (usuario){
      // enviar comentario
      if (value.length > 0) {
        addComentario(props.type, props.id_entity, usuario.id, value)
        setValue("");
      }
    }
  };

  return (
    <View style={styles.comentarioInputContainer}>
      {usuario ? (
        <>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            placeholder="Escreva sua avaliação..."
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={styles.comentarioTextInput}
          />
          <TouchableOpacity
            style={styles.comentarioInputButton}
            onPress={() => onSubmitComentario()}
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowAuthComponent(true)}
              style={styles.comentarioInputLoginButton}
            >
              <Text>Fazer Login</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <View style={{ height: 50 }} />

      <Modal visible={showAuthComponent}>
        <View style={styles.modalContent}>
          <AuthComponent />
          <TouchableOpacity onPress={() => setShowAuthComponent(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
