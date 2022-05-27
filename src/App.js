import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import JokesCategoryPage from "./pages/jokes/JokesCategoryPage";
import JokeDetailsPage from "./pages/jokes/JokeDetailsPage";
import StarWarPeoplePage from "./pages/people/StarWarPeoplePage";
import SearchPage from "./pages/search/SearchPage";


function App() {
  return (

      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jokes/categories" element={<JokesCategoryPage/>} />
              <Route path="/jokes/categories/:category" element={ <JokeDetailsPage/>} />
              <Route path="/starwar/people" element={ <StarWarPeoplePage/>} />
              <Route path="/search" element={<SearchPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
