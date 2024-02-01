import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDetail from "./pages/showdetail/ShowDetail";
import MyNavbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
    <div>
        <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows/:id" element={<ShowDetail/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
