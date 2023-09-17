import "./App.css";
import Header from "./Header";
import NavBar from "./components/Navbar";
import MainBanner from "./MainBanner";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div>     
      <Header />
      <div className="nav-area">
        <NavBar />
      </div>
      <MainBanner />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
