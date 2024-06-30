import "./App.css";

//Lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./Lessons/Lesson03/Lesson03";

//Homeworks
import Homework02 from "../homeworks/Homework02/Homework02";

function App() {
  return (
    <div className="App">
      {/* <Lesson02 /> */}
       <Homework02 />
      <Lesson03 />
    </div>
  );
}

export default App;
