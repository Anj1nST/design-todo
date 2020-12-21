import React from "react";

interface IHomeProps {
  goToTodo: () => void;
}

export const Home = ({ goToTodo }: IHomeProps) => {
  return (
    <div className="Home">
      <div className="HomeCard">
        <div className="HomeCard_text">
          <p>Welcome to</p>
          <p>Anj1n's TodoList!</p>
        </div>
        <button className="HomeCard_continueButton" onClick={goToTodo}>
          Continue
        </button>
      </div>
    </div>
  );
};
