import { View, Text, Image } from "react-native";
import { ComentarioViewComponentProps } from "./interface";
import { formatterDateStringDDMM } from "../../util/dateConverter";
import { useEffect, useState } from "react";
import styles from "./style";
import { Usuario } from "../../services/api/usuario/type";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getTuristaById } from "../../services/api/usuario/requests";
import options from "../../services/api/constants/options";

export function ComentarioViewComponent({
  comentario,
}: ComentarioViewComponentProps) {
  // STATES

  const [turista, setTurista] = useState<Usuario | undefined>(undefined);

  // LIFECYCLE
  useEffect(() => {
    getTuristaById(comentario.turista_id).then(({ data }: any) => {
      setTurista({ ...data });
    });
  }, [comentario]);

  // METHODS

  return (
    <View style={{ width: "100%", gap: 10 }}>
      <View style={{ ...styles.comentarioViewHeader }}>
        <View>
          {turista ? (
            <Image
              source={{ uri: turista.avatar }}
              style={{ width: 48, height: 48, borderRadius: 50 }}
            />
          ) : (
            <Image
              source={{
                uri: `${options.API_URL}uploads/cf733b7693fe41f8b70ab6fb04efc512.jpg`,
              }}
              style={{ width: 48, height: 48, borderRadius: 50 }}
            />
          )}
        </View>

        <View>
          {turista ? (
            <Text style={styles.comentarioViewProfileText}>
              {turista.login}
            </Text>
          ) : (
            <Text style={styles.comentarioViewProfileText}>
              Usuário Anônimo
            </Text>
          )}
          <Text style={styles.comentarioViewProfileText}>
            {formatterDateStringDDMM(comentario.data)}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.comentarioTextArea}>{comentario.texto}</Text>
      </View>
    </View>
  );
}
