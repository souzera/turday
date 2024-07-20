import { useState } from "react";
import { View, TextInput } from "react-native";

export function ComentarioComponent() {
  const [value, onChangeText] = useState("Escreva sua avaliação...");

  return (
    <View>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
      />
    </View>
  );
}
