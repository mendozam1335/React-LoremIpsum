import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraph = text.slice(0, count);
    console.log(newParagraph);
    setParagraphs(newParagraph);
  };
  return (
    <div className="section-center">
      <form className="form" onSubmit={handleSubmit}>
        <h4 className="title">Tired of Boring old Lorem Ipsum</h4>
        <div className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            min={1}
            max={8}
            step={1}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </div>
        <div className="lorem-text">
          {paragraphs &&
            paragraphs.map((paragraph) => {
              return <p key={nanoid()}>{paragraph}</p>;
            })}
        </div>
      </form>
    </div>
  );
};
export default App;
