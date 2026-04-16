import "./Footer.css";
import { Globe, Share2, MessageCircle, Users } from "lucide-react";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <h2 className="logo">
                        FreshSpaces <span>🌿</span>
                    </h2>

                    <p className="description">
                        Building calm, modern digital spaces with thoughtful design and smooth experiences.
                    </p>

                    <div className="social-icons">
                        <div className="icon"><Globe size={18} /></div>
                        <div className="icon"><Share2 size={18} /></div>
                        <div className="icon"><MessageCircle size={18} /></div>
                        <div className="icon"><Users size={18} /></div>
                    </div>
                </div>

                {/* LINKS */}
                <div className="footer-links">
                    <div>
                        <h4>Product</h4>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Login</p>
                        <p>Signup</p>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Legal</p>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <p>Feedback</p>
                        <p>Help Center</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 FreshSpaces — Hamza Fareed</p>
            </div>
        </footer>
    );
}