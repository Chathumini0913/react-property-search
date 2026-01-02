/*import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";

function HomePage() {
    const navigate = useNavigate();

    const handleSearch = (filters) => {
        const query = new URLSearchParams(filters).toString();
        navigate(`/search?${query}`);
    };

    return (
        <>
            <Hero />

            <div className="container">
                <div className="hero-content">
                    <h1>Find your perfect home</h1>
                    <p>Search properties for sale and rent across the UK</p>

                    <SearchForm on Search={handleSearch} />
                </div>
            </section>

            <section className="container">
                <p>
                    <strong>Sign in to streamline your search</strong><br/>
                    Save propertiies, create alerts and keep track of the enquiries you send to agents.
                </p>
            </section>
        </>
    );
}

export default HomePage; */


import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";

function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    const query = new URLSearchParams(filters).toString();
    navigate(`/search?${query}`);
  };

  return (
    <>
      <Hero />

      <div className="container">
        <div className="signal-box">
            <strong>Sign in to streamline your search</strong>
            <p>
                Save properties, create alerts and keep track of the enquiries you send to agents.
            </p>
            <a href="/signin" className="signin-link">
                Sign in or create an account
            </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
