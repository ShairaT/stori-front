import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import NewsletterList from "./components/NewsletterList";
import Admin from "./components/Admin";
import Login from "./components/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useState } from "react";
import NotFound from "./components/NotFound/NotFound"

function App() {
  const [userData, setUserData] = useState(localStorage.getItem("userData") || null);

  // Verificar si el usuario está autenticado

  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<NewsletterList page='' />} />
        <Route path='login' element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={userData}/>}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
