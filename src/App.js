import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
