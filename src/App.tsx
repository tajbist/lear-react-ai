import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductPage1 from "./pages/ProductPage1";
import ShoppingCart from "./pages/ShoppingCart";
import PracticeDesigns from "./pages/PracticeDesigns";
import WhatsInThis from "./pages/WhatsInThis";
import AboutThisFile from "./pages/AboutThisFile";
import Thumbnail from "./pages/Thumbnail";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-page1":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart":
        title = "";
        metaDescription = "";
        break;
      case "/practice-designs":
        title = "";
        metaDescription = "";
        break;
      case "/whats-in-this":
        title = "";
        metaDescription = "";
        break;
      case "/about-this-file":
        title = "";
        metaDescription = "";
        break;
      case "/thumbnail":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/product-page1" element={<ProductPage1 />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/practice-designs" element={<PracticeDesigns />} />
      <Route path="/whats-in-this" element={<WhatsInThis />} />
      <Route path="/about-this-file" element={<AboutThisFile />} />
      <Route path="/thumbnail" element={<Thumbnail />} />
    </Routes>
  );
}
export default App;
