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

  const heading = "Who Said This ????";

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
        ),
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

/*
 **  Organization: Samta Info Tech Pvt Ltd
 **
 **  File Name: App.tsx
 **
 **  Description: Check If Audit Gets Added Or Not
 **
 **  Author: Burhanuddin
 **  Creation Date: 2025-05-24
 **
 **  © COPYRIGHT 2025
 **  Permission is hereby granted, free of charge, to any person obtaining a copy of
 **  this software and associated documentation files (the “Software”), to deal in
 **  the Software without restriction, including without limitation the rights to
 **  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 **  the Software, and to permit persons to whom the Software is furnished to do so,
 **  subject to the following conditions: The above copyright notice and this
 **  permission notice shall be included in all copies or substantial portions of the
 **  Software.THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
 **  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 **  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 **  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 **  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 **  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 **  SOFTWARE.
 **
 **  Audit Logs (Change History):
 **
 **  -------------|----------|----------------------------------------------------
 **  2025-05-24  |  Burhanuddin  |  Check If Audit Gets Added Or Not
 **  -------------|----------|----------------------------------------------------
 **  2025-05-24  |  Burhanuddin  |  Hello World Is being Added
 **  -------------|----------|----------------------------------------------------
 **  2025-05-24  |  Burhanuddin  |  This Is The Audit Related Changes
 **  -------------|----------|----------------------------------------------------
 **  2025-05-27  |  Burhanuddin  |  TestAudit
 **  -------------|----------|----------------------------------------------------
 */
