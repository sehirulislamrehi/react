
import logo from './logo.svg'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from './Components/Create'
import BlogDetails from './Components/BlogDetails'

function App() {

  return (
    <Router>
    <div className="App">

      {/* navbar */}
      <Navbar></Navbar>

      <div className="content">
        <Switch>
          <Route exact  path="/" >npm json
            <Home></Home>
          </Route>
          <Route path="/create" >
            <Create></Create>
          </Route>
          <Route path="/blogs/:id" >
            <BlogDetails></BlogDetails>
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