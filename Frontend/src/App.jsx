import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from "./components/Pages/home/Home";
import Login from "./components/Pages/login/Login";
import SignUp from './components/Pages/signup/SignUp';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/home/:userId" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;