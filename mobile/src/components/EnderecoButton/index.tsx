import { View, Text, TouchableOpacity } from "react-native";
import { EnderecoButtonProps } from "./interface";
import styles from "./styles";

export default function EnderecoButton(props: EnderecoButtonProps) {
  
  const onPress = () => {
    console.log(`Abrir mapa\n\tLatitude: ${props.latitude}\n\tLongitude: ${props.longitude}`);
    
  };

  return (
    <View style={styles.enderecoButtonContainer}>
      <Text numberOfLines={2} style={styles.enderecoButtonTextContent} >{props.endereco}</Text>
      <TouchableOpacity style={styles.enderecoButtonTouchable} onPress={onPress}>
        <Text>Ver no Mapa</Text>
      </TouchableOpacity>
    </View>
  );
}
