import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Todo List</h1>
            
            <div className="links">
                <Link to="/" className="links">Home</Link>
                <Link to="/todo" className="links">Todo</Link>
                <Link to="/test" className="links">Test</Link>
            </div>

        </div>
      );
}
 
export default Navbar;