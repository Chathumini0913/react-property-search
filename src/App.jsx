import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() { 
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

