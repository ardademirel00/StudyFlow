import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const [topic, setTopic] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter topic..."
        value={topic}
        onChangeText={setTopic}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <Button
        title="Start Learning"
        onPress={() => navigation.navigate("Learn", { topic })}
      />
    </View>
  );
}
