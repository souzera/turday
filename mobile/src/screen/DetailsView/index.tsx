import { Text, TouchableOpacity, View, Image } from "react-native";

import { DetailsViewProps } from "./interface";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getPontoTuristico } from "../../services/api/pontosturisticos/requests";
import { PontoTuristico } from "../../services/api/pontosturisticos/type";
import { DetailsInfoComponents } from "../../components/DetailsInfoComponent";
import { getServico } from "../../services/api/servicos/requests";

// TODO: implementar a tela de detalhes

export default function DetailsView(props: DetailsViewProps) {
  // STATES

  const [entity, setEntity] = useState<any>({});

  // LIFECYCLE

  useEffect(() => {
    console.log("DetailsView type", props.type);

    switch (props.type) {
      case "pontoTuristico":
        getPontoTuristico(props.id_entity).then(({ data }: any) => {
          setEntity(data);
        });
        break;
      case 'servico':
        getServico(props.id_entity).then(({ data }: any) => {
          setEntity(data);
        });
        break;
    }
  }, []);

  // METHODS
  console.log("entity", entity);

  return (
    <>
      <View style={styles.container}>
        {entity.imagens && (
          <Image
            source={{
              uri: entity.imagens[0].url,
            }}
            style={styles.imageDetailsView}
          />
        )}
        <View style={styles.collumnDetailsView}>
          {entity.descricao && (
            <Text style={styles.descriptionDetailsView}>
              {entity.descricao}
            </Text>
          )}

          {entity.infos &&
            entity.infos.map((info: any) => {
              return (
                <DetailsInfoComponents
                  title={info.titulo}
                  description={info.descricao}
                />
              );
            })}
        </View>
      </View>
    </>
  );
}
