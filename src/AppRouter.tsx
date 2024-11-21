import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./routes/Login";
import Registro from "./routes/Registro/Registro";
import Senha from "./routes/Registro/Senha";
import { ToastContainer } from "react-toastify";
import Default from "./routes/App/Default";
import Home from "./routes/App/Home";
import EsqueceuSenha from "./components/EsqueceuSenhaForm";
import Agendamento from "./routes/Agendamento";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<EsqueceuSenha />} />
        <Route path="/registro">
          <Route index element={<Registro />} />
          <Route path="senha" element={<Senha />} />
          
        </Route>
        <Route path="/app" element={<Default />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter >
  )
}

export default AppRoutes