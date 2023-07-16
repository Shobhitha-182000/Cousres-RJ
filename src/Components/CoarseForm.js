import "./CoarseForm.css";
import React, { useState } from "react";
const CoarseForm = (props) => {
  const [enterCoarse, setCoarse] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const CourseNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    setCoarse(event.target.value);
  };
  const addCoarse = (event) => {
    event.preventDefault();
    const coarseName = enterCoarse;
    if (enterCoarse.trim().length === 0) {
      return;
    }
    props.onSaveCoarse(coarseName);
  };
  return (
    <div className="div-layout">
      <form className="form-layout" onSubmit={addCoarse}>
        <div>
          <input
            className={`form-input ${!isEmpty ? " isValid" : ""}`}
            // style={{
            //   borderColor: !isEmpty ? "white" : "black",
            //   background: !isEmpty ? "transparent": "white",
            // }}
            type="text"
            onChange={CourseNameHandler}
          ></input>
        </div>
        <br></br>
        <button type="Submit" className="button-color">
          <b> Add Goal</b>
        </button>
      </form>
    </div>
  );
};
export default CoarseForm;
