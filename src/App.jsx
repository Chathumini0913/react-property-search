import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignInPage";


function App() { 
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

