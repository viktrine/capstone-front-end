import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Home />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;