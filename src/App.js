import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div className="app">
      <Router>
        <Topbar/>
        <div className="container-main">
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='users' element={<UserList/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
