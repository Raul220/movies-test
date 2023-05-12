import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import PageNotFound from "./pages/NotFound/PageNotFound";
import RatedMovies from "./pages/Rated/RatedMovies";
import { Space } from "antd";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/rated" element={<RatedMovies />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
