import React from "react";

export const QuizContext = React.createContext({
    openQuiz: () => {},
  }),
  QuizProvider = ({ children: e }) => (
    <QuizContext.Provider
      value={{
        openQuiz: () => {
          window.location.href = "/quiz-intro";
        },
      }}
    >
      {e}
    </QuizContext.Provider>
  );

export default QuizContext;
