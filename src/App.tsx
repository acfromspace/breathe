import "./style/App.css";

import Header from "./components/Header";
import Players from "./components/Players";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Main">
      <Header />
      <Players />
      <Footer />
    </div>
  );
}

export default App;
