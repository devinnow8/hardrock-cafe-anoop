import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Register from "./component/Signup";
import "./App.css";
import Login from "./component/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/product" element={<Layout />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
