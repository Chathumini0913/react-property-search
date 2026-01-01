function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find your happy place</h1>
                <p>Search properties for sale and to rent in the UK</p>

                <div className="hero-search">
                    <input
                        type="text"
                        placeholder="Enter postcode, town or city"
                    />
                    <button>Search</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;