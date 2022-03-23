import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../src/components/Navbar";
import { Home } from "../src/components/Home";
import { About } from "../src/components/About";
import { Products } from "../src/components/ProductsDashboard";
import { SingleProductList } from "../src/components/SingleProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/product" element={<Products />}>
          Products
        </Route>
        <Route path="/singleProduct" element={<SingleProductList />}>
          SingleProduct
        </Route>
      </Routes>
    </div>
  );
}

export default App;
