
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EducationCert from "./pages/EducationCert";
import ProjectExp from "./pages/Project_exp";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Work from "./pages/Works";
import Activities from "./pages/Activities"
import Qualification from "./pages/Qualification"


const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <EducationCert/>
              <Skills/>
              <Work/>
              
              <ProjectExp />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/Activities"
          element={
            <>
              <Activities /> <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/Qualification"
          element={
            <>
              <Qualification /> <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/tech"
          element={
            <>
              <Skills />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
