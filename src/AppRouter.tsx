import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./routes/Login";
import Registro from "./routes/Registro/Registro";
import Senha from "./routes/Registro/Senha";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro">
        <Route index element={<Registro />} />
        <Route path="senha" element={<Senha />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter >
  )
}

export default AppRoutes