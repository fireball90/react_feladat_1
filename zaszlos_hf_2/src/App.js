import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { ZaszloListPage } from "./ZaszloListPage";
import { ZaszloSinglePage } from "./ZaszloSinglePage";
import { ZaszloAddPage }  from "./ZaszloAddPage";
import { ZaszloDelPage }  from "./ZaszloDelPage";
import { ZaszloModPage } from "./ZaszloModPage";
import './App.css';

function App() {
  return (
   <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link">Zászlók</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/uj-zaszlo'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link"> Új zászló</span>
            </NavLink>
          </li>          
        </ul>
      </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<ZaszloListPage />} />
        <Route path="/zaszlo/:zaszloId" exact element={<ZaszloSinglePage />} />
        <Route path="/del-zaszlo/:zaszloId" exact element={<ZaszloDelPage />} />
        <Route path="/mod-zaszlo/:zaszloId" exact element={<ZaszloModPage />} />
        <Route path="/uj-zaszlo" exact element={<ZaszloAddPage />} />
      </Routes>
   </Router>
  );
}

export default App;