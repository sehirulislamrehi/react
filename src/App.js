
import logo from './logo.svg'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from './Components/Create'

function App() {

  return (
    <Router>
    <div className="App">

      {/* navbar */}
      <Navbar></Navbar>

      <div className="content">
        <Switch>
          <Route exact  path="/" >
            <Home></Home>
          </Route>
          <Route path="/create" >
            <Create></Create>
          </Route>
        </Switch>
      </div>

    </div>

    </Router>
  );
}

export default App;


{/*
   npx json-server --watch data/db.json --port 8000  
  
  */}