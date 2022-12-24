import "./App.css";
import Footer from "./components/Footer";
import ForeMidContent from "./components/ForeMidContent";
import Header from "./components/Header";
import LoginInPage from "./components/LoginInPage";
import MidContent from "./components/MidContent";
import Segments from "./components/Segments";

function App() {
  return (
    <>
      <Header />
      <MidContent />
      <ForeMidContent />
      <Segments />
      <LoginInPage />
      <Footer />
    </>
  );
}

export default App;
