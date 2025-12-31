import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
  );
}

export default App;

/*function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>App is working</h1>
      <p>If you see this, React is rendering correctly.</p>
    </div>
  );
}

export default App;*/
