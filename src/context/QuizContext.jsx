import React from "react";
import { sitePath } from "../utils/sitePath";

export const QuizContext = React.createContext({
    openQuiz: () => {},
  }),
  QuizProvider = ({ children: e }) => (
    <QuizContext.Provider
      value={{
        openQuiz: () => {
          window.location.href = sitePath("/quiz-intro");
        },
      }}
    >
      {e}
    </QuizContext.Provider>
  );

export default QuizContext;
