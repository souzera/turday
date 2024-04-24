import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { HeaderInfo } from "../../components/HeaderInfos";
import CategoryButton from "../../components/CategoryButton";

export default function CategoryView() {
  // STATES

  const [categorias, setCategorias] = useState(["Culinária", "Moda", "Tecnologia", "Esportes", "Música", "Arte", "Cinema", "Literatura", "História", "Ciência", "Política", "Economia", "Religião", "Geografia", "Biologia", "Química", "Física", "Matemática", "Filosofia", "Sociologia", "Psicologia", "Educação", "Direito", "Administração", "Medicina", "Engenharia", "Arquitetura", "Design", "Jogos", "Esoterismo", "Outros"]);

  // LIFECYCLE

  // TODO: buscar categorias no backend

  // METHODS

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderInfo />
        </View>

        <View style={styles.main}>
          <CategoryButton nome={"Guias"} icon={"users"} />
          <View style={styles.horizontalDivider}>
            <Text></Text>
          </View>
          <FlatList
            style={{ width: "100%" }}
            data={categorias}
            renderItem={({ item }) => <CategoryButton nome={item} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}
