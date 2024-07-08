import HomePage from "./pages/homePage.js";
import AboutPage from "./pages/aboutPage.js"
import ObjectDetection from "./pages/objectDetection.js"
import TutorialPage from "./pages/tutorialPage.js"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <Routes>
        <Route path="/" exact element={ <HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/objectDetection" element={<ObjectDetection />} />

      </Routes>   
    
  )
}

export default App;
