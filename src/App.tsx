import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./routes/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
