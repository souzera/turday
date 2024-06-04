import { View, Text } from "react-native";
import { DetailsInfoComponentsProps } from "./interface";
import styles from "./styles";

export function DetailsInfoComponents(props: DetailsInfoComponentsProps) {

    console.log("DetailsInfoComponents", props);

    return (
        <View>
            <Text style={styles.titleDetailsInfo}>{props.title}</Text>
            <Text style={styles.descriptionDetailsInfo}>{props.description}</Text>
        </View>
    );
}