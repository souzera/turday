import { TouchableOpacityProps } from "react-native";

export interface CategoryButtonProps extends TouchableOpacityProps{
    nome: string;
    icon?: string;
}