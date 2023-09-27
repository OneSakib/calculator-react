import "./App.css";
import { useState } from "react";
function App() {
  const [screen, setScreen] = useState("");
  const reset = () => {
    setScreen("");
  };
  const handleClick = (e) => {
    const value = e.target.value;
    if (value == "=") {
      try {
        setScreen(eval(screen).toString());
      } catch (e) {
        setScreen("Error");
      }
    } else if (value == "all-clear") {
      reset();
    } else {
      setScreen(screen.concat(value));
    }
  };
  return (
    <div className="container">
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={screen}
          disabled
        />

        <div className="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={handleClick}
          >
            &times;
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={handleClick}
          >
            &divide;
          </button>

          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            9
          </button>

          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            6
          </button>

          <button
            type="button"
            value="1"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            3
          </button>

          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            onClick={handleClick}
          >
            0
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            value="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={handleClick}
          >
            AC
          </button>

          <button
            type="button"
            className="equal-sign operator btn btn-default"
            value="="
            onClick={handleClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
