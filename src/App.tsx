import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="our-work" element={<div>Our Work Page (Coming Soon)</div>} />
        <Route path="impact-stories" element={<div>Impact Stories Page (Coming Soon)</div>} />
        <Route path="get-involved" element={<div>Get Involved Page (Coming Soon)</div>} />
        <Route path="transparency" element={<div>Transparency & Accountability Page (Coming Soon)</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;