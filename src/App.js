import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link, useRoutes } from 'react-router-dom';
import AboutPage from './pages/About';
import HowItWorkPage from './pages/HowItWork';
import FaqPage from './pages/Faq';
import ReviewsPage from './pages/Reviews';
import ContactPage from './pages/Contact';
import PackagesPage from './pages/Packages';
import WorkSinglePage from './pages/WorkSingle';
import ConstructorPage from './pages/Contstructor';
import ConstructorMainPage from './pages/ConstructorMain';
import TotalPage from './pages/Total';
function App() {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/how-it-work', element: <HowItWorkPage /> },
    { path: '/faq', element: <FaqPage /> },
    { path: '/reviews', element: <ReviewsPage /> },
    { path: '/contacts', element: <ContactPage /> },
    { path: '/packages', element: <PackagesPage /> },
    { path: '/works/:id', element: <WorkSinglePage /> },
    { path: '/constructor-start', element: <ConstructorPage /> },
    { path: '/constructor', element: <ConstructorMainPage /> },
    { path: '/total', element: <TotalPage /> },
  ]);
  return routes;
}

export default App;
