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
      <div className="flex flex-col min-h-screen">

        <div className="w-full bg-[#f6f8fa] border-b">
          <Header />
          <ResponsiveTabs />
        </div>

        <div className="flex-1 w-full flex flex-col lg:flex-row">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col lg:flex-row w-full">
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
      </div>
    </Router>
  );
}

export default App;
