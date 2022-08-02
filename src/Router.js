import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Management from './pages/Management/Management';
import Operation from './pages/Operation/Operation';
import Sales from './pages/Sales/Sales';
import Soucing from './pages/Sourcing/Sourcing';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/management" element={<Management />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sourcing" element={<Soucing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
