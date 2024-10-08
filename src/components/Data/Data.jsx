import React, { useState } from "react";
import "./Data.css";

const Data = () => {
  const [currentCGPA, setCurrentCGPA] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [targetCGPA, setTargetCGPA] = useState("");
  const [targetSGPA, setTargetSGPA] = useState("");
  const [targetType, setTargetType] = useState("Target CGPA");
  const [requiredSGPA, setRequiredSGPA] = useState(null);
  const [finalCGPA, setFinalCGPA] = useState(null);

  const handleButtonClick1 = () => {
    setFinalCGPA(null);
    setTargetType("Target CGPA");
  };

  const handleButtonClick2 = () => {
    setRequiredSGPA(null);
    setTargetType("Target SGPA");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  function calculateCGPA(cummulativeIndex, index) {
    let cummulativeCreditIndex = currentCGPA * cummulativeIndex;
    cummulativeIndex += index;
    let creditIndex = targetSGPA * index;
    let newCommulativeCreditIndex = cummulativeCreditIndex + creditIndex;
    return (newCommulativeCreditIndex / cummulativeIndex).toFixed(2);
  }

  const calculateFinalCGPANew = () => {
    switch (selectedSemester) {
      case "semester1":
        setFinalCGPA(calculateCGPA(21, 20));
        break;
      case "semester2":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(41, 22));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(41, 23));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(41, 21));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(41, 23));
        }
        break;
      case "semester3":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(63, 23));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(64, 21));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(62, 23));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(64, 22));
        }
        break;
      case "semester4":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(86, 22));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(85, 22));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(85, 22));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(86, 22));
        }
        break;
      case "semester5":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(108, 24));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(107, 24));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(107, 23));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(108, 23));
        }
        break;
      case "semester6":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(132, 15));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(131, 15));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(130, 15));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(131, 15));
        }
        break;
      case "semester7":
        if (selectedBranch === "cse") {
          setFinalCGPA(calculateCGPA(147, 15));
        } else if (selectedBranch === "it") {
          setFinalCGPA(calculateCGPA(146, 15));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(145, 15));
        } else if (selectedBranch === "csce") {
          setFinalCGPA(calculateCGPA(146, 15));
        }
        break;
      default:
      // code block
    }
  };

  const calculateFinalCGPAOld = () => {
    switch (selectedSemester) {
      case "semester1":
        setFinalCGPA(calculateCGPA(20, 21));
        break;
      case "semester2":
        setFinalCGPA(calculateCGPA(41, 21.5));
        break;
      case "semester3":
        setFinalCGPA(calculateCGPA(62.5, 23.5));
        break;
      case "semester4":
        setFinalCGPA(calculateCGPA(86, 22));
        break;
      case "semester5":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setFinalCGPA(calculateCGPA(109, 23));
        } else {
          setFinalCGPA(calculateCGPA(110, 23));
        }
        break;
      case "semester6":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setFinalCGPA(calculateCGPA(132, 13));
        } else {
          setFinalCGPA(calculateCGPA(133, 13));
        }
        break;
      case "semester7":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setFinalCGPA(calculateCGPA(142, 10));
        } else {
          setFinalCGPA(calculateCGPA(143, 10));
        }
        break;
      default:
      // code block
    }
  };

  function calculateSGPA(cummulativeIndex, index) {
    let cummulativeCreditIndex = currentCGPA * cummulativeIndex;
    cummulativeIndex += index;
    let newCreditIndex = targetCGPA * cummulativeIndex - cummulativeCreditIndex;
    return (newCreditIndex / index).toFixed(2);
  }
  const calculateRequiredSGPANew = () => {
    switch (selectedSemester) {
      case "semester1":
        setRequiredSGPA(calculateSGPA(20, 21));
        break;
      case "semester2":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(41, 22));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(41, 23));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(41, 21));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(41, 23));
        }
        break;
      case "semester3":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(63, 23));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(64, 21));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(62, 23));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(64, 22));
        }
        break;
      case "semester4":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(86, 22));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(85, 22));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(85, 22));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(86, 22));
        }
        break;
      case "semester5":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(108, 24));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(107, 24));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(107, 23));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(108, 23));
        }
        break;
      case "semester6":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(132, 15));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(131, 15));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(130, 15));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(131, 15));
        }
        break;
      case "semester7":
        if (selectedBranch === "cse") {
          setRequiredSGPA(calculateSGPA(147, 15));
        } else if (selectedBranch === "it") {
          setRequiredSGPA(calculateSGPA(146, 15));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(145, 15));
        } else if (selectedBranch === "csce") {
          setRequiredSGPA(calculateSGPA(146, 15));
        }
        break;
      default:
      // code block
    }
  };

  const calculateRequiredSGPAOld = () => {
    switch (selectedSemester) {
      case "semester1":
        setRequiredSGPA(calculateSGPA(20, 21));
        break;
      case "semester2":
        setRequiredSGPA(calculateSGPA(41, 23));
        break;
      case "semester3":
        setRequiredSGPA(calculateSGPA(62.5, 23.5));
        break;
      case "semester4":
        setRequiredSGPA(calculateSGPA(86, 22));
        break;
      case "semester5":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setRequiredSGPA(calculateSGPA(109, 23));
        } else {
          setRequiredSGPA(calculateSGPA(110, 23));
        }
        break;
      case "semester6":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setRequiredSGPA(calculateSGPA(132, 13));
        } else {
          setRequiredSGPA(calculateSGPA(133, 13));
        }
        break;
      case "semester7":
        if (
          selectedBranch === "csce" ||
          selectedBranch === "it" ||
          selectedBranch === "csse"
        ) {
          setRequiredSGPA(calculateSGPA(142, 10));
        } else {
          setRequiredSGPA(calculateSGPA(143, 10));
        }
        break;
      default:
      // code block
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (targetType === "Target CGPA") {
      if (selectedYear === "2025") calculateRequiredSGPAOld();
      else if (selectedYear === "2026" || selectedYear === "2027")
        calculateRequiredSGPANew();
    } else if (targetType === "Target SGPA") {
      if (selectedYear === "2025") calculateFinalCGPAOld();
      else if (selectedYear === "2026" || selectedYear === "2027")
        calculateFinalCGPANew();
    }
  };

  return (
    <>
      <div className="main-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="current-cgpa">Enter Current CGPA:</label>
            <input
              type="number"
              className="form-control"
              id="current-cgpa"
              value={currentCGPA}
              onChange={(e) => setCurrentCGPA(e.target.value)}
              required
              min="0"
              max="10"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label htmlFor="semester">Select Passing Year:</label>
            <select
              className="form-control"
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              required
            >
              <option value="">Select Year</option> {/* Blank option */}
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              {/* Add more options for each semester */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="semester">Select Current Semester:</label>
            <select
              className="form-control"
              id="semester"
              value={selectedSemester}
              onChange={handleSemesterChange}
              required
            >
              <option value="">Select Semester</option> {/* Blank option */}
              <option value="semester1">Semester 2</option>
              <option value="semester2">Semester 3</option>
              <option value="semester3">Semester 4</option>
              <option value="semester4">Semester 5</option>
              <option value="semester5">Semester 6</option>
              <option value="semester6">Semester 7</option>
              <option value="semester7">Semester 8</option>
              {/* Add more options for each semester */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="branch">Select Branch:</label>
            <select
              className="form-control"
              id="branch"
              value={selectedBranch}
              onChange={handleBranchChange}
              required
            >
              <option value="">Select Branch</option> {/* Blank option */}
              <option value="cse">CSE</option>
              <option value="it">IT</option>
              <option value="csse">CSSE</option>
              <option value="csce">CSCE</option>
              {/* Add more options for each semester */}
            </select>
          </div>

          <div className="option-button">
            <button
              type="button"
              className={`btn btn-secondary small-button responsive-button ${
                targetType === "Target CGPA" ? "highlighted-button" : ""
              }`}
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={handleButtonClick1}
            >
              Calculate SGPA Required
            </button>
            <button
              type="button"
              className={`btn btn-secondary small-button button2 responsive-button ${
                targetType === "Target SGPA" ? "highlighted-button" : ""
              }`}
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={handleButtonClick2}
            >
              Calculate Final CGPA
            </button>
          </div>
          <div className="form-group">
            {targetType === "Target CGPA" && (
              <div className="form-group">
                <label htmlFor="targetCGPA">
                  Enter Target CGPA you want after this Semester:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="targetCGPA"
                  value={targetCGPA}
                  onChange={(e) => setTargetCGPA(parseFloat(e.target.value))}
                  required
                  min="0"
                  max="10"
                  step="0.01"
                />
              </div>
            )}
            {targetType === "Target SGPA" && (
              <div className="form-group">
                <label htmlFor="targetSGPA">
                  Enter Target SGPA you can get this Semester:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="targetSGPA"
                  value={targetSGPA}
                  onChange={(e) => setTargetSGPA(parseFloat(e.target.value))}
                  required
                  min="0"
                  max="10"
                  step="0.01"
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Submit
          </button>

          {requiredSGPA !== null && (
            <div className="result-box">
              <p>
                {requiredSGPA > 10
                  ? "Not Possible"
                  : "Required SGPA for Current Semester : " + requiredSGPA}
              </p>
            </div>
          )}
          {finalCGPA !== null && (
            <div className="result-box">
              <p>
                {finalCGPA > 10
                  ? "Not Possible"
                  : "Final CGPA after Current Semester : " + finalCGPA}
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Data;
