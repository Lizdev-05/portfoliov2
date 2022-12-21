import React from 'react';
// import { Routes, Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <>
//       <Nav />
//       <div className="">
       
//         <Routes>
//           {/* <Route
//             path="*"
//             element={(<NotFound />)}
//           /> */}
//           <Route
//             path="/"
//             element={(<Home />)}
//           />

//           <Route
//             path="/about"
//             element={(<About />)}
//           />
//           <Route
//             path="/skills"
//             element={(<Skills />)}
//           />
//           <Route
//             path="/projects"
//             element={(<Projects />)}
//           />
//           <Route
//             path="/contact"
//             element={(<Contact />)}
//           />
//           <Route
//             path="/testimonials"
//             element={(<Testimonial />)}
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
