import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navbar() {
  let user = Cookies.get('username');
  const Logout = () => {
    Cookies.remove('username');
    Cookies.remove('isLoggedIn');
    window.location.reload();
  };

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      {user ? (
        <div style={{ color: "white", marginLeft: "1650px", position: "absolute" }}>
          Username: {user}
          <Button style={{ marginLeft: "10px" }} variant="danger" onClick={Logout}>
            Logout
          </Button>
        </div>
      ) : null}
      <div>
        <a className="navbar-brand text-white" style={{ marginLeft: "20px" }}>
          WHATCOURSE?
        </a>
        <a className="navbar-brand text-danger" style={{ marginLeft: "50px" }} href="/">
          คอร์ส ม.ต้น
        </a>
        <a className="navbar-brand text-primary" style={{ marginLeft: "50px" }} href="/HighSchool">
          คอร์ส ม.ปลาย
        </a>
        <a className="navbar-brand text-warning" style={{ marginLeft: "50px" }} href="/Booking">
          คอร์สที่จอง
        </a>
      </div>
      <div style={{ marginRight: "50px" }}>
        {!user && (
          <Button variant="secondary" size="sm" active>
            <Link to={`/Login`} style={{ color: 'black', textDecoration: 'none' }}>
              Login
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
