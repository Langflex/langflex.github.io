import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
// import "./styles/Markdown.css";

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
