import { Text, TouchableOpacity, View } from "react-native";

import { DetailsViewProps } from "./interface";
import { styles } from "./styles";

// TODO: implementar a tela de detalhes

export default function DetailsView(props: DetailsViewProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>DetailsView</Text>
        </View>
      </View>
    </>
  );
}
