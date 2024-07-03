import axios from "axios";
import { Pointer } from "../components/MapComponent/interface";

export async function getPlace(pointer: Pointer){
    return await axios.get("https://nominatim.openstreetmap.org/reverse", {
        params:{
            lat: pointer.latitude,
            lon: pointer.longitude,
            format: "json"
        }
    }).then(response => {return response}).catch((error) => {return error});
}