import { useState } from "react";
import {
  Col,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
import quizQuestions from "./questions";

const Questionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [showResultBtn, setshowResultBtn] = useState(false);
  const [skinType, setSkinType] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleOptionSelect = (chosenAnswer) => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption([...selectedOption, chosenAnswer]);
    } else {
      if (showResultBtn === false) {
        setSelectedOption([...selectedOption, chosenAnswer]);
        setshowResultBtn(true);
      }
    }
  };

  const findSkinType = () => {
    let result = modeArray(selectedOption);
    var skinTypeTemp = "";
    if (result.length > 1) {
      skinTypeTemp = "combination";
    } else {
      skinTypeTemp = result[0];
    }
    setSkinType(skinTypeTemp);
    toggle();
  };

  const modeArray = (array) => {
    if (array.length === 0) return null;
    var modeMap = {},
      maxCount = 1,
      modes = [];

    for (var i = 0; i < array.length; i++) {
      var el = array[i];

      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;

      if (modeMap[el] > maxCount) {
        modes = [el];
        maxCount = modeMap[el];
      } else if (modeMap[el] === maxCount) {
        modes.push(el);
        maxCount = modeMap[el];
      }
    }
    return modes;
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedOption([]);
    setSkinType("");
    setshowResultBtn(false);
  };

  return (
    <div className="question-container">
      <div className="quiz-container">
        <div>
          <h4 className="text-bold">{quizQuestions[currentIndex].question}</h4>
          <Row>
            <Col sm="6">
              <div
                className="option-container"
                onClick={() =>
                  handleOptionSelect(
                    quizQuestions[currentIndex].answers[0].type
                  )
                }
              >
                {quizQuestions[currentIndex].answers[0].content}
              </div>
            </Col>
            <Col sm="6">
              <div
                className="option-container"
                onClick={() =>
                  handleOptionSelect(
                    quizQuestions[currentIndex].answers[1].type
                  )
                }
              >
                {quizQuestions[currentIndex].answers[1].content}
              </div>
            </Col>
            <Col sm="6">
              <div
                className="option-container"
                onClick={() =>
                  handleOptionSelect(
                    quizQuestions[currentIndex].answers[2].type
                  )
                }
              >
                {quizQuestions[currentIndex].answers[2].content}
              </div>
            </Col>
            <Col sm="6">
              <div
                className="option-container"
                onClick={() =>
                  handleOptionSelect(
                    quizQuestions[currentIndex].answers[3].type
                  )
                }
              >
                {quizQuestions[currentIndex].answers[3].content}
              </div>
            </Col>
          </Row>
          {showResultBtn && (
            <div className="result-cta">
              <button onClick={findSkinType} className="result-btn">
                Show result
              </button>
              <button onClick={restart} className="result-btn">
                Restart
              </button>
            </div>
          )}
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Skin Type Result</ModalHeader>
            <ModalBody>
              <h3>
                Your skin type is <span className="use-font">"{skinType}"</span>
              </h3>
            </ModalBody>
            <ModalFooter>
              <a
                href={`https://www.google.com/search?q=products+for+${skinType}+skin`}
                className="result-btn"
                target="_blank"
                rel="noreferrer"
              >
                Find product for your skin type
              </a>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
