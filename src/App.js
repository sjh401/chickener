import './App.css';
import Footer from './Components/Footer';
import HighScores from './Components/Scores/HighScores';
import NavBar from './Components/NavBar';
import { Route } from "react-router-dom"
import Instructions from './Components/Instructions';
import Counter from './Components/Counter';
import Timer from './Components/Timer';
import GameGrid from './Components/GameGrid';
// import Chicken from './Components/Chicken/Chicken';
// import Vehicle from './Components/Vehicle/Vehicle';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/scores">
        <HighScores />
      </Route>
      <Route exact path="/instructions">
        <Instructions />
      </Route>
    <div className="body">
      <Route exact path="/">
        <h1 className="title">Chik'n'er</h1>
        <Counter />
      <Timer />
      <GameGrid />
      </Route>
    </div>
    <Footer/>
    </div>
  );
}

export default App;


// RESOURCES USED
// reactjs.org
  // useRef hook
// developer.mozilla.org
  // Coordinate_systems, Using_CSS_Animations
// w3schools.com/
  // grid positioning, css styling