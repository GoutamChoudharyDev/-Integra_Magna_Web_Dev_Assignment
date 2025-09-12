import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            {/* left part of navbar */}
            <div className="logo">
                <img src="star.png" alt="logo image" />
            </div>

            {/* hamburger icon (mobile only) */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* navigation */}
            <nav className={menuOpen ? "nav open" : "nav"}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Artist</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </nav>

            {/* buttons */}
            <button className="signup-btn">Sign up</button>
            <button className="login-btn">Log in</button>
        </header>
    );
};

export default Header;
