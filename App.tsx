import { useState } from "react";

function CalculatorButton({
  children,
  theme,
  displayText,
  setDisplayText,
}: {
  children: string;
  theme: number;
  displayText: string;
  setDisplayText: (displayText: string) => void;
}) {
  const buttonPrimaryColor =
    theme == 1 ? "#eae3db" : theme == 2 ? "#e5e4e0" : "#331b4d";
  const buttonSecondaryColor =
    theme == 1 ? "#647198" : theme == 2 ? "#388187" : "#56077c";
  const buttonTertiaryColor =
    theme == 1 ? "#d13f30" : theme == 2 ? "#c85401" : "#00decf";

  const buttonPrimaryTextColor =
    theme == 1 ? "#434c59" : theme == 2 ? "#37372d" : "#ffe93a";
  const buttonSecondaryTextColor =
    theme == 1 ? "#fffcf3" : theme == 2 ? "#fbffff" : "#fffcff";
  const buttonTertiaryTextColor =
    theme == 1 ? "#fffcf3" : theme == 2 ? "#feffff" : "#1d2027";
  if (["DEL", "RESET", "="].includes(children)) {
    return (
      <button
        style={{
          backgroundColor: `${
            ["RESET", "DEL"].includes(children)
              ? buttonSecondaryColor
              : buttonTertiaryColor
          }`,
          color: `${
            ["RESET", "DEL"].includes(children)
              ? buttonSecondaryTextColor
              : buttonTertiaryTextColor
          }`,
        }}
        className={`btn px-4 fw-bold mx-2 ${
          ["RESET", "="].includes(children) ? "w-50" : "w-25"
        }`}
        onClick={() => {
          if (children == "=") {
            setDisplayText(
              eval(
                displayText
                  .split("")
                  .map((char: string) => {
                    if (char == "×") {
                      return "*";
                    } else if (char == "÷") {
                      return "/";
                    }
                    return char;
                  })
                  .join("")
              )
            );
          } else if (children == "DEL") {
            setDisplayText(displayText.slice(0, -1) || "0");
          } else if (children == "RESET") {
            setDisplayText("0");
          }
        }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="btn px-4 w-25 mx-2 fw-bold"
        style={{
          backgroundColor: buttonPrimaryColor,
          color: buttonPrimaryTextColor,
        }}
        onClick={() => {
          if (displayText == "0") {
            setDisplayText(children);
          } else setDisplayText(displayText + children);
        }}
      >
        {children}
      </button>
    );
  }
}

function CalculatorContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container d-flex p-2 justify-content-around">
      {children}
    </div>
  );
}

function App() {
  const isMobile = window.matchMedia("(orientation: portrait)").matches;

  const [displayText, setDisplayText] = useState("0");
  const [theme, setTheme] = useState(1);
  const backgroundColor =
    theme == 1 ? "#3b4664" : theme == 2 ? "#e6e6e6" : "#17062a";
  const themeSelectedColor =
    theme == 1 ? "#cb4035" : theme == 2 ? "#c75202" : "#09ddd6";
  const buttonContainerColor =
    theme == 1 ? "#252d44" : theme == 2 ? "#d3cdcd" : "#1e0836";
  const headerColor =
    theme == 1 ? "#181f32" : theme == 2 ? "#eeeeee" : "#1e0836";
  const headerTextColor =
    theme == 1 ? "#fffcf3" : theme == 2 ? "#31322d" : "#fee33c";

  return (
    <div
      className="w-100 h-100 p-0 m-0 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`container ${
          isMobile ? "w-100" : "w-25"
        } d-flex flex-column align-items-center`}
      >
        <div className="container d-flex flex row justify-content-between w-100 mb-2 p-0">
          {/* Calculator Top Menu */}
          <h2 style={{ width: "fit-content", color: headerTextColor }}>calc</h2>
          <div
            style={{ width: "fit-content" }}
            className="container d-flex flex-row align-items-center  m-0 p-0"
          >
            <small style={{ color: headerTextColor }}>THEME</small>
            <div className="container" style={{ width: "fit-content" }}>
              {[1, 2, 3].map((themeNumber) => (
                <button
                  className="btn border-0 mx-1"
                  style={{
                    backgroundColor: `${
                      theme == themeNumber
                        ? themeSelectedColor
                        : buttonContainerColor
                    }`,
                    color: headerTextColor,
                  }}
                  onClick={() => setTheme(themeNumber)}
                >
                  {themeNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className="container px-4 py-3 my-2 rounded"
          style={{ backgroundColor: headerColor }}
        >
          {/* Calculator Head */}
          <h2 className="text-end fw-bold" style={{ color: headerTextColor }}>
            {displayText}
          </h2>
        </div>
        <div
          className="container py-4 rounded mt-2"
          style={{ backgroundColor: buttonContainerColor }}
        >
          {/* Calculator Body */}
          <CalculatorContainer>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              7
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              8
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              9
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              DEL
            </CalculatorButton>
          </CalculatorContainer>
          <CalculatorContainer>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              4
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              5
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              6
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              +
            </CalculatorButton>
          </CalculatorContainer>
          <CalculatorContainer>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              1
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              2
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              3
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              -
            </CalculatorButton>
          </CalculatorContainer>
          <CalculatorContainer>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              .
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              0
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              ÷
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              ×
            </CalculatorButton>
          </CalculatorContainer>
          <CalculatorContainer>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              RESET
            </CalculatorButton>
            <CalculatorButton
              theme={theme}
              displayText={displayText}
              setDisplayText={setDisplayText}
            >
              =
            </CalculatorButton>
          </CalculatorContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
