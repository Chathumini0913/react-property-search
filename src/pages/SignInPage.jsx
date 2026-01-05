import { useState } from "react";
import { useNavigate } from "react-router-dom";

// SignInPage allows users to enter email and proceed to create or access an account
function SignInPage() {
    const [email, setEmail] = useState(""); // State to store input email
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email entered:", email); // Placeholder: Replace with actual sign-in logic
    };

    return (
        <div className="signin-page">
            <div className="container">

                {/* Back to Home button */}
                <button 
                    className="back-home-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>

                {/* Sign-in form */}
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
