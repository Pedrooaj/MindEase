import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./routes/Login";
import Registro from "./routes/Registro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter >
  )
}

export default AppRoutes