import { View, FlatList } from "react-native";
import { styles } from "./styles";
import AdvisorButton from "../../components/AdvisorButton";
import React, { useEffect, useState } from "react";
import { getGuias } from "../../services/api/guias/requests";
import { Guia } from "../../services/api/guias/type";

export default function AdvisorView() {
  // STATES

  const [advisors, setAdvisors] = useState<Guia[]>([]); // [Guia

  // LIFECYCLE

  useEffect(() => {
    getGuias().then(({ data }: any) => {
      setAdvisors(data);
    });
  }, []);

  // METHODS

  return (
    <>
    <View style={{...styles.container,}}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={advisors}
        renderItem={({ item }) => (
          <AdvisorButton
            nome={item.nome}
            contato={item.contato}
            avatar={item.avatar.url}
          />
        )}
      />
    </View>
    </>
  );
}
