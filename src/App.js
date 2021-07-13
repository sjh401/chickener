import './App.css';
import Footer from './Components/Footer';
import HighScores from './Components/Scores/HighScores';
import NavBar from './Components/NavBar';
import { Route } from "react-router-dom"
import Instructions from './Components/Instructions';
import CoreysCounter from './Components/CoreysCounter';
import Timer from './Components/Timer';
import GameGrid from './Components/GameGrid';
import Chicken from './Components/Chicken/Chicken';
import Vehicle from './Components/Vehicle/Vehicle';


function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className="body">
      <Route exact path="/">
        Chik'n'er
        <CoreysCounter />
      <Timer />
      <GameGrid />
      <Chicken />
      <Vehicle />
      </Route>
      <Route exact path="/scores">
        <HighScores />
      </Route>
      <Route exact path="/instructions">
        <Instructions />
      </Route>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
