import React from "react";

export const Quiz: React.FC<{ questionTitle: string; answers: string[] }> = ({
  questionTitle,
  answers,
}) => {
  return (
    <div>
      <h3>{questionTitle}</h3>
      <ul>
        {answers.map((answer) => (
          <li>{answer.name}</li>
        ))}
      </ul>
    </div>
  );
};
