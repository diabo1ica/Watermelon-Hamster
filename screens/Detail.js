import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Detail({ route, navigation }) {
  const { title, body } = route.params;

  useEffect(() => navigation.setOptions({ title }), [title]);
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{body}</Text>
    </View>
  );
}
