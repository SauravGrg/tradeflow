import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TradeControls from "./components/TradeControls";
import "./App.css";

function App() {
  return (
    <>
      <div className="gridContainer">
        <nav>
          <ul className="navBar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route />
          </Routes>
        </div>

        <div>
          <TradeControls />
        </div>
      </div>
    </>
  );
}

export default App;
