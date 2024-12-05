// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/layout/Header';
// import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
// import AboutPage from './pages/AboutPage';
// import SupportPage from './pages/SupportPage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route
//             path="*"
//             element={
//               <>
//                 <Header />
//                 <Routes>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/courses" element={<CoursesPage />} />
//                   <Route path="/about" element={<AboutPage />} />
//                   <Route path="/support" element={<SupportPage />} />
//                   <Route path="/contact" element={<ContactPage />} />
//                 </Routes>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Chatbot />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 