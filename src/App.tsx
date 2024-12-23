import { useState } from "react";
import Layout from "./components/page-container";
import QuizPage from "./pages/view";
import { quiz } from "./static";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <Layout>
        <QuizPage />
      </Layout>
    </>
  );
}

export default App;
