import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles.css";
import UserSection from "./user-section/UserSection";

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <UserSection />
            </main>
            <Footer />
        </>
    )
}

export default App
