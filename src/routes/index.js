import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../modules/Home"
import Create from "../modules/Create"
import Event from "../modules/Event"

const Navigation = () => {
  return (
    <Router>
        <Routes>
          <Route path="/event" element={<Event />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Navigation