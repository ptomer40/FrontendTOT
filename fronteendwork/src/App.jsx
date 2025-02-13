import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import Success from './pages/Success';
function App() {
  const [user, setUser] = useState({ isLoggedIn: false, name: "Guest" });

  const checkIsUserLoggedIN = async () => {
    const resp = await fetch("http://localhost:2003/api/v1/isLoggedIn", {
      credentials: "include",
    });
    const respObj = await resp.json();
    if (resp.status == 200) {
      setUser({
        isLoggedIn: true,
        name: respObj.data.name,
        email: respObj.data.email
      })
    }
  }
  useEffect(() => {
    checkIsUserLoggedIN();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path="/home" element={user.isLoggedIn ? <Home /> : <Navigate to="/sign-up" />} />
          <Route path="/products" element={user.isLoggedIn ? <ProductsPage /> : <Navigate to="/sign-up" />} />
          <Route path="/sign-up" element={user.isLoggedIn ? <Navigate to="/products" /> : <SignUpPage />} />
          <Route path="/login" element={user.isLoggedIn ? <Navigate to="/products" /> : <LoginPage />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App