import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

import { DetailsViewProps } from "./interface";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getPontoTuristico } from "../../services/api/pontosturisticos/requests";
import { DetailsInfoComponents } from "../../components/DetailsInfoComponent";
import { getServico } from "../../services/api/servicos/requests";
import EnderecoButton from "../../components/EnderecoButton";
import { validateUrlImage } from "../../util/validateUrlImage";
import { getEvento } from "../../services/api/evento/requests";
import { formatterDateStringDDMM } from "../../util/dateConverter";

// TODO: implementar a tela de detalhes

export default function DetailsView(props: DetailsViewProps) {
  // STATES

  const [entity, setEntity] = useState<any>({});

  // LIFECYCLE

  useEffect(() => {
    console.log("DetailsView type", props.type);

    switch (props.type) {
      case "pontoTuristico":
        const findPontoTuristico = async () => await getPontoTuristico(props.id_entity).then(({ data }: any) => {
          setEntity(data);
        });

        findPontoTuristico()
        break;
      case 'servico':
        const findServico = async() => await getServico(props.id_entity).then(({ data }: any) => {
          setEntity(data);
        });

        findServico();
        break;
      case 'evento':
        const findEvento = async() => await getEvento(props.id_entity).then(({ data }: any) => {
          setEntity(data);
        })

        findEvento();
    }
  }, []);

  // METHODS

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {entity.imagens && (
          <Image
            source={{
              uri: validateUrlImage(entity.imagens[0].url),
            }}
            style={styles.imageDetailsView}
          />
        )}

        {entity.endereco && <EnderecoButton endereco={entity.endereco} latitude={entity.latitude} longitude={entity.longitude}/>}

        {props.type === 'evento' &&
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:40}}>
            {entity.abertura && <DetailsInfoComponents title={"Abertura"} description={formatterDateStringDDMM(entity.abertura)} icon={"calendar-plus-o"}/>}
            {entity.abertura && <DetailsInfoComponents title={"Encerramento"} description={formatterDateStringDDMM(entity.encerramento)} icon={"calendar-check-o"} />}
          </View>
        }

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
                  title={info.title}
                  description={info.descricao}
                />
              );
            })}
        </View>
      <View style={{height:100, width:"100%"}}/>
      </View>
    </ScrollView>
  );
}
