import { TouchableOpacityProps } from "react-native";
import { Pointer } from "../MapComponent/interface";

export interface ListItemProps extends TouchableOpacityProps{
    id: string;
    titulo: string;
    descricao?: string;
    image?: string;
    link: string;
    icon?: string | undefined;
    type: string;
    pointer?: Pointer;
}