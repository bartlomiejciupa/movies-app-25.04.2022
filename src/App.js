import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import InputMovie from './components/InputMovie';
import Login from './components/Login';
import Register from './components/Register';
import { auth } from './db';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
if (user) {
  setIsAuth(user.email);
} else {
  setIsAuth(false)
}
  
  })

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={isAuth ? <Navigate to="/dashboard"/> : <Home/>}/>
     <Route path="dashboard" element={!isAuth ? <Navigate to="/"/> : <Dashboard user={isAuth} />}/>
     <Route path="login" element={isAuth ? <Navigate to="/dashboard"/> : <Login />}/>
     <Route path="input-movie" element={isAuth ? <Navigate to="input-movie" /> : <Home/>}/>
     <Route path="register" element={isAuth ? <Navigate to="/"/> : <Register/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
