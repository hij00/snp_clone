import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Notice } from "./pages/community/Notice";
import { Home } from "./pages/main/Home";
import { ShopMain } from "./pages/shop/ShopMain";
import { NotFound } from "./components/NotFound";
import { GlobalStyled } from "./styles/globalStyled";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ShopMain />}></Route>
          <Route path="/community" element={<Notice />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
