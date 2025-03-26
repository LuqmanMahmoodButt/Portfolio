import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/game.css"; // Import styles

const Game = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds timer
  const navigate = useNavigate();

  // Move square to a random position
  const moveSquare = () => {
    const randomTop = Math.random() * 80 + "%";
    const randomLeft = Math.random() * 80 + "%";
    setPosition({ top: randomTop, left: randomLeft });
  };

  // Handle square click
  const handleClick = () => {
    setScore(score + 1);
    moveSquare();
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => navigate("/projects"), 1000); // Redirect after 1 sec
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  return (
    <div className="game-container">
      <h2>Catch the Square!</h2>
      <p>Click the square as many times as possible before time runs out.</p>
      <h3>Time Left: {timeLeft}s</h3>
      <h3>Score: {score}</h3>

      {/* Game Board */}
      <div className="game-board">
        <div className="square" style={position} onClick={handleClick}></div>
      </div>
    </div>
  );
};


export default Game;