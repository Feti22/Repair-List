import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookShelfPage from "./components/BookShelfPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<BookShelfPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
