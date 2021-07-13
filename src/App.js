import './App.css';
import Footer from './Components/Footer';
import HighScores from './Components/HighScores';
import NavBar from './Components/NavBar';
import { Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className="body">
      <Route exact path="/">
        Chick'n'er
      </Route>
      <Route exact path="/scores">
        <HighScores />
      </Route>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
