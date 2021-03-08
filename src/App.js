import "./App.css";
import MenuScreen from "./components/MenuScreen";

function App() {
  // 0 -> Repetition, 1 -> Duration
  let exercises = [
    {
      id: 0,
      name: "Push Ups",
      type: 0,
    },
    {
      id: 1,
      name: "Sit Ups",
      type: 0,
    },
    {
      id: 2,
      name: "Jumping Jacks",
      type: 0,
    },
    {
      id: 3,
      name: "Running",
      type: 1,
    },
    {
      id: 4,
      name: "Elliptical",
      type: 1,
    },
    {
      id: 5,
      name: "Walking",
      type: 1,
    },
  ];

  return (
    <div className="menu-screen-container">
      <MenuScreen name="Exercises" contents={exercises} />
    </div>
  );
}

export default App;
