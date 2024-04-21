import { View, Text, Image, TouchableOpacity } from "react-native";
import { ListItemProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export function ListItem(props: ListItemProps) {
  // METHODS

  const handlePress = () => {
    console.log("Ir para a página de detalhes do item selecionado");
    //TODO: redirecionar para a página de detalhes do item selecionado
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContent}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <View style={styles.descContainer}>
          {props.icon? <FontAwesome name={props.icon} size={16} color={"gray"}/> : null}
          <Text numberOfLines={2} style={styles.desc}>{props.descricao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
