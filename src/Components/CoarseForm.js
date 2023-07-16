import "./CoarseForm.css";
import React,{useState} from "react";
const CoarseForm = (props) => {
    const [enterCoarse,setCoarse]=useState('');
    const CourseNameHandler=(event)=>{
        setCoarse(event.target.value)
    }
    const addCoarse=(event)=>{
        event.preventDefault();
        console.log(enterCoarse);
        const coarseName=enterCoarse;
        props.onSaveCoarse(coarseName);
    }
  return (
    <form className="form-layout" onSubmit={addCoarse}>
      <div>
        <input type="text" className="form-input" value={enterCoarse} onChange={CourseNameHandler}></input>
      </div>
      <br></br>

      <button type="Submit" className="button-color" >
       <b> Add Goal</b>
      </button>
    </form>
  );
};
export default CoarseForm;
