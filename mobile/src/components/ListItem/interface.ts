import { TouchableOpacityProps } from "react-native";

export interface ListItemProps extends TouchableOpacityProps{
    id: string;
    titulo: string;
    descricao?: string;
    image?: string;
    link: string;
    icon?: string | undefined;
    type: string;
}