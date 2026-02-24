import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CookiePolicy from "./components/CookiePolicy";
import CookieBanner from "./components/CookieBanner";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/polityka-cookies" element={<CookiePolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieBanner />
  </BrowserRouter>
);

export default App;
