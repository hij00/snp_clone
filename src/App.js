import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Notice } from "./pages/community/Notice";
import { Home } from "./pages/main/home/Home";
import { ShopMain } from "./pages/shop/ShopMain";
import { NotFound } from "./components/NotFound";
import { GlobalStyled } from "./styles/globalStyled";
import { ShopBag } from "./pages/main/ShopBag";
import { Login } from "./pages/main/Login";
import { Event } from "./pages/community/Event";
import { ItemDetail } from "./pages/shop/ItemDetail";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shopping_bag" element={<ShopBag />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shop" element={<ShopMain />}></Route>
          <Route path="/item" element={<ItemDetail />}></Route>

          <Route path="/community_notice" element={<Notice />}></Route>
          <Route path="/community_event" element={<Event />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
