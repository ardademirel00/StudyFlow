import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { fetchLesson } from "../services/api";

export default function LearnScreen({ route, navigation }) {
  const { topic } = route.params;
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchLesson(topic).then(res => {
      setContent(res.data.result);
    });
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>{content}</Text>

      <Button
        title="Take Quiz"
        onPress={() => navigation.navigate("Quiz", { topic })}
      />
    </ScrollView>
  );
}
