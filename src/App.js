import HomePage from "./pages/homePage.js";
import AboutPage from "./pages/aboutPage.js"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <Routes>
        <Route path="/" exact element={ <HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>   
    
  )
}

export default App;
