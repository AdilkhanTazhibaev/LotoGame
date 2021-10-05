import Hoc from "./components/Hoc";
import WelcomeGame from "./components/WelcomeGame";
import { Route } from "react-router-dom";
import PlayGame from "./components/PlayGame/PlayGame";
import Winner from "./components/Winner/Winner";

function App() {
  return (
    <div className="App">
      <Hoc>
        <Route exact path="/">
          <WelcomeGame />
        </Route>
        <Route exact path="/gameRoom">
          <PlayGame />
        </Route>
        <Route exact path="/result">
          <Winner />
        </Route>
      </Hoc>
    </div>
  );
}

export default App;
