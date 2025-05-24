import { useEffect, useState } from "react";
import "./App.css";
import { Data } from "./Data";

function App() {
  const [index, setIndex] = useState(0);
  const [showAns, setShowAns] = useState(false);
  const [counter, setCounter] = useState(45);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let timer: any;
    if (startTimer && counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [counter, startTimer]);

  const onShow = () => {
    setShowAns((prev) => !prev);
  };
  const onNext = () => {
    setCounter(45);
    setStartTimer(false);
    setIndex((prev) => prev + 1);
    setShowAns(false);
  };
  const onBack = () => {
    setCounter(45);
    setStartTimer(false);
    setShowAns(false);
    setIndex((prev) => {
      if (prev > 0 && prev - 1 !== 0) {
        return prev - 1;
      }
      return 0;
    });
  };

  const heading = "Who Said This ??";

  return (
    <div className="app">
      <h4 className="header">{heading.toUpperCase()}</h4>
      {Data.filter((e: any, i: number) => i === index).map(
        (f: any, c: number) => (
          <div key={c}>
            {startTimer && (
              <h4 style={{ margin: "45px", fontSize: "2rem" }}>{f.dailog}</h4>
            )}
            <div style={{ margin: "45px" }}>
              {showAns && (
                <>
                  <p>
                    Movie: {f.movie}&nbsp; &nbsp; &nbsp; Character:{" "}
                    {f.character}
                  </p>
                </>
              )}
            </div>
          </div>
        )
      )}

      <div className="btnContainer">
        <button className="btn" onClick={onBack}>
          Back
        </button>
        <button className="btnShow" onClick={onShow}>
          {showAns ? "Hide Ans" : "Show Ans"}
        </button>
        <button className="btnShow" onClick={() => setStartTimer(true)}>
          Start Timer
        </button>
        <button className="btn" onClick={onNext}>
          Next
        </button>
      </div>
      <h4 className="header">{String(counter).toUpperCase() + "secs"}</h4>
    </div>
  );
}

export default App;
