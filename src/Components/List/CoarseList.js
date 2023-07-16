import Cart from '../../UI/Cart';
import './CoarseList.css';

const CoarseList=(props)=>{

    return (
        <div>
          <h1>Course List</h1>
          <ul>
            {props.item.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      );
         
        
 
}
export default CoarseList;