import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/NewsletterList/Card";
import NewsletterList from "./components/NewsletterList";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route
          path="admin"
          element={
            <div className="bg-lightBlue">
              <Admin />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
