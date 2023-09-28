import 'antd/dist/reset.css';
import './resources/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PublicRoute from './component/PublicRoute';
import ProtectedRoute from './component/ProtectedRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
