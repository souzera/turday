import { firebase } from "@react-native-firebase/auth";

const auth = firebase.app().auth();

export default async function logar(login: string, password: string) {
    await auth.signInWithEmailAndPassword(login, password)
    .then(() => {
        console.log("Usuario Logado");
        return true;
    })
    .catch((error) => {
        console.error(error);
    });
}
