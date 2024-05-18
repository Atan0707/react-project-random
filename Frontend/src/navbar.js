import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <h1>Todo List</h1> */}
            <Link to="/" className="home-button"><h1>Atan React Testing Website</h1> </Link>
            
            <div className="links">
                <Link to="/" className="links">Home</Link>
                <Link to="/todo" className="links">Todo</Link>
                <Link to="/todo2" className="links">Todo 2</Link>
                <Link to="/weather" className="links">Weather</Link>
                <Link to="/test-backend" className="links">Test Backend</Link>
            </div>

        </div>
      );
}
 
export default Navbar;