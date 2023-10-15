import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraph, setParagraph] = useState(text);

  return (
    <div className="section-center">
      <form className="form">
        <h4 className="title">Tired of Boring old Lorem Ipsum</h4>
        <div className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input type="number" name="amount" id="amount" value={count} />
          <button type="submit" className="btn">
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};
export default App;
