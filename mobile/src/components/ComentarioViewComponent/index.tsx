import { View, Text, Image } from "react-native";
import { ComentarioViewComponentProps } from "./interface";
import { formatterDateStringDDMM } from "../../util/dateConverter";
import { useEffect, useState } from "react";
import { getTuristaById } from "../../services/api/usuario/requests";
import { Usuario } from "../../services/api/usuario/type";

export function ComentarioViewComponent({
  comentario,
}: ComentarioViewComponentProps) {
  // STATES

  const [autor, setAutor] = useState<Usuario>();

  // LIFECYCLE

  useEffect(() => {
    getTuristaById(comentario.turista).then(({ data }: any) => {
      setAutor(data);
    });
  }, []);

  // METHODS

  console.log(autor);

  return (
    <View>
      <View>

        <View>
          <Image source={{uri:autor?.avatar}}/>
        </View>
        
        <View>
          <Text>{autor?.nome}</Text>
          <Text>{formatterDateStringDDMM(comentario.data)}</Text>
        </View>

      </View>

      <View>
        <Text>{comentario.texto}</Text>
      </View>
    </View>
  );
}
