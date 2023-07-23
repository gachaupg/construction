import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
function Questions() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  const handleQuestion1Click = () => {
    setShowAnswer1(!showAnswer1);
    setShowAnswer2(false);
    setShowAnswer3(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };

  const handleQuestion2Click = () => {
    setShowAnswer2(!showAnswer2);
    setShowAnswer1(false);
    setShowAnswer3(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };

  const handleQuestion3Click = () => {
    setShowAnswer3(!showAnswer3);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };
  const handleQuestion4Click = () => {
    setShowAnswer4(!showAnswer4);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer3(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };
  const handleQuestion5Click = () => {
    setShowAnswer5(!showAnswer5);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer3(false);
    setShowAnswer6(false);
  };
  const handleQuestion6Click = () => {
    setShowAnswer6(!showAnswer3);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer3(false);
  };

  return (
    <div className="u">
      <h1 className="quiz-header">Common Questions Edyche Builders Ltd</h1>
      <div className="main-Questions">
        <div className="questions">
          <div className="quiz-content">
            <div className="question-title">
              <p>Who are we ?</p>
              <h2 onClick={handleQuestion1Click}>
                {showAnswer1 ? <AiOutlineMinus /> : <AiOutlinePlus size={25} />}
              </h2>
            </div>
            <p className="answer">
              {showAnswer1 && (
                <p>A building and construction company in nairobi. </p>
              )}
            </p>
          </div>
          <hr />

          <div className="quiz-content">
            <div className="question-title">
              <p>How do I get started ?</p>
              <h2 onClick={handleQuestion2Click}>
                {showAnswer2 ? <AiOutlineMinus /> : <AiOutlinePlus size={25} />}
              </h2>
            </div>
            <p className="answer">
              {showAnswer2 && (
                <p>
                  Just simply contact us in all our contact channels.
                </p>
              )}
            </p>
          </div>
          <hr />
          <div className="quiz-content">
            <div className="question-title">
              <p>How much does is cost to build a house ?</p>
              <h2 onClick={handleQuestion3Click}>
                {showAnswer3 ? <AiOutlineMinus /> : <AiOutlinePlus size={25} />}
              </h2>
            </div>
            <p className="answer">
              {showAnswer3 && (
                <p>We build houses from 1 million ksh.</p>
              )}
            </p>
          </div>
          <hr />
          <div className="quiz-content">
            <div className="question-title">
              <p>Do I need any special documentation ?</p>
              <h2 onClick={handleQuestion4Click}>
                {showAnswer4 ? <AiOutlineMinus /> : <AiOutlinePlus size={25} />}
              </h2>
            </div>
            <p className="answer">
              {showAnswer4 && <p>Nope, just contact us!</p>}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Questions;
