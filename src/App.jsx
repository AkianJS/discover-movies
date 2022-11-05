import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
