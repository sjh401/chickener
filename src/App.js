import './App.css';
import Footer from './Components/Footer';
import HighScores from './Components/Scores/HighScores';
import NavBar from './Components/NavBar';
import { Route } from "react-router-dom"
import Instructions from './Components/Instructions';
import GameGrid from './Components/GameGrid';



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
      <Route exact path="/">
      <GameGrid />
      </Route>
    <Footer/>
    </div>
  );
}

export default App;


// idea came from: https://www.youtube.com/watch?v=FQW1g-4dZ7k

// RESOURCES USED
// reactjs.org
  // useRef hook
// developer.mozilla.org
  // Coordinate_systems, Using_CSS_Animations
// w3schools.com/
  // grid positioning, css styling