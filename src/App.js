import logo from "./logo.svg";
import Card from "./components/Cards";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Mainbody from "./components/Mainbody";
function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Mainbody />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
