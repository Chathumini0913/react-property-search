import { useState } from "react";

/*function SignInPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email entered:", email);
    }

    return (
        <div className="container">
            <div className="signin-box">
                <h2>Sign in or create an account</h2>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />

                    <button type="submit" className="continue-btn">
                        continue 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;*/





function SignInPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email entered:", email);
    };

    return (
        <div className="signin-page">
            <div className="container">
                <div className="signin-box">
                    <h2>Sign in or create an account</h2>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />

                        <button type="submit" className="continue-btn">
                            continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
