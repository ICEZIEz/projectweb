import { Route, Routes,} from "react-router-dom";
import Mainpage from "./Mainpage";
import HighSchool from "./HighSchool";
import Login from "./Login";
import Booking from "./Booking";

const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/HighSchool" element={<HighSchool/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Booking" element={<Booking/>} />
      </Routes>
  );
}
export default MyRoutes