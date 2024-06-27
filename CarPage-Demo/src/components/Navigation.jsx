import '../styles/Navigation.css';

export default function Navigation() {
    return (
        <nav className="navigation_bar">
            <h1>CARMON</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">New Car</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}