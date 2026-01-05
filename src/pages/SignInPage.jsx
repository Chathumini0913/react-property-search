import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email entered:", email);
    };

    return (
        <div className="signin-page">
            <div className="container">

                {/* Back to Home */}
                <button 
                    className="back-home-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>
                
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
