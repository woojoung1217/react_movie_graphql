/* eslint-disable */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Moives";
import Movie from "./routes/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
