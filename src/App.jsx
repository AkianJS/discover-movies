import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MoviesGrid from "./components/MoviesGrid";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<MoviesGrid/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
