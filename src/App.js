import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="navbar">
        <a href="#">Home</a>
        <a href="#">Parking</a>
        <a href="#">Reports</a>
        <a href="#">Contact</a>
        <b href="#">Account</b>
      </div>

      <div class="sidebar">
        <a href="#">Admit Guest</a>
        <a href="#">Guest Checkout</a>
        <a href="#">Events</a>
        <a href="#">Add new Event</a>
      </div>

      <div class="content">
        <h1>Safaricom Guest Portal</h1>
        <p>This is the main content of the landing page.</p>
      </div>

      <div class="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
