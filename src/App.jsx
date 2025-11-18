import Header from "./Component/Header";
import ResponsiveTabs from "./Component/Tabs";
import User from "./Component/User";
import PopularRepo from "./Component/PopularRepo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Packages from "./pages/Packages";
import Stars from "./pages/Stars";
import Repositories from "./pages/Repositories";
import Projects from "./pages/Projects";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>

      <div className="w-full bg-[#f6f8fa] border-b">
        <Header />
        <ResponsiveTabs />
      </div>


      <div className="w-full flex">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex w-full">
                <User />
                <PopularRepo />
              </div>
            }
          />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/stars" element={<Stars />} />
        </Routes>
      </div>


      <Footer />
    </Router>
  );
}

export default App;
