import { Pointer } from "../components/MapComponent/interface";
import { getAddress } from "../services/google/maps";

export async function verifyAdress(endereco: string, pointer: Pointer) {
  if (endereco == "N/A") {
    console.log("Endereco: ", endereco);
    console.log("Pointer: ", pointer);
    await getAddress({
      latitude: pointer.latitude,
      longitude: pointer.longitude,
    }).then(({ data }: any) => {
      return data.results[0].formatted_address;
    });
  }

  return endereco;
}
