import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles.css";
import UserList from "./user-list/UserList";

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <UserList />
            </main>
            <Footer />
        </>
    )
}

export default App
