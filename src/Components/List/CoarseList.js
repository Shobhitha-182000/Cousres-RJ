import Cart from "../../UI/Cart";
import "./CoarseList.css";

const CoarseList = (props) => {
    const removeHandler=(index)=>{
        props.onDeleteCoarse(index);
        
    }
  return (
    <div className="div-layout-list">
      <h1 style={{ color: "black" }}>Course List</h1>
      <ul className="ul-list-layout">
        {props.item.map((course, index) => (
          <li className="list-layout" key={index}>
            {course}
            <button onClick={()=>removeHandler(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CoarseList;
