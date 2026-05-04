import axios from "axios";

const API = "http://localhost:5000";

export const fetchLesson = (topic) =>
  axios.post(`${API}/teach`, { topic });

export const fetchQuiz = (topic) =>
  axios.post(`${API}/quiz`, { topic });
