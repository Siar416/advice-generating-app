import { useState, useEffect } from "react";
import axios from "axios";
import dividerImg from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";

function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response);
      setAdvice(response.data.slip);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    const fetchData = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response);
      setAdvice(response.data.slip);
    };
    fetchData();
  };

  if (!advice) {
    return <h1>Loading advice...</h1>;
  }

  return (
    <div className="container">
      <h3 className="advice_heading">ADVICE # {advice.id}</h3>
      <p className="advice">"{advice.advice}"</p>

      <div className="bottom">
        <div className="divider">
          <img src={dividerImg} alt="divider line" />
        </div>
        <img onClick={handleClick} className="dice" src={dice} alt="advice" />
      </div>
    </div>
  );
}

export default Advice;
