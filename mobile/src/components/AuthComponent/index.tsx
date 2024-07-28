import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../services/google/firebase/authenticate";
import styles from "./styles";
import { useState } from "react";
import { TurdayTitle } from "../Title";
import {
  createUsuario,
  getTuristaByToken,
} from "../../services/api/usuario/requests";
import { createLike } from "../../services/api/like/requests";
import { UsuarioDTO } from "../../services/api/usuario/type";
import options from "../../services/api/constants/options";
import useAuth from "../../context/auth";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

export function AuthComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const [authResult, setAuthResult] = useState<any>();
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const { usuario, setUsuario } = useAuth();

  // LIFECYCLE

  // METHODS

  const viewPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const createUserDTO = (data: UserCredential) => {
    const userDTO: UsuarioDTO = {
      login: data.user?.displayName || data.user?.email?.split("@")[0] || "",
      email: data.user?.email || "",
      token: data.user?.uid,
      avatar:
        data.user?.photoURL ||
        `${options.API_URL}uploads/cf733b7693fe41f8b70ab6fb04efc512.jpg`,
    };

    return userDTO;
  };

  const createWithEmail = async () =>
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        setAuthResult(createUserDTO(userCredential));
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthResult(errorCode);
      });

  const loginWithEmail = async () =>
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthResult(createUserDTO(userCredential));
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthResult(errorCode);
      });

  const handleAuth = async () => {
    await createWithEmail();
    await loginWithEmail();

    console.log("AUTH-RESULT RESPONSE: ", authResult);

    if (!authResult.token) {
      setError(true);
      return;
    }

    if (authResult.token) {
      await getTuristaByToken(authResult.token)
        .then((response: any) => {
          //caso não exista criando instancia do turista no banco de dados
          if (!response.data[0]) {
            createUsuario(authResult).then(({ data }: any) => {
              setUsuario(data);
              createLike(data.id).then((response) => {
                console.log("CREATE-LIKE Response: ", response);
              });
            });

            return;
          }

          setUsuario(response.data[0]);
        })
        .catch((error) => {
          return error;
        });
    }
  };

  return (
    <View style={styles.authContainer}>
      <TurdayTitle />
      {!usuario ? (
        <>
          <Text style={styles.authTitle}>Entrar com email</Text>
          <TextInput
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.authFormInput}
            placeholder="email"
            inputMode="email"
            autoComplete="email"
          />
          <View style={{ ...styles.authFormInput }}>
            <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
              style={{ width: "80%" }}
              placeholder="senha"
              secureTextEntry={hiddenPassword}
            />
            <TouchableOpacity
              onPress={viewPassword}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              {hiddenPassword ? (
                <FontAwesome
                  name="eye"
                  size={24}
                  color={THEME.COLORS.DARKGRAY}
                />
              ) : (
                <FontAwesome
                  name="eye-slash"
                  size={24}
                  color={THEME.COLORS.DARKGRAY}
                />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: 10,
            }}
          >
            {error && (
              <Text style={styles.authError}>Email ou senha inválidos</Text>
            )}
          </View>

          <TouchableOpacity onPress={handleAuth} style={styles.authButton}>
            <Text>Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Image src={usuario.avatar} />
          <Text>Bem Vindo, {usuario.login}!!</Text>
        </View>
      )}
    </View>
  );
}
