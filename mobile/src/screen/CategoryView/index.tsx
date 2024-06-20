import { useEffect, useState } from "react";
import { FlatList, View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { HeaderInfo } from "../../components/HeaderInfos";
import CategoryButton from "../../components/CategoryButton";
import AdvisorView from "../AdvisorView";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { getCategorias } from "../../services/api/categoria/requests";
import ServiceListComponent from "../../components/ServiceListComponent";

export default function CategoryView() {
  // STATES

  //TODO: Implementar a tipagem das categorias de acordo com o backend
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Guias");

  // LIFECYCLE

  useEffect(() => {
    const getCategoriaList = async () => {
      await getCategorias().then(({data}:any) => {
        setCategorias(data);
      });
    }

    getCategoriaList();
    console.log("Categorias: ", categorias);
  }, [])

  // METHODS

  const onCategoryPress = (category: string) => {
    console.log("Categoria selecionada: ", category);
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderInfo />
        </View>

        <View style={styles.main}>
          <CategoryButton
            nome={"Guias"}
            icon={"users"}
            onPress={() => onCategoryPress("guias")}
          />
          <View style={styles.horizontalDivider}>
            <Text></Text>
          </View>
          <FlatList
            style={{ width: "100%" }}
            data={categorias}
            renderItem={({ item }:any) => <CategoryButton nome={item.nome} icon={item.icon} onPress={() => onCategoryPress(item.nome)}/>}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
          />
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
            <Text style={styles.modalHeaderTitle}>{selectedCategory.toUpperCase()}</Text>
            <View></View>
          </View>

          <View>{selectedCategory === "guias" ? <AdvisorView /> : <ServiceListComponent category={selectedCategory}/>}</View>
        </View>
      </Modal>
    </>
  );
}
