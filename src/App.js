import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Todo from "./todo";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;