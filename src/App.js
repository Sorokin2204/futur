import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link, useRoutes } from 'react-router-dom';
import AboutPage from './pages/About';
import HowItWorkPage from './pages/HowItWork';
import FaqPage from './pages/Faq';
import ReviewsPage from './pages/Reviews';
function App() {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/how-it-work', element: <HowItWorkPage /> },
    { path: '/faq', element: <FaqPage /> },
    { path: '/reviews', element: <ReviewsPage /> },
  ]);
  return routes;
}

export default App;
