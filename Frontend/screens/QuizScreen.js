import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { fetchQuiz } from "../services/api";

export default function QuizScreen({ route }) {
  const { topic } = route.params;
  const [quiz, setQuiz] = useState("");

  useEffect(() => {
    fetchQuiz(topic).then(res => {
      setQuiz(res.data.result);
    });
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>{quiz}</Text>
    </ScrollView>
  );
}
